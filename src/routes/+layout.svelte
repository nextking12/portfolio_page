<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Edward King | Security Systems &amp; Solutions Engineer</title>
	<meta
		name="description"
		content="Edward King is a security systems engineer, solutions engineer, technical program leader, and software developer working across physical and digital systems."
	/>
	<meta property="og:title" content="Edward King | Security Systems &amp; Solutions Engineer" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://www.ecking.dev" />
	<meta
		property="og:description"
		content="Enterprise security engineering, systems integration, technical leadership, networking, and software development."
	/>
	<meta property="og:image" content="https://www.ecking.dev/og-image-career.png" />
	<meta property="og:image:type" content="image/png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta
		property="og:image:alt"
		content="Edward King, security systems engineer, solutions engineer, and technical program leader"
	/>
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Edward King | Security Systems &amp; Solutions Engineer" />
	<meta
		name="twitter:description"
		content="Enterprise security engineering, systems integration, technical leadership, networking, and software development."
	/>
	<meta name="twitter:image" content="https://www.ecking.dev/og-image-career.png" />
	<meta
		name="twitter:image:alt"
		content="Edward King, security systems engineer, solutions engineer, and technical program leader"
	/>
</svelte:head>
{@render children()}
