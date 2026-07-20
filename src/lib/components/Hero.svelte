<script lang="ts">
	import { ArrowDown, Download } from '@lucide/svelte';
	import type { Profile } from '$lib/data/site';

	let { profile, resumeUrl } = $props<{ profile: Profile; resumeUrl: string }>();
	const primaryRole = $derived(profile.headline.split(' | ')[0]);
</script>

<section id="home" class="hero-shell">
	<div class="hero-layout">
		<div class="hero-title-block">
			<p class="eyebrow">Edward King / Engineering physical and digital systems</p>
			<h1>{primaryRole}</h1>
		</div>
		<div class="hero-summary">
			<p>{profile.lead}</p>
			<div class="button-row">
				<a href="#experience" class="button-primary">
					View Experience <ArrowDown size={16} strokeWidth={1.75} />
				</a>
				<a href={resumeUrl} download="Edward-King-Resume.pdf" class="button-secondary">
					Download Resume <Download size={16} strokeWidth={1.75} />
				</a>
			</div>
		</div>
	</div>
	<div class="hero-credentials" aria-label="Career highlights">
		<span>20+ years in physical security</span>
		<span>Enterprise and mission-critical systems</span>
		<span>Software engineering and automation</span>
	</div>
</section>
