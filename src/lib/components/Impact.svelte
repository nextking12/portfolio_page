<script lang="ts">
	import type { ImpactItem } from '$lib/data/site';

	let { items } = $props<{ items: ImpactItem[] }>();
</script>

<section id="impact" class="section-shell section-dark">
	<p class="section-kicker">Impact</p>
	<div class="section-intro">
		<h2>Technical results that hold up in operation.</h2>
		<p>
			The value is not only in a design or deployment. It is in reliable systems, faster response,
			and teams equipped to make sound decisions.
		</p>
	</div>

	<div class="impact-grid">
		{#each items as item (item.metric + item.label)}
			<article>
				<p class="impact-metric">{item.metric}</p>
				<h3>{item.label}</h3>
				<p>{item.description}</p>
			</article>
		{/each}
	</div>
</section>
