<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Edward King | Software Engineer</title>
	<meta
		name="description"
		content="Modern software engineer portfolio with selected projects, technical skills, and contact links."
	/>
	<meta property="og:title" content="Edward King | Software Engineer" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://www.ecking.dev" />
	<meta
		property="og:description"
		content="Explore selected engineering projects, stack highlights, and ways to connect."
	/>
	<meta property="og:image" content="https://www.ecking.dev/og-image.png" />
	<meta property="og:image:type" content="image/png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:alt" content="EK initials with Edward King Software Engineer text" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Edward King | Software Engineer" />
	<meta
		name="twitter:description"
		content="Explore selected engineering projects, stack highlights, and ways to connect."
	/>
	<meta name="twitter:image" content="https://www.ecking.dev/og-image.png" />
	<meta name="twitter:image:alt" content="EK initials with Edward King Software Engineer text" />
</svelte:head>
{@render children()}
