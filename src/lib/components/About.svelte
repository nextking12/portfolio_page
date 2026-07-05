<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
	import type { Profile } from '$lib/data/site';

	let { about } = $props<{ about: Profile['about'] }>();
</script>

<section id="about" class="mx-auto w-full max-w-6xl px-6 py-20 md:px-10 md:py-24">
	<div class="grid gap-10 md:grid-cols-[0.85fr_1.15fr] md:gap-14">
		<div use:reveal>
			<p class="section-label">About</p>
			<h2 class="section-heading mt-4">Engineering with intention and product empathy.</h2>
		</div>

		<div class="content-measure space-y-6">
			{#each about as paragraph, index}
				<p use:reveal={{ delay: 80 * (index + 1) }} class="text-base leading-relaxed text-[var(--color-muted)] md:text-lg">
					{paragraph}
				</p>
			{/each}
		</div>
	</div>
</section>
