<script lang="ts">
	import { ArrowRight, ArrowDown } from '@lucide/svelte';
	import { reveal } from '$lib/actions/reveal';
	import type { Profile } from '$lib/data/site';

	let { profile } = $props<{ profile: Profile }>();
</script>

<section
	id="home"
	class="relative mx-auto flex min-h-[85vh] w-full max-w-6xl flex-col justify-center px-6 pb-24 pt-24 md:px-10 md:pb-32 md:pt-32"
>
	<div class="space-y-10">
		<p use:reveal class="section-label">
			{profile.role}
		</p>

		<div use:reveal={{ delay: 100 }} class="space-y-6">
			<h1
				class="max-w-4xl text-5xl font-medium leading-[1.02] tracking-[-0.035em] text-[var(--color-text)] sm:text-6xl md:text-7xl lg:text-[5.5rem]"
			>
				{profile.name}<span class="text-[var(--color-accent)]">.</span>
			</h1>
			<p class="content-measure text-lg leading-relaxed text-[var(--color-text-soft)] md:text-xl">
				{profile.tagline}
			</p>
		</div>

		<p
			use:reveal={{ delay: 180 }}
			class="content-measure text-base leading-relaxed text-[var(--color-muted)]"
		>
			{profile.intro}
		</p>

		<p
			use:reveal={{ delay: 220 }}
			class="text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-accent-strong)]"
		>
			Open to freelance and contract engagements
		</p>

		<div
			use:reveal={{ delay: 300 }}
			class="flex flex-wrap items-center gap-x-8 gap-y-4 pt-2 text-sm"
		>
			<a href="#projects" class="link-arrow">
				<span>View projects</span>
				<ArrowRight size={16} strokeWidth={1.75} />
			</a>
			<a href="#contact" class="link-arrow">
				<span>Get in touch</span>
				<ArrowRight size={16} strokeWidth={1.75} />
			</a>
		</div>
	</div>

	<a
		href="#about"
		aria-label="Scroll to About"
		class="absolute bottom-8 left-6 hidden items-center gap-2 text-[10px] font-medium uppercase tracking-[0.24em] text-[var(--color-muted)] transition-colors hover:text-[var(--color-text)] md:left-10 md:inline-flex"
	>
		<ArrowDown size={12} strokeWidth={1.75} />
		<span>Scroll</span>
	</a>
</section>
