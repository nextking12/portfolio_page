<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
	import type { Profile } from '$lib/data/site';

	let { about } = $props<{ about: Profile['about'] }>();
</script>

<section id="about" class="section-shell">
	<div use:reveal class="section-index">
		<span>03</span><span>About the studio</span><span>Point of view</span>
	</div>

	<div class="grid gap-14 md:grid-cols-[1.05fr_0.8fr] md:gap-24">
		<div use:reveal>
			<p class="font-serif text-4xl leading-[1.05] md:text-6xl">
				Software is technical work. Making it feel <em class="text-[var(--color-accent-strong)]"
					>obvious</em
				> is a human one.
			</p>
		</div>

		<div use:reveal={{ delay: 60 }} class="content-measure space-y-6">
			{#each about as paragraph (paragraph)}
				<p class="text-base leading-relaxed text-[var(--color-text-soft)]">
					{paragraph}
				</p>
			{/each}
		</div>
	</div>
</section>
