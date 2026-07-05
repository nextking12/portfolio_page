<script lang="ts">
	import { onMount } from 'svelte';
	import type { NavItem } from '$lib/data/site';

	type Theme = 'light' | 'dark';

	let { items, theme, toggleTheme } = $props<{
		items: NavItem[];
		theme: Theme;
		toggleTheme: () => void;
	}>();
	let activeHref = $state('#home');

	onMount(() => {
		const sections = items
			.map((item: NavItem) => document.querySelector<HTMLElement>(item.href))
			.filter((section: HTMLElement | null): section is HTMLElement => section !== null);

		if (sections.length === 0) {
			return;
		}

		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						activeHref = `#${entry.target.id}`;
					}
				}
			},
			{
				rootMargin: '-30% 0px -60% 0px',
				threshold: 0.05
			}
		);

		for (const section of sections) {
			observer.observe(section);
		}

		return () => observer.disconnect();
	});
</script>

<header class="sticky top-0 z-50 border-b border-[var(--color-line)] bg-[var(--color-nav-bg)] backdrop-blur-xl">
	<nav class="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-y-2 px-4 py-2 sm:px-6 md:h-14 md:flex-nowrap md:gap-y-0 md:px-10 md:py-0">
		<a href="#home" class="text-sm font-semibold tracking-wide text-[var(--color-text)]">Portfolio</a>
		<button
			type="button"
			onclick={toggleTheme}
			class="inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] bg-[var(--color-surface)] px-3 py-1.5 text-xs font-semibold text-[var(--color-text)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--color-accent-line)] hover:shadow-[0_8px_20px_-16px_var(--color-accent)]"
			aria-label="Toggle theme"
		>
			<span aria-hidden="true">{theme === 'dark' ? 'Light' : 'Dark'}</span>
		</button>

		<ul class="no-scrollbar order-3 flex w-full items-center justify-between gap-1 overflow-x-auto pb-0.5 text-xs text-[var(--color-muted)] sm:text-sm md:order-none md:w-auto md:justify-start">
			{#each items as item}
				<li>
					<a
						href={item.href}
						class="relative inline-flex rounded-full px-2.5 py-1.5 transition-all duration-300 hover:text-[var(--color-text)] sm:px-3"
						class:text-[var(--color-text)]={activeHref === item.href}
					>
						{item.label}
						<span
							class="absolute inset-x-2 -bottom-0.5 h-px origin-left bg-[var(--color-accent)] transition-transform duration-300 sm:inset-x-3"
							class:scale-x-100={activeHref === item.href}
							class:scale-x-0={activeHref !== item.href}
						></span>
					</a>
				</li>
			{/each}
		</ul>
	</nav>
</header>
