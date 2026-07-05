<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
	import type { Project } from '$lib/data/site';

	let { projects } = $props<{ projects: Project[] }>();
</script>

<section id="projects" class="mx-auto w-full max-w-6xl px-6 py-20 md:px-10 md:py-24">
	<div use:reveal>
		<p class="section-label">Projects</p>
		<h2 class="section-heading mt-4 max-w-xl">Selected work focused on clean systems and measurable outcomes.</h2>
	</div>

	<div class="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
		{#each projects as project, index}
			<article
				use:reveal={{ delay: 70 * (index + 1) }}
				class="group rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] p-6 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)]"
			>
				<h3 class="text-xl font-semibold tracking-tight text-[var(--color-text)]">{project.title}</h3>
				<p class="mt-2.5 text-sm leading-relaxed text-[var(--color-muted)]">{project.description}</p>

				<ul class="mt-4 flex flex-wrap gap-2">
					{#each project.tags as tag}
						<li class="rounded-full bg-[var(--color-soft)] px-3 py-1 text-xs font-medium text-[var(--color-subtle)]">
							{tag}
						</li>
					{/each}
				</ul>

				<div class="mt-6 flex items-center gap-5 text-sm font-semibold text-[var(--color-accent-strong)]">
					<a class="transition-opacity hover:opacity-70" href={project.repo} target="_blank" rel="noreferrer">GitHub</a>
					<a class="transition-opacity hover:opacity-70" href={project.live} target="_blank" rel="noreferrer">Live Demo</a>
				</div>
			</article>
		{/each}
	</div>
</section>
