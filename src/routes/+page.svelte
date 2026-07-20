<script lang="ts">
	import { onMount } from 'svelte';
	import About from '$lib/components/About.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import Experience from '$lib/components/Experience.svelte';
	import Expertise from '$lib/components/Expertise.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Impact from '$lib/components/Impact.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import Resume from '$lib/components/Resume.svelte';
	import {
		additionalWork,
		contactEmail,
		earlierExperience,
		experienceRoles,
		expertiseGroups,
		impactItems,
		linkedInUrl,
		navItems,
		profile,
		projects,
		resumeUrl,
		socials,
		type Theme
	} from '$lib/data/site';

	let theme = $state<Theme>('light');

	onMount(() => {
		const savedTheme = window.localStorage.getItem('theme');
		if (savedTheme === 'light' || savedTheme === 'dark') theme = savedTheme;
	});

	$effect(() => {
		if (typeof document === 'undefined') return;
		document.documentElement.dataset.theme = theme;
		window.localStorage.setItem('theme', theme);
	});

	const toggleTheme = () => {
		theme = theme === 'light' ? 'dark' : 'light';
	};
</script>

<div class="page-shell">
	<Nav items={navItems} {theme} {toggleTheme} />
	<main>
		<Hero {profile} {resumeUrl} />
		<About {profile} />
		<Experience roles={experienceRoles} {earlierExperience} />
		<Expertise groups={expertiseGroups} />
		<Impact items={impactItems} />
		<Projects {projects} {additionalWork} />
		<Resume {linkedInUrl} {resumeUrl} />
		<Contact links={socials} email={contactEmail} />
	</main>
	<Footer />
</div>
