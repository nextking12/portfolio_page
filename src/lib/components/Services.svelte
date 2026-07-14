<script lang="ts">
	import { ArrowDownRight, Check } from '@lucide/svelte';
	import { reveal } from '$lib/actions/reveal';
	import type { Service } from '$lib/data/site';

	let { services } = $props<{ services: Service[] }>();
</script>

<section id="services" class="mx-auto w-full max-w-6xl px-6 py-24 md:px-10 md:py-32">
	<div use:reveal class="hairline mb-16"></div>

	<div use:reveal class="mb-12 grid gap-6 md:grid-cols-[0.9fr_1.1fr] md:items-end">
		<div class="space-y-6">
			<p class="section-label">Ways I can help</p>
			<h2 class="section-heading">Built around your next move.</h2>
		</div>
		<p
			class="content-measure text-base leading-relaxed text-[var(--color-text-soft)] md:justify-self-end md:text-lg"
		>
			Whether you need a better storefront or a tool your team can depend on, the work starts with
			the problem—not a predetermined template.
		</p>
	</div>

	<div class="grid gap-4 md:grid-cols-2">
		{#each services as service, index (service.title)}
			<article
				use:reveal={{ delay: 80 * (index + 1) }}
				class="service-card group relative overflow-hidden rounded-2xl border border-[var(--color-line)] p-7 md:p-9"
			>
				<div class="mb-16 flex items-start justify-between">
					<span class="section-label">{service.number}</span>
					<ArrowDownRight
						class="text-[var(--color-muted)] transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1 group-hover:text-[var(--color-accent-strong)]"
						size={22}
						strokeWidth={1.5}
					/>
				</div>
				<h3
					class="max-w-md text-2xl font-medium tracking-tight text-[var(--color-text)] md:text-3xl"
				>
					{service.title}
				</h3>
				<p class="mt-5 max-w-lg text-sm leading-relaxed text-[var(--color-text-soft)] md:text-base">
					{service.description}
				</p>
				<ul class="mt-8 space-y-3 border-t border-[var(--color-line)] pt-6">
					{#each service.deliverables as item (item)}
						<li class="flex items-center gap-3 text-sm text-[var(--color-text-soft)]">
							<Check size={14} strokeWidth={1.75} class="text-[var(--color-accent-strong)]" />
							{item}
						</li>
					{/each}
				</ul>
			</article>
		{/each}
	</div>
</section>
