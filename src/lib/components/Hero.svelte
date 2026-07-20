<script lang="ts">
	import { ArrowDown, Download } from '@lucide/svelte';
	import SystemsMap from '$lib/components/SystemsMap.svelte';
	import type { Profile } from '$lib/data/site';

	let { profile, resumeUrl } = $props<{ profile: Profile; resumeUrl: string }>();
	const primaryRole = $derived(profile.headline.split(' | ')[0]);
</script>

<section id="home" class="hero-shell">
	<div class="hero-status" aria-label="Profile status">
		<span><i aria-hidden="true"></i> Career profile / 2026</span>
		<span>Security systems + software engineering</span>
	</div>
	<div class="hero-layout">
		<div class="hero-title-block">
			<p class="eyebrow">Edward King / Engineering across the system boundary</p>
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
	<SystemsMap />
</section>
