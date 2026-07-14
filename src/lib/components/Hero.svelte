<script lang="ts">
	import { ArrowRight, ArrowDown } from '@lucide/svelte';
	import { reveal } from '$lib/actions/reveal';
	import type { Profile } from '$lib/data/site';

	let { profile } = $props<{ profile: Profile }>();
</script>

<section
	id="home"
	class="relative mx-auto flex min-h-[88vh] w-full max-w-6xl flex-col justify-center px-6 pb-24 pt-20 md:px-10 md:pb-28 md:pt-28"
>
	<div class="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
		<div class="space-y-8">
			<p use:reveal class="section-label">
				Independent designer &amp; {profile.role}
			</p>

			<div use:reveal={{ delay: 100 }} class="space-y-6">
				<h1
					class="max-w-5xl text-5xl font-medium leading-[0.98] tracking-[-0.045em] text-[var(--color-text)] sm:text-6xl md:text-7xl lg:text-[4.75rem]"
				>
					Websites and software that help small businesses <span
						class="text-[var(--color-accent-strong)]">earn trust.</span
					>
				</h1>
				<p class="content-measure text-lg leading-relaxed text-[var(--color-text-soft)] md:text-xl">
					{profile.heroLead}
				</p>
			</div>

			<div use:reveal={{ delay: 200 }} class="flex flex-wrap items-center gap-3 pt-2 text-sm">
				<a href="#contact" class="button-primary">
					<span>Start a project</span>
					<ArrowRight size={16} strokeWidth={1.75} />
				</a>
				<a href="#projects" class="button-secondary">
					<span>See selected work</span>
					<ArrowRight size={16} strokeWidth={1.75} />
				</a>
			</div>
		</div>

		<div use:reveal={{ delay: 260 }} class="flex items-center gap-3 lg:pb-2">
			<span class="relative flex h-2.5 w-2.5">
				<span
					class="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-accent)] opacity-40"
				></span>
				<span class="relative inline-flex h-2.5 w-2.5 rounded-full bg-[var(--color-accent-strong)]"
				></span>
			</span>
			<p class="text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-text-soft)]">
				Available for select projects
			</p>
		</div>
	</div>

	<a
		href="#services"
		aria-label="Scroll to services"
		class="absolute bottom-8 left-6 hidden items-center gap-2 text-[10px] font-medium uppercase tracking-[0.24em] text-[var(--color-muted)] transition-colors hover:text-[var(--color-text)] md:left-10 md:inline-flex"
	>
		<ArrowDown size={12} strokeWidth={1.75} />
		<span>Scroll</span>
	</a>
</section>
