<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
	import type { SkillGroup } from '$lib/data/site';

	let { groups } = $props<{ groups: SkillGroup[] }>();
</script>

<section id="skills" class="mx-auto w-full max-w-6xl px-6 py-24 md:px-10 md:py-32">
	<div use:reveal class="hairline mb-16"></div>

	<div use:reveal class="mb-16 space-y-6">
		<p class="section-label">Toolkit</p>
		<h2 class="section-heading max-w-xl">Skills &amp; stack.</h2>
	</div>

	<div
		class="grid gap-px overflow-hidden rounded-lg border border-[var(--color-line)] bg-[var(--color-line)] md:grid-cols-3"
	>
		{#each groups as group, index}
			<section
				use:reveal={{ delay: 80 * (index + 1) }}
				class="group bg-[var(--color-bg)] p-8 transition-colors duration-300 hover:bg-[var(--color-accent-soft)]"
			>
				<div class="flex items-baseline justify-between">
					<h3
						class="text-xs font-medium uppercase tracking-[0.24em] text-[var(--color-muted)] transition-colors group-hover:text-[var(--color-accent-strong)]"
					>
						{group.title}
					</h3>
					<span class="text-xs tabular-nums text-[var(--color-muted)]">
						{String(index + 1).padStart(2, '0')}
					</span>
				</div>
				<ul class="mt-6 space-y-3">
					{#each group.items as item}
						<li class="text-base font-medium tracking-tight text-[var(--color-text)]">
							{item}
						</li>
					{/each}
				</ul>
			</section>
		{/each}
	</div>
</section>
