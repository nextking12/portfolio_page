export type RateLimitResult = { ok: true } | { ok: false; retryAfterSec: number };

export type RateLimitRule = {
	windowMs: number;
	max: number;
};

export type RateLimitOptions = {
	key: string;
	rules: RateLimitRule[];
	now?: number;
};

const hitsByKey = new Map<string, number[]>();

const prune = (timestamps: number[], oldestAllowed: number) => {
	let index = 0;
	while (index < timestamps.length && timestamps[index]! < oldestAllowed) index += 1;
	if (index > 0) timestamps.splice(0, index);
};

/** Best-effort in-process limiter. Resets on cold start; not shared across instances. */
export function consumeRateLimit({
	key,
	rules,
	now = Date.now()
}: RateLimitOptions): RateLimitResult {
	if (!key || rules.length === 0) return { ok: true };

	const longestWindow = Math.max(...rules.map((rule) => rule.windowMs));
	const timestamps = hitsByKey.get(key) ?? [];
	prune(timestamps, now - longestWindow);

	for (const rule of rules) {
		const windowStart = now - rule.windowMs;
		const count = timestamps.reduce(
			(total, stamp) => (stamp >= windowStart ? total + 1 : total),
			0
		);
		if (count >= rule.max) {
			const oldestInWindow = timestamps.find((stamp) => stamp >= windowStart) ?? now;
			const retryAfterSec = Math.max(1, Math.ceil((oldestInWindow + rule.windowMs - now) / 1000));
			hitsByKey.set(key, timestamps);
			return { ok: false, retryAfterSec };
		}
	}

	timestamps.push(now);
	hitsByKey.set(key, timestamps);
	return { ok: true };
}

export function resetRateLimitStore() {
	hitsByKey.clear();
}

export const contactRateLimitRules: RateLimitRule[] = [
	{ windowMs: 15 * 60 * 1000, max: 5 },
	{ windowMs: 24 * 60 * 60 * 1000, max: 20 }
];
