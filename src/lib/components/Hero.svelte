<script lang="ts">
	import { ArrowRight } from '@lucide/svelte';
	import { reveal } from '$lib/actions/reveal';
	import type { Profile } from '$lib/data/site';

	let { profile } = $props<{ profile: Profile }>();
</script>

<section
	id="home"
	class="relative mx-auto w-full max-w-[88rem] px-5 pb-24 pt-12 md:px-8 md:pb-32 md:pt-20"
>
	<div
		use:reveal
		class="mb-10 flex items-center justify-between border-b border-[var(--color-line-strong)] pb-3 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-muted)]"
	>
		<span>Independent full-stack engineer</span>
		<span>Studio note / 001</span>
	</div>

	<div class="grid gap-12 lg:grid-cols-[minmax(0,1fr)_21rem] lg:items-end">
		<div>
			<p
				use:reveal={{ delay: 40 }}
				class="mb-5 font-serif text-2xl italic text-[var(--color-accent-strong)] md:text-3xl"
			>
				Independent web studio.
			</p>
			<h1 use:reveal={{ delay: 70 }} class="hero-title">
				I design and build websites and software that <span>move your business forward.</span>
			</h1>
		</div>

		<aside use:reveal={{ delay: 110 }} class="studio-note">
			<div class="studio-note__top">
				<span>Current status</span>
			</div>
			<p class="font-serif text-3xl leading-tight">Available for select projects.</p>
			<p class="mt-5 text-sm leading-relaxed text-[var(--color-text-soft)]">{profile.heroLead}</p>
			<a href="#contact" class="studio-note__link"
				><span>Tell me what you’re building</span><ArrowRight size={15} /></a
			>
		</aside>
	</div>

</section>
