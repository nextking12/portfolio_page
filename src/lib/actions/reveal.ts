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
	distance: 7,
	duration: 480,
	threshold: 0.08,
	once: true
};

export const reveal: Action<HTMLElement, RevealOptions | undefined> = (node, options) => {
	if (typeof window === 'undefined') {
		return {};
	}

	let observer: IntersectionObserver | null = null;
	let settleTimer: number | undefined;

	const setup = (nextOptions: RevealOptions) => {
		const settings = { ...DEFAULTS, ...nextOptions };
		const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

		if (observer) {
			observer.disconnect();
			observer = null;
		}
		if (settleTimer !== undefined) {
			window.clearTimeout(settleTimer);
			settleTimer = undefined;
		}

		if (prefersReducedMotion) {
			node.style.opacity = '1';
			node.style.transform = 'none';
			node.style.transition = 'none';
			node.style.willChange = 'auto';
			return;
		}

		node.style.opacity = '0';
		node.style.transform = `translate3d(0, ${settings.distance}px, 0)`;
		node.style.willChange = 'opacity, transform';
		node.style.transition = `opacity ${settings.duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${settings.delay}ms, transform ${settings.duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${settings.delay}ms`;

		observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						node.style.opacity = '1';
						node.style.transform = 'translate3d(0, 0, 0)';
						settleTimer = window.setTimeout(() => {
							node.style.willChange = 'auto';
							settleTimer = undefined;
						}, settings.delay + settings.duration);

						if (settings.once && observer) {
							observer.unobserve(node);
						}
					} else if (!settings.once) {
						node.style.opacity = '0';
						node.style.transform = `translate3d(0, ${settings.distance}px, 0)`;
						node.style.willChange = 'opacity, transform';
					}
				}
			},
			{ threshold: settings.threshold, rootMargin: '0px 0px -6% 0px' }
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
			if (settleTimer !== undefined) window.clearTimeout(settleTimer);
		}
	};
};
