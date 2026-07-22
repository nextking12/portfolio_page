<script lang="ts">
	import { ArrowUpRight, CodeXml } from '@lucide/svelte';
	import type { AdditionalWork, Project } from '$lib/data/site';

	let { projects, additionalWork } = $props<{
		projects: Project[];
		additionalWork: AdditionalWork[];
	}>();
	const romanNumerals = ['I', 'II', 'III', 'IV', 'V', 'VI'];
</script>

<section id="projects" class="section-shell">
	<p class="section-kicker">Selected Projects</p>
	<div class="section-intro">
		<h2>Real ideas, thoughtfully brought to life.</h2>
		<p>
			A selection of applications, learning tools, and client work designed to make complex things
			feel simple and useful.
		</p>
	</div>

	<div class="projects-list">
		{#each projects as project, index (project.title)}
			<article class:featured-project={index === 0} class="project-card">
				{#if project.image}
					<div class="project-image">
						<div class="project-image-label" aria-hidden="true">
							<span class="project-index">{romanNumerals[index]}</span> · {project.category}
						</div>
						<img
							src={project.image}
							alt={project.imageAlt ?? ''}
							width="1440"
							height="900"
							loading={index === 0 ? 'eager' : 'lazy'}
							fetchpriority={index === 0 ? 'high' : 'auto'}
							decoding="async"
						/>
					</div>
				{/if}
				<div class="project-content">
					<span class="project-card-number" aria-hidden="true">
						{romanNumerals[index]}
					</span>
					<p class="project-category">{project.category}</p>
					<h3>{project.title}</h3>
					<p class="project-description">{project.description}</p>
					<dl>
						<div>
							<dt>Engineering approach</dt>
							<dd>{project.approach}</dd>
						</div>
						<div>
							<dt>Outcome</dt>
							<dd>{project.outcome}</dd>
						</div>
					</dl>
					<div class="project-footer">
						<ul aria-label="Technologies">
							{#each project.tags as tag (tag)}<li>{tag}</li>{/each}
						</ul>
						<div class="project-links">
							{#if project.repo}
								<a href={project.repo} target="_blank" rel="noopener noreferrer">
									<CodeXml size={16} /> Code
								</a>
							{/if}
							{#if project.live}
								<a href={project.live} target="_blank" rel="noopener noreferrer">
									View project <ArrowUpRight size={16} />
								</a>
							{/if}
						</div>
					</div>
				</div>
			</article>
		{/each}
	</div>

	<div class="additional-work">
		<div>
			<p class="section-kicker">Additional work</p>
			<h3>More things I build</h3>
		</div>
		<ul>
			{#each additionalWork as item (item.title)}
				<li><strong>{item.title}</strong><span>{item.description}</span></li>
			{/each}
		</ul>
	</div>
</section>
