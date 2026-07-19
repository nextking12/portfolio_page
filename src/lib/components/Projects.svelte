<script lang="ts">
	import { ArrowUpRight, Code2 } from '@lucide/svelte';
	import { reveal } from '$lib/actions/reveal';
	import type { Project } from '$lib/data/site';

	let { projects } = $props<{ projects: Project[] }>();
</script>

<section id="projects" class="section-shell">
	<div use:reveal class="section-index">
		<span>02</span><span>Selected work</span><span>Project dossiers</span>
	</div>

	<div use:reveal class="mb-16 grid gap-8 md:grid-cols-[1fr_0.65fr] md:items-end">
		<h2 class="section-heading">The decisions behind the deliverables.</h2>
		<p class="text-sm leading-relaxed text-[var(--color-text-soft)] md:justify-self-end">
			Three different projects. One consistent approach: understand the real constraint, make a
			clear decision, and ship something useful.
		</p>
	</div>

	<ul class="space-y-24 md:space-y-36">
		{#each projects as project, index (project.title)}
			<li>
				<article class="project-dossier">
					<div use:reveal class="project-dossier__head">
						<span>Case / {String(index + 1).padStart(2, '0')}</span>
						<span>{project.category}</span>
						<span class="project-stamp">Shipped</span>
					</div>
					<div use:reveal={{ delay: 45 }} class="project-image">
						<img
							src={project.image}
							alt={project.imageAlt}
							loading="lazy"
							class="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.015]"
						/>
					</div>

					<div use:reveal={{ delay: 70 }} class="project-copy">
						<div class="project-title-block">
							<p class="section-label">{project.category}</p>
							<h3>{project.title}</h3>
							<p>{project.description}</p>
						</div>
						<dl class="project-notes">
							<div>
								<dt>The brief</dt>
								<dd>{project.brief}</dd>
							</div>
							<div>
								<dt>The decision</dt>
								<dd>{project.decision}</dd>
							</div>
							<div class="outcome-note">
								<dt>The outcome</dt>
								<dd>{project.outcome}</dd>
							</div>
						</dl>
						<div class="project-meta">
							<ul>
								{#each project.tags as tag (tag)}<li>{tag}</li>{/each}
							</ul>
							<div class="flex items-center gap-2">
								{#if project.repo}
									<a
										href={project.repo}
										target="_blank"
										rel="noopener noreferrer"
										aria-label="{project.title} repository"
										class="button-secondary"
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
										class="button-primary"
									>
										<span>View live</span><ArrowUpRight size={14} strokeWidth={1.75} />
									</a>
								{/if}
							</div>
						</div>
					</div>
				</article>
			</li>
		{/each}
	</ul>
</section>
