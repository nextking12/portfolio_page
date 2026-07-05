<script lang="ts">
	import { onMount } from 'svelte';
	import About from '$lib/components/About.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import Skills from '$lib/components/Skills.svelte';
	import { navItems, profile, projects, skillGroups, socials } from '$lib/data/site';

	type Theme = 'light' | 'dark';
	let theme = $state<Theme>('light');

	onMount(() => {
		const savedTheme = window.localStorage.getItem('theme');
		if (savedTheme === 'light' || savedTheme === 'dark') {
			theme = savedTheme;
			return;
		}

		theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
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
	<div class="page-atmosphere pointer-events-none absolute inset-x-0 top-0 -z-10 h-[42rem]"></div>

	<Nav items={navItems} {theme} {toggleTheme} />
	<main>
		<Hero {profile} />
		<About about={profile.about} />
		<Projects {projects} />
		<Skills groups={skillGroups} />
		<Contact links={socials} />
	</main>
	<Footer />
</div>
