<script lang="ts">
	import { ArrowUpRight, Code2 } from '@lucide/svelte';
	import { reveal } from '$lib/actions/reveal';
	import type { Project } from '$lib/data/site';

	let { projects } = $props<{ projects: Project[] }>();
</script>

<section id="projects" class="mx-auto w-full max-w-6xl px-6 py-24 md:px-10 md:py-32">
	<div use:reveal class="hairline mb-16"></div>

	<div use:reveal class="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
		<div class="space-y-6">
			<p class="section-label">Selected Work</p>
			<h2 class="section-heading max-w-xl">Proof, not promises.</h2>
		</div>
		<p class="content-measure text-sm text-[var(--color-muted)] md:max-w-xs md:text-right">
			A selection of client and product work, from public-facing websites to complex internal
			systems.
		</p>
	</div>

	<ul class="grid gap-5">
		{#each projects as project, index (project.title)}
			<li use:reveal={{ delay: 60 * (index + 1) }}>
				<div
					class="project-card group relative grid grid-cols-1 overflow-hidden rounded-2xl border border-[var(--color-line)] lg:grid-cols-[0.82fr_1.18fr]"
				>
					<div
						class="project-visual relative min-h-72 overflow-hidden border-b border-[var(--color-line)] p-6 lg:min-h-full lg:border-b-0 lg:border-r"
					>
						<div class="project-glow"></div>
						<div
							class="relative z-10 flex h-full min-h-60 flex-col justify-between rounded-xl border border-white/10 bg-black/75 p-5 shadow-2xl"
						>
							<div class="flex items-center gap-1.5 border-b border-white/10 pb-4">
								<span class="h-1.5 w-1.5 rounded-full bg-white/35"></span>
								<span class="h-1.5 w-1.5 rounded-full bg-white/20"></span>
								<span class="h-1.5 w-1.5 rounded-full bg-white/10"></span>
							</div>
							<div>
								<p
									class="text-[10px] font-medium uppercase tracking-[0.2em] text-[var(--color-accent-strong)]"
								>
									{project.category}
								</p>
								<p class="mt-3 text-3xl font-medium tracking-tight text-white md:text-4xl">
									{project.title}
								</p>
							</div>
							<div class="grid grid-cols-3 gap-2">
								<div class="h-10 rounded bg-white/5"></div>
								<div class="h-10 rounded bg-white/8"></div>
								<div class="h-10 rounded bg-[var(--color-accent-soft)]"></div>
							</div>
						</div>
					</div>

					<div class="flex flex-col justify-between p-7 md:p-9 lg:p-12">
						<div>
							<div class="flex items-center justify-between gap-4">
								<span class="section-label">Case {String(index + 1).padStart(2, '0')}</span>
								<span class="text-xs text-[var(--color-muted)]">{project.category}</span>
							</div>
							<h3
								class="mt-8 text-3xl font-medium tracking-tight text-[var(--color-text)] md:text-4xl"
							>
								{project.title}
							</h3>
							<p class="text-sm leading-relaxed text-[var(--color-text-soft)]">
								{project.description}
							</p>
							<div class="mt-6 border-l border-[var(--color-accent)] pl-4">
								<p class="text-sm font-medium leading-relaxed text-[var(--color-text)]">
									{project.outcome}
								</p>
							</div>
							<ul class="flex flex-wrap gap-x-3 gap-y-1">
								{#each project.tags as tag (tag)}
									<li
										class="text-[10px] font-medium uppercase tracking-[0.18em] text-[var(--color-muted)]"
									>
										{tag}
									</li>
								{/each}
							</ul>
						</div>
						<div class="mt-10 flex items-center gap-3">
							{#if project.repo}
								<a
									href={project.repo}
									target="_blank"
									rel="noopener noreferrer"
									aria-label="{project.title} repository"
									class="button-secondary !px-4 !py-2.5"
								>
									<Code2 size={14} strokeWidth={1.75} /><span>Code</span>
								</a>
							{/if}
							{#if project.live}
								<a
									href={project.live}
									target="_blank"
									rel="noopener noreferrer"
									aria-label="{project.title} live site"
									class="button-primary !px-4 !py-2.5"
								>
									<span>View live</span><ArrowUpRight size={14} strokeWidth={1.75} />
								</a>
							{/if}
						</div>
					</div>
				</div>
			</li>
		{/each}
	</ul>
</section>
