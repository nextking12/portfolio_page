<script lang="ts">
	import { onMount } from 'svelte';
	import type { NavItem } from '$lib/data/site';

	let { items } = $props<{ items: NavItem[] }>();
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
			{ rootMargin: '-40% 0px -55% 0px', threshold: 0.05 }
		);

		for (const section of sections) observer.observe(section);
		return () => observer.disconnect();
	});
</script>

<aside
	aria-hidden="true"
	class="pointer-events-none fixed left-4 top-1/2 z-30 hidden -translate-y-1/2 flex-col gap-3 md:flex"
>
	{#each items as item (item.href)}
		<a
			href={item.href}
			aria-label={item.label}
			class="pointer-events-auto group relative flex h-8 w-2 items-center justify-center"
		>
			<span
				class="block w-[2px] transition-all duration-300"
				class:h-8={activeHref === item.href}
				class:h-3={activeHref !== item.href}
				style:background-color={activeHref === item.href
					? 'var(--color-text)'
					: 'var(--color-line-strong)'}
			></span>
			<span
				class="pointer-events-none absolute left-5 whitespace-nowrap text-[10px] font-medium uppercase tracking-[0.2em] text-[var(--color-text-soft)] opacity-0 transition-opacity duration-200 group-hover:opacity-100"
			>
				{item.label}
			</span>
		</a>
	{/each}
</aside>
