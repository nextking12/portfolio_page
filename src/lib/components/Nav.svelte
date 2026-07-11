<script lang="ts">
	import { onMount } from 'svelte';
	import { Sun, Moon } from '@lucide/svelte';
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

		if (sections.length === 0) return;

		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						activeHref = `#${entry.target.id}`;
					}
				}
			},
			{ rootMargin: '-30% 0px -60% 0px', threshold: 0.05 }
		);

		for (const section of sections) observer.observe(section);
		return () => observer.disconnect();
	});
</script>

<header
	class="sticky top-0 z-40 border-b border-[var(--color-line)] bg-[var(--color-nav-bg)] backdrop-blur-xl"
>
	<nav class="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-6 py-4 md:px-10">
		<a
			href="#home"
			class="text-sm font-medium tracking-tight text-[var(--color-text)] transition-colors hover:text-[var(--color-accent-strong)]"
		>
			EK<span class="text-[var(--color-muted)]">.</span>
		</a>

		<ul
			class="no-scrollbar hidden items-center gap-8 overflow-x-auto text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-muted)] md:flex"
		>
			{#each items as item (item.href)}
				<li>
					<a
						href={item.href}
						class="relative py-1 transition-colors duration-200 hover:text-[var(--color-text)]"
						class:!text-[var(--color-text)]={activeHref === item.href}
					>
						{item.label}
						<span
							class="absolute inset-x-0 -bottom-0.5 h-px origin-left bg-[var(--color-accent)] transition-transform duration-300"
							class:scale-x-100={activeHref === item.href}
							class:scale-x-0={activeHref !== item.href}
						></span>
					</a>
				</li>
			{/each}
		</ul>

		<button
			type="button"
			onclick={toggleTheme}
			class="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-line)] text-[var(--color-text-soft)] transition-all duration-200 hover:border-[var(--color-accent)] hover:text-[var(--color-accent-strong)]"
			aria-label="Toggle theme"
		>
			{#if theme === 'dark'}
				<Sun size={15} strokeWidth={1.75} />
			{:else}
				<Moon size={15} strokeWidth={1.75} />
			{/if}
		</button>
	</nav>

	<!-- Mobile section links -->
	<ul
		class="no-scrollbar flex items-center justify-start gap-6 overflow-x-auto border-t border-[var(--color-line)] px-6 py-2 text-[10px] font-medium uppercase tracking-[0.18em] text-[var(--color-muted)] md:hidden"
	>
		{#each items as item (item.href)}
			<li>
				<a
					href={item.href}
					class="transition-colors hover:text-[var(--color-text)]"
					class:!text-[var(--color-text)]={activeHref === item.href}
				>
					{item.label}
				</a>
			</li>
		{/each}
	</ul>
</header>
