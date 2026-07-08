<script lang="ts">
	import { ArrowRight, ArrowUpRight } from '@lucide/svelte';
	import { reveal } from '$lib/actions/reveal';
	import { email, type SocialLink } from '$lib/data/site';

	let { links } = $props<{ links: SocialLink[] }>();

	// Right-side grid excludes the primary email (rendered on the left).
	const gridLinks = $derived(links.filter((l: SocialLink) => l.platform !== 'email'));
</script>

<section id="contact" class="mx-auto w-full max-w-6xl px-6 py-24 md:px-10 md:py-32">
	<div use:reveal class="hairline mb-16"></div>

	<div class="grid gap-16 md:grid-cols-2 md:gap-20">
		<div use:reveal class="space-y-8">
			<p class="section-label">Contact</p>
			<h2 class="section-heading">Let's connect.</h2>
			<p class="content-measure text-base leading-relaxed text-[var(--color-text-soft)] md:text-lg">
				Always interested in new opportunities, collaborations, and conversations about technology
				and craft.
			</p>

			<a href="mailto:{email}" class="link-arrow pt-4 text-base">
				<span>{email}</span>
				<ArrowRight size={16} strokeWidth={1.75} />
			</a>
		</div>

		<div use:reveal={{ delay: 120 }} class="space-y-6">
			<p class="section-label">Elsewhere</p>

			<ul class="grid grid-cols-1 gap-3 sm:grid-cols-2">
				{#each gridLinks as link, index}
					<li>
						<a
							href={link.href}
							target={link.href.startsWith('mailto:') ? undefined : '_blank'}
							rel={link.href.startsWith('mailto:') ? undefined : 'noreferrer'}
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
