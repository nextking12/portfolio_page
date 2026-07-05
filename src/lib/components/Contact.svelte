<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
	import type { SocialLink } from '$lib/data/site';

	let { links } = $props<{ links: SocialLink[] }>();
</script>

<section id="contact" class="mx-auto w-full max-w-6xl px-6 py-20 md:px-10 md:py-24">
	<div
		use:reveal
		class="rounded-2xl border border-[var(--color-contact-border)] bg-gradient-to-br from-[var(--color-contact-start)] to-[var(--color-contact-end)] p-8 md:p-12"
	>
		<p class="section-label">Contact</p>
		<h2 class="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-[var(--color-text)] md:text-4xl">
			Open to collaboration, product roles, and ambitious builds.
		</h2>
		<p class="content-measure mt-4 text-base leading-relaxed text-[var(--color-muted)]">
			TODO: Add a short line about what opportunities you're currently open to.
		</p>

		<ul class="mt-8 flex flex-wrap gap-3">
			{#each links as link}
				<li>
					<a
						href={link.href}
						target={link.href.startsWith('mailto:') ? undefined : '_blank'}
						rel={link.href.startsWith('mailto:') ? undefined : 'noreferrer'}
						class="inline-flex rounded-full border border-[var(--color-accent-line)] bg-[var(--color-surface)] px-4 py-2 text-sm font-semibold text-[var(--color-text)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--color-accent)] hover:text-[var(--color-accent-strong)] hover:shadow-[0_12px_24px_-18px_var(--color-accent)]"
					>
						{link.label}
					</a>
				</li>
			{/each}
		</ul>
	</div>
</section>
