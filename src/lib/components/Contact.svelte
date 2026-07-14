<script lang="ts">
	import { ArrowUpRight } from '@lucide/svelte';
	import { reveal } from '$lib/actions/reveal';
	import type { SocialLink } from '$lib/data/site';

	let { links } = $props<{ links: SocialLink[] }>();
	const linkedinHref = $derived(
		links.find((link: SocialLink) => link.platform === 'linkedin')?.href ?? '#'
	);
</script>

<section id="contact" class="mx-auto w-full max-w-6xl px-6 py-24 md:px-10 md:py-32">
	<div use:reveal class="hairline mb-16"></div>

	<div
		class="contact-panel grid gap-12 rounded-2xl border border-[var(--color-line)] p-7 md:grid-cols-[1.2fr_0.8fr] md:gap-16 md:p-12 lg:p-16"
	>
		<div use:reveal class="space-y-8">
			<p class="section-label">Have a project in mind?</p>
			<h2 class="section-heading max-w-xl">Let's make the next step clear.</h2>
			<p class="content-measure text-base leading-relaxed text-[var(--color-text-soft)] md:text-lg">
				Tell me what you are building, what is getting in the way, and where you want to go. I will
				reply with practical next steps—no jargon or hard sell.
			</p>
			<a href={linkedinHref} target="_blank" rel="noopener noreferrer" class="button-primary">
				<span>Discuss a project</span><ArrowUpRight size={15} strokeWidth={1.75} />
			</a>
		</div>

		<div use:reveal={{ delay: 120 }} class="space-y-6">
			<p class="section-label">Find me online</p>

			<ul class="grid grid-cols-1 gap-3">
				{#each links as link, index (link.href)}
					<li>
						<a
							href={link.href}
							target="_blank"
							rel="noopener noreferrer"
							class="group relative flex h-full flex-col justify-between gap-6 rounded-lg border border-[var(--color-line)] p-5 transition-all duration-300 hover:border-[var(--color-accent)] hover:bg-[var(--color-accent-soft)]"
							use:reveal={{ delay: 160 + 60 * index }}
						>
							<div class="flex items-start justify-between">
								<span class="text-sm font-medium tracking-tight text-[var(--color-text)]">
									{link.label}
								</span>
								<ArrowUpRight
									size={15}
									strokeWidth={1.5}
									class="text-[var(--color-muted)] transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--color-accent-strong)]"
								/>
							</div>
							<span class="text-xs text-[var(--color-muted)]">{link.handle}</span>
						</a>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</section>
