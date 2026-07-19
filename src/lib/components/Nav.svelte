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
			{ rootMargin: '-30% 0px -60% 0px', threshold: 0.05 }
		);

		for (const section of sections) observer.observe(section);
		return () => observer.disconnect();
	});
</script>

<header
	class="sticky top-0 z-40 isolate border-b border-[var(--color-line-strong)] bg-[var(--color-nav-bg)] backdrop-blur-md"
>
	<nav
		class="mx-auto flex w-full max-w-[88rem] items-center justify-between gap-6 px-5 py-3 md:px-8"
	>
		<a
			href="#home"
			class="flex items-center gap-3 text-[var(--color-text)] transition-colors hover:text-[var(--color-accent-strong)]"
		>
			<span class="studio-mark">EK</span>
			<span class="font-mono text-[10px] uppercase leading-tight tracking-[0.18em]"
				>Edward King<br />Digital studio</span
			>
		</a>

		<ul
			class="no-scrollbar hidden items-center gap-7 overflow-x-auto font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--color-muted)] md:flex"
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

		<a href="#contact" class="studio-cta ml-auto md:ml-0"
			><span class="status-dot"></span> Start a project</a
		>
	</nav>
</header>
