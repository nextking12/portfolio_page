<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
	import type { BusinessSection } from '$lib/data/site';

	let { section } = $props<{ section: BusinessSection }>();
</script>

<section id="for-business" class="mx-auto w-full max-w-6xl px-6 py-24 md:px-10 md:py-32">
	<div use:reveal class="hairline mb-16"></div>

	<div class="grid gap-12 md:grid-cols-[0.85fr_1.15fr] md:gap-20">
		<div use:reveal class="space-y-6">
			<p class="section-label">{section.label}</p>
			<h2 class="section-heading">{section.heading}</h2>
		</div>

		<div class="content-measure space-y-6">
			{#each section.paragraphs as paragraph, index (index)}
				<p
					use:reveal={{ delay: 80 * (index + 1) }}
					class="text-base leading-relaxed text-[var(--color-text-soft)] md:text-lg"
				>
					{paragraph}
				</p>
			{/each}

			<p
				use:reveal={{ delay: 80 * (section.paragraphs.length + 1) }}
				class="text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-accent-strong)]"
			>
				{section.note}
			</p>
		</div>
	</div>
</section>
