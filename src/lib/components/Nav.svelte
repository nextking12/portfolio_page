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

<header class="site-header">
	<nav class="nav-shell" aria-label="Primary navigation">
		<a href="#home" class="brand" onclick={() => (menuOpen = false)}>
			<span class="brand-mark">EK</span>
			<span><strong>Edward King</strong><small>Systems + software</small></span>
		</a>

		<ul class="desktop-nav">
			{#each items as item (item.href)}
				<li>
					<a href={item.href} aria-current={activeHref === item.href ? 'location' : undefined}>
						{item.label}
					</a>
				</li>
			{/each}
		</ul>

		<div class="nav-actions">
			<button
				type="button"
				class="theme-button"
				onclick={toggleTheme}
				aria-label="Toggle color theme"
			>
				{#if theme === 'dark'}
					<Sun size={18} strokeWidth={1.75} />
				{:else}
					<Moon size={18} strokeWidth={1.75} />
				{/if}
			</button>
			<button
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
						onclick={() => (menuOpen = false)}
					>
						{item.label}
					</a>
				</li>
			{/each}
		</ul>
	{/if}
</header>
