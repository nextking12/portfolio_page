<script lang="ts">
	import { ArrowUpRight } from '@lucide/svelte';
	import { reveal } from '$lib/actions/reveal';
	import type { SocialLink } from '$lib/data/site';

	let { links, email } = $props<{ links: SocialLink[]; email: string }>();
	const emailHref = $derived(`mailto:${email}?subject=Project%20inquiry`);
</script>

<section id="contact" class="contact-section">
	<div class="mx-auto w-full max-w-[88rem] px-5 py-20 md:px-8 md:py-28">
		<div use:reveal class="section-index !border-black/25 !text-black/60">
			<span>05</span><span>Project inquiry</span><span>Next opening / available</span>
		</div>
		<div class="grid gap-16 md:grid-cols-[1fr_0.55fr] md:items-end">
			<div use:reveal>
				<p class="mb-5 font-mono text-[10px] uppercase tracking-[0.18em] text-black/60">
					Have a project in mind?
				</p>
				<h2>Let’s make the<br />next step clear.</h2>
				<a href={emailHref} class="contact-email"
					><span>{email}</span><ArrowUpRight size={28} strokeWidth={1.5} /></a
				>
				<p class="mt-3 font-mono text-[9px] uppercase tracking-[0.15em] text-black/55">
					Placeholder inbox — public email setup in progress
				</p>
			</div>

			<div use:reveal={{ delay: 70 }}>
				<p class="max-w-md text-base leading-relaxed text-black/70">
					Tell me what you are building, what is getting in the way, and where you want to go. I’ll
					reply with practical next steps—no jargon or hard sell.
				</p>
				<ul class="mt-10 flex flex-wrap gap-x-6 gap-y-3">
					{#each links as link (link.href)}
						<li>
							<a
								href={link.href}
								target="_blank"
								rel="noopener noreferrer"
								class="group flex items-center gap-1 border-b border-black/40 pb-1 font-mono text-[10px] uppercase tracking-[0.14em] transition-colors hover:border-black"
							>
								<span>{link.label}</span><ArrowUpRight size={12} />
							</a>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
</section>
