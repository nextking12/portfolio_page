<script lang="ts">
	import { ArrowUpRight } from '@lucide/svelte';
	import type { SocialLink } from '$lib/data/site';

	let { links, email } = $props<{ links: SocialLink[]; email: string }>();
	const emailHref = $derived(`mailto:${email}?subject=Professional%20inquiry`);
</script>

<section id="contact" class="section-shell contact-section">
	<p class="section-kicker">Contact</p>
	<div class="contact-layout">
		<div>
			<h2>Let&apos;s discuss the work.</h2>
			<p>
				I am open to conversations about security engineering, solutions engineering, technical
				leadership, software roles, and selected freelance opportunities.
			</p>
		</div>
		<div>
			<a href={emailHref} class="contact-email">{email}<ArrowUpRight size={20} /></a>
			<ul>
				{#each links as link (link.href)}
					<li>
						<a href={link.href} target="_blank" rel="noopener noreferrer">
							{link.label}<ArrowUpRight size={14} />
						</a>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</section>
