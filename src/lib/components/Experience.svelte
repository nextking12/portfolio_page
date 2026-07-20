<script lang="ts">
	import type { ExperienceRole } from '$lib/data/site';

	let { roles, earlierExperience } = $props<{
		roles: ExperienceRole[];
		earlierExperience: string;
	}>();
</script>

<section id="experience" class="section-shell section-tint">
	<p class="section-kicker">Experience</p>
	<div class="section-intro">
		<h2>Technical leadership grounded in the field.</h2>
		<p>
			A career spanning hands-on commissioning, enterprise integration, security architecture,
			customer-facing engineering, and global program delivery.
		</p>
	</div>

	<div class="experience-list">
		{#each roles as role (role.role + role.company)}
			<article class="experience-item">
				<div class="experience-meta">
					<p>{role.period}</p>
				</div>
				<div class="experience-content">
					<h3>{role.role}</h3>
					<p class="experience-company">
						{role.company}{#if role.context}<span>{role.context}</span>{/if}
					</p>
					<p class="experience-summary">{role.summary}</p>
					<ul>
						{#each role.highlights as highlight (highlight)}
							<li>{highlight}</li>
						{/each}
					</ul>
				</div>
			</article>
		{/each}
		<div class="earlier-experience">
			<p class="section-kicker">Earlier foundation</p>
			<p>{earlierExperience}</p>
		</div>
	</div>
</section>
