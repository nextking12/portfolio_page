<script lang="ts">
	import { ArrowUp } from '@lucide/svelte';
	const year = new Date().getFullYear();
</script>

<footer class="border-t border-[var(--color-line)]">
	<div
		class="mx-auto flex w-full max-w-[88rem] flex-col items-start justify-between gap-6 px-5 py-8 font-mono text-[9px] uppercase tracking-[0.14em] text-[var(--color-muted)] md:flex-row md:items-center md:px-8"
	>
		<div class="space-y-1">
			<p>© {year} Edward King. All rights reserved.</p>
			<p>Designed and engineered with care.</p>
		</div>

		<div class="flex items-center gap-3">
			<span>End of file / 05</span>
			<a
				href="#home"
				aria-label="Back to top"
				class="inline-flex h-8 w-8 items-center justify-center border border-[var(--color-line-strong)] text-[var(--color-text-soft)] transition-colors duration-200 hover:border-[var(--color-accent)] hover:text-[var(--color-accent-strong)]"
			>
				<ArrowUp size={14} strokeWidth={1.75} />
			</a>
		</div>
	</div>
</footer>
