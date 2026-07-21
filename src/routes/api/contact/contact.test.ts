import { beforeEach, describe, expect, it, vi } from 'vitest';
import { resetRateLimitStore } from '$lib/server/rate-limit';

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

const validFields = {
	name: 'Ada Lovelace',
	email: 'ADA@example.com',
	message: 'I would like to discuss a new website project.',
	website: ''
};

const makeRequest = (fields: Record<string, string>, init: RequestInit = {}) => {
	const formData = new FormData();
	for (const [key, value] of Object.entries(fields)) formData.set(key, value);
	return new Request('http://localhost/api/contact', {
		method: 'POST',
		body: formData,
		...init
	});
};

const submit = (fields: Record<string, string>, clientAddress = '127.0.0.1') =>
	POST({
		request: makeRequest(fields),
		getClientAddress: () => clientAddress
	} as Parameters<typeof POST>[0]);

describe('POST /api/contact', () => {
	beforeEach(() => {
		sendMock.mockReset();
		sendMock.mockResolvedValue({ data: { id: 'email_123' }, error: null });
		resetRateLimitStore();
	});

	it('sends a validated inquiry with the visitor as the reply-to address', async () => {
		const response = await submit(validFields);

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

		const response = await POST({
			request,
			getClientAddress: () => '127.0.0.1'
		} as Parameters<typeof POST>[0]);

		expect(response.status).toBe(413);
		await expect(response.json()).resolves.toEqual({
			success: false,
			error: 'The submitted message is too large.'
		});
		expect(sendMock).not.toHaveBeenCalled();
	});

	it('rejects invalid content-length values', async () => {
		const request = new Request('http://localhost/api/contact', {
			method: 'POST',
			body: 'bad',
			headers: { 'content-length': 'nope', 'content-type': 'application/x-www-form-urlencoded' }
		});

		const response = await POST({
			request,
			getClientAddress: () => '127.0.0.1'
		} as Parameters<typeof POST>[0]);

		expect(response.status).toBe(413);
		expect(sendMock).not.toHaveBeenCalled();
	});

	it('rejects unsupported content types', async () => {
		const request = new Request('http://localhost/api/contact', {
			method: 'POST',
			body: JSON.stringify(validFields),
			headers: { 'content-type': 'application/json' }
		});

		const response = await POST({
			request,
			getClientAddress: () => '127.0.0.1'
		} as Parameters<typeof POST>[0]);

		expect(response.status).toBe(415);
		expect(sendMock).not.toHaveBeenCalled();
	});

	it('rate limits repeated valid submissions from the same client', async () => {
		const ip = '203.0.113.10';

		for (let i = 0; i < 5; i += 1) {
			const allowed = await submit(validFields, ip);
			expect(allowed.status).toBe(200);
		}

		const limited = await submit(validFields, ip);
		expect(limited.status).toBe(429);
		expect(limited.headers.get('retry-after')).toEqual(expect.any(String));
		await expect(limited.json()).resolves.toEqual({
			success: false,
			error: 'Too many messages were sent recently. Please try again later.'
		});
		expect(sendMock).toHaveBeenCalledTimes(5);
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
