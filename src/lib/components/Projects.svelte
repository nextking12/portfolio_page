<script lang="ts">
	import { ArrowUpRight, Code2 } from '@lucide/svelte';
	import { reveal } from '$lib/actions/reveal';
	import type { Project } from '$lib/data/site';

	let { projects } = $props<{ projects: Project[] }>();
</script>

<section id="projects" class="mx-auto w-full max-w-6xl px-6 py-24 md:px-10 md:py-32">
	<div use:reveal class="hairline mb-16"></div>

	<div use:reveal class="mb-16 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
		<div class="space-y-6">
			<p class="section-label">Selected Work</p>
			<h2 class="section-heading max-w-xl">Projects.</h2>
		</div>
		<p class="content-measure text-sm text-[var(--color-muted)] md:max-w-xs md:text-right">
			A short list of things I've shipped recently. Client work available on request.
		</p>
	</div>

	<ul class="border-t border-[var(--color-line)]">
		{#each projects as project, index (project.title)}
			<li use:reveal={{ delay: 60 * (index + 1) }} class="border-b border-[var(--color-line)]">
				<div
					class="group relative grid grid-cols-1 gap-4 py-8 transition-colors md:grid-cols-[1fr_2fr_auto] md:items-center md:gap-8 md:py-10"
				>
					<!-- Hover teal wash -->
					<div
						class="pointer-events-none absolute inset-x-[-1rem] inset-y-0 -z-10 rounded-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100"
						style:background="linear-gradient(90deg, var(--color-accent-soft), transparent 70%)"
					></div>

					<div class="flex items-baseline gap-4">
						<span
							class="text-xs font-medium tabular-nums tracking-widest text-[var(--color-muted)]"
						>
							{String(index + 1).padStart(2, '0')}
						</span>
						<h3
							class="text-2xl font-medium tracking-tight text-[var(--color-text)] transition-colors group-hover:text-[var(--color-accent-strong)] md:text-3xl"
						>
							{project.title}
						</h3>
					</div>

					<div class="space-y-3 md:pl-4">
						<p class="text-sm leading-relaxed text-[var(--color-text-soft)]">
							{project.description}
						</p>
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

					<div
						class="flex items-center gap-3 text-[var(--color-muted)] md:flex-col md:items-end md:gap-2"
					>
						<div class="flex items-center gap-3 md:order-last md:flex-col md:items-end md:gap-1">
							{#if !project.live}
								<span
									class="text-[10px] font-medium uppercase tracking-[0.18em] text-[var(--color-accent-strong)]"
								>
									Deploying soon
								</span>
							{/if}
						</div>
						<div class="flex items-center gap-2">
							{#if project.repo}
								<a
									href={project.repo}
									target="_blank"
									rel="noopener noreferrer"
									aria-label="{project.title} repository"
									class="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[var(--color-line)] transition-all duration-200 hover:border-[var(--color-accent)] hover:text-[var(--color-accent-strong)]"
								>
									<Code2 size={13} strokeWidth={1.75} />
								</a>
							{/if}
							{#if project.live}
								<a
									href={project.live}
									target="_blank"
									rel="noopener noreferrer"
									aria-label="{project.title} live site"
									class="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[var(--color-line)] transition-all duration-200 hover:border-[var(--color-accent)] hover:text-[var(--color-accent-strong)]"
								>
									<ArrowUpRight size={13} strokeWidth={1.75} />
								</a>
							{/if}
						</div>
					</div>
				</div>
			</li>
		{/each}
	</ul>
</section>
