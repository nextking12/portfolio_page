<script lang="ts">
	let year = new Date().getFullYear();
</script>

<footer class="border-t border-[var(--color-line)]">
	<div class="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-3 px-6 py-7 text-sm text-[var(--color-subtle)] md:flex-row md:px-10">
		<p>© {year} Your Name. Crafted with SvelteKit.</p>
		<a href="#home" class="font-medium text-[var(--color-muted)] transition-colors hover:text-[var(--color-text)]">Back to top</a>
	</div>
</footer>
