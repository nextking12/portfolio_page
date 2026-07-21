<script lang="ts">
	import { ArrowUpRight } from '@lucide/svelte';
	import type { SocialLink } from '$lib/data/site';

	type ContactField = 'name' | 'email' | 'message';
	type ContactResponse = {
		success: boolean;
		error?: string;
		fields?: Partial<Record<ContactField, string>>;
	};

	let { links } = $props<{ links: SocialLink[] }>();
	let status = $state<'idle' | 'sending' | 'success' | 'error'>('idle');
	let feedback = $state('');
	let fieldErrors = $state<Partial<Record<ContactField, string>>>({});

	const submitContact = async (event: SubmitEvent) => {
		event.preventDefault();
		const form = event.currentTarget as HTMLFormElement;
		status = 'sending';
		feedback = '';
		fieldErrors = {};

		try {
			const response = await fetch('/api/contact', {
				method: 'POST',
				body: new FormData(form),
				headers: { accept: 'application/json' }
			});
			const payload = (await response.json().catch(() => null)) as ContactResponse | null;

			if (!response.ok || !payload?.success) {
				status = 'error';
				fieldErrors = payload?.fields ?? {};
				feedback = payload?.error ?? 'The message could not be sent. Please try again.';
				return;
			}

			form.reset();
			status = 'success';
			feedback = 'Thanks — your message was sent successfully. I’ll get back to you soon.';
		} catch {
			status = 'error';
			feedback = 'The message could not be sent. Please try again or connect with me on LinkedIn.';
		}
	};
</script>

<section id="contact" class="section-shell contact-section">
	<p class="section-kicker">Contact</p>
	<div class="contact-layout">
		<div class="contact-intro">
			<h2>Let&apos;s discuss the work.</h2>
			<p>
				I am open to conversations about security engineering, solutions engineering, technical
				leadership, software roles, and selected freelance opportunities.
			</p>
			<ul class="contact-links" aria-label="Other ways to connect">
				{#each links as link (link.href)}
					<li>
						<a href={link.href} target="_blank" rel="noopener noreferrer">
							{link.label}<ArrowUpRight size={14} />
						</a>
					</li>
				{/each}
			</ul>
		</div>

		<form class="contact-form" aria-busy={status === 'sending'} onsubmit={submitContact}>
			<div class="contact-field">
				<label for="contact-name">Name</label>
				<input
					id="contact-name"
					name="name"
					type="text"
					autocomplete="name"
					minlength="2"
					maxlength="80"
					required
					aria-invalid={fieldErrors.name ? 'true' : undefined}
					aria-describedby={fieldErrors.name ? 'contact-name-error' : undefined}
				/>
				{#if fieldErrors.name}<p id="contact-name-error" class="contact-field-error">
						{fieldErrors.name}
					</p>{/if}
			</div>

			<div class="contact-field">
				<label for="contact-email">Email</label>
				<input
					id="contact-email"
					name="email"
					type="email"
					autocomplete="email"
					maxlength="254"
					required
					aria-invalid={fieldErrors.email ? 'true' : undefined}
					aria-describedby={fieldErrors.email ? 'contact-email-error' : undefined}
				/>
				{#if fieldErrors.email}<p id="contact-email-error" class="contact-field-error">
						{fieldErrors.email}
					</p>{/if}
			</div>

			<div class="contact-field">
				<label for="contact-message">Message</label>
				<textarea
					id="contact-message"
					name="message"
					rows="6"
					minlength="20"
					maxlength="4000"
					required
					aria-invalid={fieldErrors.message ? 'true' : undefined}
					aria-describedby={fieldErrors.message ? 'contact-message-error' : undefined}></textarea>
				{#if fieldErrors.message}<p id="contact-message-error" class="contact-field-error">
						{fieldErrors.message}
					</p>{/if}
			</div>

			<div class="contact-honeypot" hidden>
				<label for="contact-website">Website</label>
				<input id="contact-website" name="website" type="text" tabindex="-1" autocomplete="off" />
			</div>

			<div class="contact-submit-row">
				<button class="contact-submit" type="submit" disabled={status === 'sending'}>
					{status === 'sending' ? 'Sending…' : 'Send message'}
					{#if status !== 'sending'}<ArrowUpRight size={16} />{/if}
				</button>
				{#if feedback}
					<p
						class:contact-feedback-success={status === 'success'}
						class="contact-feedback"
						aria-live="polite"
					>
						{feedback}
					</p>
				{/if}
			</div>
		</form>
	</div>
</section>
