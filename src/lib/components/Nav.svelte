<script lang="ts">
	import { Menu, Moon, Sun, X } from '@lucide/svelte';
	import { onMount } from 'svelte';
	import type { NavItem, Theme } from '$lib/data/site';

	let { items, theme, toggleTheme } = $props<{
		items: NavItem[];
		theme: Theme;
		toggleTheme: () => void;
	}>();
	let activeHref = $state('#home');
	let menuOpen = $state(false);
	let menuButton: HTMLButtonElement;
	const desktopItems = $derived(
		items.filter((item: NavItem) => item.href !== '#home' && item.href !== '#contact')
	);

	const closeMenu = (restoreFocus = false) => {
		menuOpen = false;
		if (restoreFocus) menuButton?.focus();
	};

	const handleKeydown = (event: KeyboardEvent) => {
		if (event.key === 'Escape' && menuOpen) closeMenu(true);
	};

	onMount(() => {
		const sections = items
			.map((item: NavItem) => document.querySelector<HTMLElement>(item.href))
			.filter((section: HTMLElement | null): section is HTMLElement => section !== null);

		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) activeHref = `#${entry.target.id}`;
				}
			},
			{ rootMargin: '-25% 0px -65% 0px', threshold: 0.05 }
		);

		for (const section of sections) observer.observe(section);
		return () => observer.disconnect();
	});
</script>

<svelte:window onkeydown={handleKeydown} />

<header class="site-header">
	<nav class="nav-shell" aria-label="Primary navigation">
		<a href="#home" class="brand" onclick={() => closeMenu()}>
			<span class="brand-mark">EK</span>
			<span><strong>Edward King</strong><small>Software developer</small></span>
		</a>

		<ul class="desktop-nav">
			{#each desktopItems as item (item.href)}
				<li>
					<a href={item.href} aria-current={activeHref === item.href ? 'location' : undefined}>
						{item.label}
					</a>
				</li>
			{/each}
		</ul>

		<div class="nav-actions">
			<a href="#contact" class="nav-cta" onclick={() => closeMenu()}>Contact</a>
			<button
				type="button"
				class="theme-button"
				onclick={toggleTheme}
				aria-label={theme === 'dark' ? 'Use light theme' : 'Use dark theme'}
				title={theme === 'dark' ? 'Use light theme' : 'Use dark theme'}
			>
				{#if theme === 'dark'}
					<Sun size={18} strokeWidth={1.75} />
				{:else}
					<Moon size={18} strokeWidth={1.75} />
				{/if}
			</button>
			<button
				bind:this={menuButton}
				type="button"
				class="menu-button"
				aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
				aria-expanded={menuOpen}
				aria-controls="mobile-navigation"
				onclick={() => (menuOpen = !menuOpen)}
			>
				{#if menuOpen}<X size={21} />{:else}<Menu size={21} />{/if}
			</button>
		</div>
	</nav>

	{#if menuOpen}
		<ul id="mobile-navigation" class="mobile-nav">
			{#each items as item (item.href)}
				<li>
					<a
						href={item.href}
						aria-current={activeHref === item.href ? 'location' : undefined}
						onclick={() => closeMenu()}
					>
						{item.label}
					</a>
				</li>
			{/each}
		</ul>
	{/if}
</header>
