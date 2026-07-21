export const contactLimits = {
	name: { min: 2, max: 80 },
	email: { max: 254 },
	message: { min: 20, max: 4000 }
} as const;

export type ContactSubmission = {
	name: string;
	email: string;
	message: string;
};

export type ContactField = keyof ContactSubmission;
export type ContactFieldErrors = Partial<Record<ContactField, string>>;

export type ContactValidationResult =
	| { success: true; data: ContactSubmission; isBot: boolean }
	| { success: false; errors: ContactFieldErrors };

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const readField = (formData: FormData, field: string) => {
	const value = formData.get(field);
	return typeof value === 'string' ? value.trim() : '';
};

export function validateContactForm(formData: FormData): ContactValidationResult {
	const name = readField(formData, 'name');
	const email = readField(formData, 'email').toLowerCase();
	const message = readField(formData, 'message');
	const website = readField(formData, 'website');
	const errors: ContactFieldErrors = {};

	if (name.length < contactLimits.name.min || name.length > contactLimits.name.max) {
		errors.name = `Enter a name between ${contactLimits.name.min} and ${contactLimits.name.max} characters.`;
	}

	if (!emailPattern.test(email) || email.length > contactLimits.email.max) {
		errors.email = 'Enter a valid email address.';
	}

	if (message.length < contactLimits.message.min || message.length > contactLimits.message.max) {
		errors.message = `Enter a message between ${contactLimits.message.min} and ${contactLimits.message.max} characters.`;
	}

	if (Object.keys(errors).length > 0) return { success: false, errors };

	return {
		success: true,
		data: { name, email, message },
		isBot: website.length > 0
	};
}

export function formatContactEmail({ name, email, message }: ContactSubmission) {
	return [`Name: ${name}`, `Email: ${email}`, '', 'Message:', message].join('\n');
}
