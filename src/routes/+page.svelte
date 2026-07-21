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

	let theme = $state<Theme>('dark');

	onMount(() => {
		const initialTheme = document.documentElement.dataset.theme;
		if (initialTheme === 'light' || initialTheme === 'dark') theme = initialTheme;
	});

	const applyTheme = (nextTheme: Theme) => {
		theme = nextTheme;
		document.documentElement.dataset.theme = theme;
		try {
			window.localStorage.setItem('theme', theme);
		} catch {
			// The selected theme still applies when browser storage is unavailable.
		}
	};

	const toggleTheme = () => {
		applyTheme(theme === 'light' ? 'dark' : 'light');
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
		<Contact links={socials} />
	</main>
	<Footer />
</div>
