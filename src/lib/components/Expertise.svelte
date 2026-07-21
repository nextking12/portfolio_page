<script lang="ts">
	import type { ExpertiseGroup } from '$lib/data/site';

	let { groups } = $props<{ groups: ExpertiseGroup[] }>();
</script>

<section id="expertise" class="section-shell">
	<p class="section-kicker">Expertise</p>
	<div class="section-intro">
		<h2>Depth in security systems. Growing range in software.</h2>
		<p>
			The throughline is systems thinking: understanding how components interact, where risk
			collects, and what people need to operate effectively.
		</p>
	</div>

	<div class="expertise-grid">
		{#each groups as group (group.title)}
			<article>
				<h3>{group.title}</h3>
				<ul>
					{#each group.items as item (item)}
						<li>{item}</li>
					{/each}
				</ul>
			</article>
		{/each}
	</div>
</section>
