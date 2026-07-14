<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Edward King | Websites &amp; Custom Software for Small Businesses</title>
	<meta
		name="description"
		content="Custom websites, online stores, and web applications for small businesses and growing brands. Designed and built by Edward King."
	/>
	<meta property="og:title" content="Edward King | Websites &amp; Custom Software" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://www.ecking.dev" />
	<meta
		property="og:description"
		content="Custom websites and web applications built to help small businesses earn trust and grow."
	/>
	<meta property="og:image" content="https://www.ecking.dev/og-image.png" />
	<meta property="og:image:type" content="image/png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:alt" content="EK initials with Edward King Software Engineer text" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Edward King | Websites &amp; Custom Software" />
	<meta
		name="twitter:description"
		content="Custom websites and web applications built to help small businesses earn trust and grow."
	/>
	<meta name="twitter:image" content="https://www.ecking.dev/og-image.png" />
	<meta name="twitter:image:alt" content="EK initials with Edward King Software Engineer text" />
</svelte:head>
{@render children()}
