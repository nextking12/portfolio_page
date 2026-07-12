<script lang="ts">
	import { onMount } from 'svelte';
	import About from '$lib/components/About.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import ForBusiness from '$lib/components/ForBusiness.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import ScrollRail from '$lib/components/ScrollRail.svelte';
	import Skills from '$lib/components/Skills.svelte';
	import {
		businessSection,
		navItems,
		profile,
		projects,
		skillGroups,
		socials
	} from '$lib/data/site';

	type Theme = 'light' | 'dark';
	let theme = $state<Theme>('dark');

	onMount(() => {
		const savedTheme = window.localStorage.getItem('theme');
		if (savedTheme === 'light' || savedTheme === 'dark') {
			theme = savedTheme;
			return;
		}

		// Default to dark; only flip to light if user explicitly prefers it.
		theme = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
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

<div class="relative min-h-screen overflow-x-clip bg-[var(--color-bg)] text-[var(--color-text)]">
	<Nav items={navItems} {theme} {toggleTheme} />
	<ScrollRail items={navItems} />

	<main>
		<Hero {profile} />
		<About about={profile.about} />
		<ForBusiness section={businessSection} />
		<Projects {projects} />
		<Skills groups={skillGroups} />
		<Contact links={socials} />
	</main>
	<Footer {theme} {toggleTheme} />
</div>
