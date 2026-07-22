<script lang="ts">
	import type { ExpertiseGroup } from '$lib/data/site';

	let { groups } = $props<{ groups: ExpertiseGroup[] }>();
</script>

<section id="services" class="section-shell">
	<p class="section-kicker">Services</p>
	<div class="section-intro">
		<h2>Ways I can help move your idea forward.</h2>
		<p>
			Whether you need a new product, a stronger web presence, or a tool that removes repetitive
			work, I bring a practical path from first conversation to launch.
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
