import { beforeEach, describe, expect, it, vi } from 'vitest';

const { sendMock } = vi.hoisted(() => ({ sendMock: vi.fn() }));

vi.mock('$env/dynamic/private', () => ({
	env: {
		RESEND_API_KEY: 're_test',
		CONTACT_TO_EMAIL: 'owner@example.com',
		RESEND_FROM_EMAIL: 'Portfolio <contact@send.ecking.dev>'
	}
}));

vi.mock('resend', () => ({
	Resend: class {
		emails = { send: sendMock };
	}
}));

import { POST } from './+server';

const makeRequest = (fields: Record<string, string>) => {
	const formData = new FormData();
	for (const [key, value] of Object.entries(fields)) formData.set(key, value);
	return new Request('http://localhost/api/contact', { method: 'POST', body: formData });
};

const submit = (fields: Record<string, string>) =>
	POST({ request: makeRequest(fields) } as Parameters<typeof POST>[0]);

describe('POST /api/contact', () => {
	beforeEach(() => {
		sendMock.mockReset();
		sendMock.mockResolvedValue({ data: { id: 'email_123' }, error: null });
	});

	it('sends a validated inquiry with the visitor as the reply-to address', async () => {
		const response = await submit({
			name: 'Ada Lovelace',
			email: 'ADA@example.com',
			message: 'I would like to discuss a new website project.',
			website: ''
		});

		expect(response.status).toBe(200);
		await expect(response.json()).resolves.toEqual({ success: true });
		expect(sendMock).toHaveBeenCalledWith(
			expect.objectContaining({
				from: 'Portfolio <contact@send.ecking.dev>',
				to: 'owner@example.com',
				replyTo: 'ada@example.com',
				subject: 'Portfolio inquiry from Ada Lovelace'
			})
		);
	});

	it('returns field errors without sending invalid submissions', async () => {
		const response = await submit({ name: 'A', email: 'not-an-email', message: 'Too short' });
		const payload = await response.json();

		expect(response.status).toBe(400);
		expect(payload).toMatchObject({
			success: false,
			fields: {
				name: expect.any(String),
				email: expect.any(String),
				message: expect.any(String)
			}
		});
		expect(sendMock).not.toHaveBeenCalled();
	});

	it('silently accepts honeypot submissions without sending mail', async () => {
		const response = await submit({
			name: 'Automated Sender',
			email: 'bot@example.com',
			message: 'This message is long enough to pass normal validation.',
			website: 'https://spam.example.com'
		});

		expect(response.status).toBe(200);
		await expect(response.json()).resolves.toEqual({ success: true });
		expect(sendMock).not.toHaveBeenCalled();
	});

	it('rejects oversized requests before parsing or sending them', async () => {
		const request = new Request('http://localhost/api/contact', {
			method: 'POST',
			body: 'oversized',
			headers: { 'content-length': '50001', 'content-type': 'text/plain' }
		});

		const response = await POST({ request } as Parameters<typeof POST>[0]);

		expect(response.status).toBe(413);
		await expect(response.json()).resolves.toEqual({
			success: false,
			error: 'The submitted message is too large.'
		});
		expect(sendMock).not.toHaveBeenCalled();
	});

	it('returns a generic error when Resend rejects the message', async () => {
		sendMock.mockResolvedValue({ data: null, error: { message: 'Provider unavailable' } });

		const response = await submit({
			name: 'Grace Hopper',
			email: 'grace@example.com',
			message: 'I would like to discuss a systems engineering engagement.'
		});

		expect(response.status).toBe(502);
		await expect(response.json()).resolves.toEqual({
			success: false,
			error: 'The message could not be sent. Please try again.'
		});
		expect(sendMock).toHaveBeenCalledOnce();
	});
});
