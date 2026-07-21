<script lang="ts">
	import { ArrowUpRight, Download } from '@lucide/svelte';

	let { linkedInUrl, resumeUrl } = $props<{ linkedInUrl: string; resumeUrl: string }>();
</script>

<section id="resume" class="section-shell section-tint">
	<p class="section-kicker">Resume</p>
	<div class="resume-layout">
		<div>
			<h2>A multidisciplinary engineering career.</h2>
			<p>
				Review the full record of security systems engineering, solutions leadership, networking,
				program delivery, and software development.
			</p>
		</div>
		<div class="resume-action">
			<p>
				The detailed resume includes professional experience, platform expertise, certifications,
				software projects, and education.
			</p>
			<div class="button-row">
				<a href={resumeUrl} download="Edward-King-Resume.pdf" class="button-primary">
					Download Resume <Download size={16} />
				</a>
				<a href={linkedInUrl} target="_blank" rel="noopener noreferrer" class="button-secondary">
					View LinkedIn <ArrowUpRight size={16} />
				</a>
			</div>
		</div>
	</div>
</section>
