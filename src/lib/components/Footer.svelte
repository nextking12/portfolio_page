<script lang="ts">
	import { Sun, Moon, ArrowUp } from '@lucide/svelte';

	type Theme = 'light' | 'dark';

	let { theme, toggleTheme } = $props<{
		theme: Theme;
		toggleTheme: () => void;
	}>();

	const year = new Date().getFullYear();
</script>

<footer class="border-t border-[var(--color-line)]">
	<div
		class="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-6 px-6 py-10 text-xs text-[var(--color-muted)] md:flex-row md:items-center md:px-10"
	>
		<div class="space-y-1">
			<p>© {year} Edward King. All rights reserved.</p>
			<p class="text-[var(--color-muted)]">Built with SvelteKit &amp; Tailwind.</p>
		</div>

		<div class="flex items-center gap-2">
			<button
				type="button"
				onclick={toggleTheme}
				aria-label="Toggle theme"
				class="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-line)] text-[var(--color-text-soft)] transition-all duration-200 hover:border-[var(--color-accent)] hover:text-[var(--color-accent-strong)]"
			>
				{#if theme === 'dark'}
					<Sun size={14} strokeWidth={1.75} />
				{:else}
					<Moon size={14} strokeWidth={1.75} />
				{/if}
			</button>
			<a
				href="#home"
				aria-label="Back to top"
				class="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-line)] text-[var(--color-text-soft)] transition-all duration-200 hover:border-[var(--color-accent)] hover:text-[var(--color-accent-strong)]"
			>
				<ArrowUp size={14} strokeWidth={1.75} />
			</a>
		</div>
	</div>
</footer>
