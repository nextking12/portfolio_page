import { env } from '$env/dynamic/private';
import { formatContactEmail, validateContactForm } from '$lib/server/contact';
import { json } from '@sveltejs/kit';
import { Resend } from 'resend';
import type { RequestHandler } from './$types';

const successResponse = () => json({ success: true });
const sendFailureMessage = 'The message could not be sent. Please try again.';

export const POST: RequestHandler = async ({ request }) => {
	const contentLength = Number(request.headers.get('content-length') ?? 0);
	if (Number.isFinite(contentLength) && contentLength > 50_000) {
		return json({ success: false, error: 'The submitted message is too large.' }, { status: 413 });
	}

	let formData: FormData;

	try {
		formData = await request.formData();
	} catch {
		return json(
			{ success: false, error: 'Submit the contact form using valid form data.' },
			{ status: 400 }
		);
	}

	const validation = validateContactForm(formData);
	if (!validation.success) {
		return json(
			{
				success: false,
				error: 'Check the highlighted fields and try again.',
				fields: validation.errors
			},
			{ status: 400 }
		);
	}

	// Give bots a successful-looking response without sending mail.
	if (validation.isBot) return successResponse();

	const apiKey = env.RESEND_API_KEY?.trim();
	const to = env.CONTACT_TO_EMAIL?.trim();
	const from = env.RESEND_FROM_EMAIL?.trim();

	if (!apiKey || !to || !from) {
		console.error('Contact form email configuration is incomplete.');
		return json({ success: false, error: sendFailureMessage }, { status: 500 });
	}

	try {
		const resend = new Resend(apiKey);
		const { error } = await resend.emails.send({
			from,
			to,
			replyTo: validation.data.email,
			subject: `Portfolio inquiry from ${validation.data.name.replace(/[\r\n]+/g, ' ')}`,
			text: formatContactEmail(validation.data)
		});

		if (error) {
			console.error('Resend rejected a contact form email.', error);
			return json({ success: false, error: sendFailureMessage }, { status: 502 });
		}

		return successResponse();
	} catch (error) {
		console.error('Contact form email delivery failed.', error);
		return json({ success: false, error: sendFailureMessage }, { status: 502 });
	}
};
