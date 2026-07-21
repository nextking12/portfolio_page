import { env } from '$env/dynamic/private';
import { formatContactEmail, validateContactForm } from '$lib/server/contact';
import { consumeRateLimit, contactRateLimitRules } from '$lib/server/rate-limit';
import { json } from '@sveltejs/kit';
import { Resend } from 'resend';
import type { RequestHandler } from './$types';

const successResponse = () => json({ success: true });
const sendFailureMessage = 'The message could not be sent. Please try again.';
const rateLimitMessage = 'Too many messages were sent recently. Please try again later.';
const maxContentLength = 50_000;

const isAllowedFormContentType = (contentType: string | null) => {
	if (!contentType) return false;
	const mediaType = contentType.split(';', 1)[0]?.trim().toLowerCase() ?? '';
	return mediaType === 'multipart/form-data' || mediaType === 'application/x-www-form-urlencoded';
};

const rejectOversizedRequest = (request: Request) => {
	const rawLength = request.headers.get('content-length');
	if (rawLength === null) return null;

	const contentLength = Number(rawLength);
	if (!Number.isFinite(contentLength) || contentLength < 0 || contentLength > maxContentLength) {
		return json({ success: false, error: 'The submitted message is too large.' }, { status: 413 });
	}

	return null;
};

export const POST: RequestHandler = async ({ request, getClientAddress }) => {
	const oversized = rejectOversizedRequest(request);
	if (oversized) return oversized;

	if (!isAllowedFormContentType(request.headers.get('content-type'))) {
		return json(
			{ success: false, error: 'Submit the contact form using valid form data.' },
			{ status: 415 }
		);
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

	let clientAddress: string;
	try {
		clientAddress = getClientAddress();
	} catch {
		clientAddress = 'unknown';
	}

	const rateLimit = consumeRateLimit({
		key: `contact:${clientAddress}`,
		rules: contactRateLimitRules
	});

	if (!rateLimit.ok) {
		return json(
			{ success: false, error: rateLimitMessage },
			{
				status: 429,
				headers: { 'retry-after': String(rateLimit.retryAfterSec) }
			}
		);
	}

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
