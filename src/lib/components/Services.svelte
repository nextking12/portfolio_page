<script lang="ts">
	import { ArrowUpRight } from '@lucide/svelte';
	import { reveal } from '$lib/actions/reveal';
	import type { Service } from '$lib/data/site';

	let { services } = $props<{ services: Service[] }>();
</script>

<section id="services" class="section-shell">
	<div use:reveal class="section-index">
		<span>01</span><span>Capabilities</span><span>What I take on</span>
	</div>

	<div use:reveal class="mb-14 grid gap-8 md:grid-cols-[1fr_0.8fr] md:items-end">
		<h2 class="section-heading max-w-3xl">
			Good work starts with the problem, not a predetermined template.
		</h2>
		<p
			class="content-measure text-base leading-relaxed text-[var(--color-text-soft)] md:justify-self-end"
		>
			I work across strategy, interface design, frontend, and backend so fewer details get lost
			between disciplines.
		</p>
	</div>

	<div class="border-t border-[var(--color-line-strong)]">
		{#each services as service, index (service.title)}
			<article use:reveal={{ delay: 50 * (index + 1) }} class="service-row group">
				<span class="font-mono text-xs text-[var(--color-accent-strong)]">{service.number}</span>
				<h3 class="font-serif text-3xl leading-none md:text-5xl">{service.title}</h3>
				<p class="max-w-md text-sm leading-relaxed text-[var(--color-text-soft)] md:text-base">
					{service.description}
				</p>
				<ul
					class="space-y-2 font-mono text-[10px] uppercase tracking-[0.13em] text-[var(--color-muted)]"
				>
					{#each service.deliverables as item (item)}
						<li>— {item}</li>
					{/each}
				</ul>
				<ArrowUpRight class="service-arrow" size={22} strokeWidth={1.5} />
			</article>
		{/each}
	</div>
</section>
