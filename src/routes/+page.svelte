<script lang="ts">
	import About from '$lib/components/About.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import Skills from '$lib/components/Skills.svelte';
	import Services from '$lib/components/Services.svelte';
	import {
		contactEmail,
		navItems,
		profile,
		projects,
		services,
		skillGroups,
		socials
	} from '$lib/data/site';
</script>

<div class="page-shell min-h-screen overflow-x-clip text-[var(--color-text)]">
	<Nav items={navItems} />

	<main>
		<Hero {profile} />
		<Services {services} />
		<Projects {projects} />
		<About about={profile.about} />
		<Skills groups={skillGroups} />
		<Contact links={socials} email={contactEmail} />
	</main>
	<Footer />
</div>
