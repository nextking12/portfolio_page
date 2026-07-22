<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Edward King | Websites, Applications &amp; Digital Products</title>
	<meta
		name="description"
		content="Edward King designs and builds thoughtful websites, web applications, and practical digital tools for businesses and teams."
	/>
	<meta property="og:title" content="Edward King | Websites, Applications &amp; Digital Products" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://www.ecking.dev" />
	<meta
		property="og:description"
		content="Thoughtful websites, custom applications, and practical digital tools built from idea to launch."
	/>
	<meta property="og:image" content="https://www.ecking.dev/og-image.png" />
	<meta property="og:image:type" content="image/png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:alt" content="Edward King's software development portfolio" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta
		name="twitter:title"
		content="Edward King | Websites, Applications &amp; Digital Products"
	/>
	<meta
		name="twitter:description"
		content="Thoughtful websites, custom applications, and practical digital tools built from idea to launch."
	/>
	<meta name="twitter:image" content="https://www.ecking.dev/og-image.png" />
	<meta name="twitter:image:alt" content="Edward King's software development portfolio" />
</svelte:head>
{@render children()}
