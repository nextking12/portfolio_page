<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
	import type { SkillGroup } from '$lib/data/site';

	let { groups } = $props<{ groups: SkillGroup[] }>();
</script>

<section id="skills" class="mx-auto w-full max-w-6xl px-6 py-20 md:px-10 md:py-24">
	<div use:reveal>
		<p class="section-label">Skills</p>
		<h2 class="section-heading mt-4 max-w-xl">Tools and practices I rely on to ship high-quality products.</h2>
	</div>

	<div class="mt-10 grid gap-5 md:grid-cols-3">
		{#each groups as group, index}
			<section
				use:reveal={{ delay: 90 * (index + 1) }}
				class="rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] p-6"
			>
				<h3 class="text-base font-semibold text-[var(--color-text)]">{group.title}</h3>
				<ul class="mt-4 flex flex-wrap gap-2">
					{#each group.items as item}
						<li class="rounded-full border border-[var(--color-line)] bg-[var(--color-soft)] px-3 py-1 text-xs text-[var(--color-subtle)]">
							{item}
						</li>
					{/each}
				</ul>
			</section>
		{/each}
	</div>
</section>
