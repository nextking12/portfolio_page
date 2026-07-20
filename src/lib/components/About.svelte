<script lang="ts">
	import type { Profile } from '$lib/data/site';

	let { profile } = $props<{ profile: Profile }>();
</script>

<section id="about" class="section-shell">
	<p class="section-kicker">About</p>
	<div class="section-intro">
		<h2>{profile.aboutLead}</h2>
		<p>
			The result is a broader engineering perspective: one grounded in real-world systems and
			extended through software.
		</p>
	</div>
	<div class="about-copy">
		{#each profile.about as paragraph (paragraph)}
			<p>{paragraph}</p>
		{/each}
	</div>
</section>
