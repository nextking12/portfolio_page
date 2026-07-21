import { page } from 'vitest/browser';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { render } from 'vitest-browser-svelte';
import Contact from './Contact.svelte';

const links = [{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/example' }];

describe('Contact.svelte', () => {
	afterEach(() => vi.restoreAllMocks());

	it('renders an accessible inquiry form and fallback link', async () => {
		render(Contact, { links });

		await expect.element(page.getByLabelText('Name')).toBeInTheDocument();
		await expect.element(page.getByLabelText('Email')).toBeInTheDocument();
		await expect.element(page.getByLabelText('Message')).toBeInTheDocument();
		await expect.element(page.getByRole('button', { name: 'Send message' })).toBeInTheDocument();
		await expect
			.element(page.getByRole('link', { name: /LinkedIn/ }))
			.toHaveAttribute('href', links[0].href);
	});

	it('shows confirmation and clears the form after a successful submission', async () => {
		vi.spyOn(globalThis, 'fetch').mockResolvedValue(
			new Response(JSON.stringify({ success: true }), {
				status: 200,
				headers: { 'content-type': 'application/json' }
			})
		);
		render(Contact, { links });

		await page.getByLabelText('Name').fill('Ada Lovelace');
		await page.getByLabelText('Email').fill('ada@example.com');
		await page.getByLabelText('Message').fill('I would like to discuss a new website project.');
		await page.getByRole('button', { name: 'Send message' }).click();

		await expect.element(page.getByText(/message was sent successfully/i)).toBeInTheDocument();
		await expect.element(page.getByLabelText('Name')).toHaveValue('');
	});
});
