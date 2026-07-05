<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
	import type { Profile } from '$lib/data/site';

	let { profile } = $props<{ profile: Profile }>();
</script>

<section id="home" class="relative mx-auto w-full max-w-6xl px-6 pb-20 pt-20 md:px-10 md:pb-28 md:pt-28">
	<div class="absolute inset-x-8 top-8 -z-10 h-72 rounded-full bg-[var(--hero-glow)] blur-3xl"></div>

	<div class="space-y-8">
		<p
			use:reveal
			class="inline-flex w-fit rounded-full border border-[var(--color-accent-line)] bg-[var(--color-accent-soft)] px-4 py-2 text-sm font-medium text-[var(--color-accent-text)]"
		>
			{profile.role}
		</p>

		<div use:reveal={{ delay: 100 }} class="space-y-4">
			<h1 class="max-w-3xl text-4xl font-bold tracking-tight text-[var(--color-text)] sm:text-5xl md:text-6xl">
				{profile.name}
			</h1>
			<p class="content-measure text-lg leading-relaxed text-[var(--color-muted)] md:text-xl">{profile.tagline}</p>
		</div>

		<p use:reveal={{ delay: 180 }} class="content-measure text-base leading-relaxed text-[var(--color-subtle)]">
			{profile.intro}
		</p>

		<div use:reveal={{ delay: 260 }} class="flex flex-wrap gap-4">
			<a
				href="#projects"
				class="rounded-full bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold text-[var(--color-on-accent)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--color-accent-strong)] hover:shadow-[0_12px_26px_-18px_var(--color-accent)]"
			>
				View Projects
			</a>
			<a
				href="#contact"
				class="rounded-full border border-[var(--color-line)] bg-[var(--color-surface)] px-6 py-3 text-sm font-semibold text-[var(--color-text)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--color-accent-line)] hover:text-[var(--color-accent-strong)]"
			>
				Get In Touch
			</a>
		</div>
	</div>
</section>
