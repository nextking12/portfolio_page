<script lang="ts">
	import type { Profile } from '$lib/data/site';

	let { profile } = $props<{ profile: Profile }>();
</script>

<section id="about" class="section-shell">
	<p class="section-kicker">About</p>
	<div class="section-intro section-intro--solo">
		<h2>{profile.aboutLead}</h2>
	</div>
	<div class="about-copy">
		{#each profile.about as paragraph (paragraph)}
			<p>{paragraph}</p>
		{/each}
	</div>
</section>
