<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
	import type { SkillGroup } from '$lib/data/site';

	let { groups } = $props<{ groups: SkillGroup[] }>();
</script>

<section id="skills" class="section-shell">
	<div use:reveal class="section-index">
		<span>04</span><span>Working method</span><span>How projects move</span>
	</div>

	<div use:reveal class="mb-14 grid gap-8 md:grid-cols-2 md:items-end">
		<h2 class="section-heading max-w-2xl">No black box. Just a clear path from idea to launch.</h2>
		<p class="max-w-md text-sm leading-relaxed text-[var(--color-text-soft)] md:justify-self-end">
			You see the work as it develops, understand the tradeoffs, and always know what happens next.
		</p>
	</div>

	<div class="process-grid">
		{#each groups as group, index (group.title)}
			<section use:reveal={{ delay: 50 * (index + 1) }} class="process-step group">
				<div class="flex items-baseline justify-between">
					<h3 class="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-muted)]">
						{group.title}
					</h3>
					<span class="text-xs tabular-nums text-[var(--color-muted)]">
						{String(index + 1).padStart(2, '0')}
					</span>
				</div>
				<ul class="mt-12 space-y-3">
					{#each group.items as item (item)}
						<li class="font-serif text-2xl leading-tight text-[var(--color-text)]">
							{item}
						</li>
					{/each}
				</ul>
			</section>
		{/each}
	</div>
</section>
