<script lang="ts">
	import { onMount } from 'svelte';
	import About from '$lib/components/About.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import ScrollRail from '$lib/components/ScrollRail.svelte';
	import Skills from '$lib/components/Skills.svelte';
	import Services from '$lib/components/Services.svelte';
	import { navItems, profile, projects, services, skillGroups, socials } from '$lib/data/site';

	type Theme = 'light' | 'dark';
	let theme = $state<Theme>('light');

	onMount(() => {
		const savedTheme = window.localStorage.getItem('theme');
		if (savedTheme === 'light' || savedTheme === 'dark') {
			theme = savedTheme;
			return;
		}

		// A warm light theme is the brand default. The toggle still respects a saved choice.
		theme = 'light';
	});

	$effect(() => {
		if (typeof document === 'undefined') {
			return;
		}

		document.documentElement.dataset.theme = theme;
		window.localStorage.setItem('theme', theme);
	});

	const toggleTheme = () => {
		theme = theme === 'light' ? 'dark' : 'light';
	};
</script>

<div class="page-shell relative min-h-screen overflow-x-clip text-[var(--color-text)]">
	<Nav items={navItems} {theme} {toggleTheme} />
	<ScrollRail items={navItems} />

	<main>
		<Hero {profile} />
		<Services {services} />
		<Projects {projects} />
		<About about={profile.about} />
		<Skills groups={skillGroups} />
		<Contact links={socials} />
	</main>
	<Footer {theme} {toggleTheme} />
</div>
