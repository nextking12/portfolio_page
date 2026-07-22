<script lang="ts">
	import { ArrowDown, ArrowUpRight } from '@lucide/svelte';
	import SystemsMap from '$lib/components/SystemsMap.svelte';
	import type { Profile } from '$lib/data/site';

	let { profile } = $props<{ profile: Profile }>();
</script>

<section id="home" class="hero-shell">
	<div class="hero-layout">
		<div class="hero-title-block">
			<h1>
				<span>{profile.headline.opening}</span>
				<em>{profile.headline.emphasis}</em>
				<span>{profile.headline.closing}</span>
			</h1>
		</div>
		<div class="hero-summary">
			<p>{profile.lead}</p>
			<div class="button-row">
				<a href="#contact" class="button-primary">
					Start a conversation <ArrowUpRight size={16} strokeWidth={1.75} />
				</a>
				<a href="#projects" class="button-secondary">
					See my work <ArrowDown size={16} strokeWidth={1.75} />
				</a>
			</div>
		</div>
	</div>
	<SystemsMap />
</section>
