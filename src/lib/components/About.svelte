<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
	import type { Profile } from '$lib/data/site';

	let { about } = $props<{ about: Profile['about'] }>();
</script>

<section id="about" class="mx-auto w-full max-w-6xl px-6 py-24 md:px-10 md:py-32">
	<div use:reveal class="hairline mb-16"></div>

	<div class="grid gap-12 md:grid-cols-[0.85fr_1.15fr] md:gap-20">
		<div use:reveal class="space-y-6">
			<p class="section-label">About</p>
			<h2 class="section-heading">
				Building polished,<br />dependable software with people in mind.
			</h2>
		</div>

		<div class="content-measure space-y-6">
			{#each about as paragraph, index (index)}
				<p
					use:reveal={{ delay: 80 * (index + 1) }}
					class="text-base leading-relaxed text-[var(--color-text-soft)] md:text-lg"
				>
					{paragraph}
				</p>
			{/each}
		</div>
	</div>
</section>
