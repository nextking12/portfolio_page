import type { Action } from 'svelte/action';

export type RevealOptions = {
	delay?: number;
	distance?: number;
	duration?: number;
	threshold?: number;
	once?: boolean;
};

const DEFAULTS: Required<RevealOptions> = {
	delay: 0,
	distance: 10,
	duration: 700,
	threshold: 0.15,
	once: true
};

export const reveal: Action<HTMLElement, RevealOptions | undefined> = (node, options) => {
	if (typeof window === 'undefined') {
		return {};
	}

	let observer: IntersectionObserver | null = null;

	const setup = (nextOptions: RevealOptions) => {
		const settings = { ...DEFAULTS, ...nextOptions };
		const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

		if (observer) {
			observer.disconnect();
			observer = null;
		}

		if (prefersReducedMotion) {
			node.style.opacity = '1';
			node.style.transform = 'translateY(0)';
			node.style.transition = 'none';
			return;
		}

		node.style.opacity = '0';
		node.style.transform = `translateY(${settings.distance}px)`;
		node.style.transition = `opacity ${settings.duration}ms cubic-bezier(0.22, 1, 0.36, 1) ${settings.delay}ms, transform ${settings.duration}ms cubic-bezier(0.22, 1, 0.36, 1) ${settings.delay}ms`;

		observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						node.style.opacity = '1';
						node.style.transform = 'translateY(0)';

						if (settings.once && observer) {
							observer.unobserve(node);
						}
					} else if (!settings.once) {
						node.style.opacity = '0';
						node.style.transform = `translateY(${settings.distance}px)`;
					}
				}
			},
			{ threshold: settings.threshold }
		);

		observer.observe(node);
	};

	setup(options ?? {});

	return {
		update(nextOptions) {
			setup(nextOptions ?? {});
		},
		destroy() {
			observer?.disconnect();
		}
	};
};
