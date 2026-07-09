<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Jay King|Software Engineer</title>
	<meta
		name="description"
		content="Modern software engineer portfolio with selected projects, technical skills, and contact links."
	/>
	<meta property="og:title" content="Your Name | Software Engineer" />
	<meta
		property="og:description"
		content="Explore selected engineering projects, stack highlights, and ways to connect."
	/>
</svelte:head>
{@render children()}
