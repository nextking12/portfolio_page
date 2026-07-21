import { beforeEach, describe, expect, it } from 'vitest';
import { consumeRateLimit, resetRateLimitStore } from './rate-limit';

describe('consumeRateLimit', () => {
	beforeEach(() => {
		resetRateLimitStore();
	});

	it('allows traffic under the configured ceilings', () => {
		const rules = [{ windowMs: 60_000, max: 3 }];
		const now = 1_000_000;

		expect(consumeRateLimit({ key: 'ip-1', rules, now })).toEqual({ ok: true });
		expect(consumeRateLimit({ key: 'ip-1', rules, now: now + 1 })).toEqual({ ok: true });
		expect(consumeRateLimit({ key: 'ip-1', rules, now: now + 2 })).toEqual({ ok: true });
	});

	it('blocks when a window is exhausted and reports retry-after', () => {
		const rules = [{ windowMs: 60_000, max: 2 }];
		const now = 2_000_000;

		expect(consumeRateLimit({ key: 'ip-2', rules, now })).toEqual({ ok: true });
		expect(consumeRateLimit({ key: 'ip-2', rules, now: now + 1000 })).toEqual({ ok: true });

		const limited = consumeRateLimit({ key: 'ip-2', rules, now: now + 2000 });
		expect(limited).toEqual({ ok: false, retryAfterSec: 58 });
	});

	it('tracks keys independently', () => {
		const rules = [{ windowMs: 60_000, max: 1 }];
		const now = 3_000_000;

		expect(consumeRateLimit({ key: 'a', rules, now })).toEqual({ ok: true });
		expect(consumeRateLimit({ key: 'b', rules, now })).toEqual({ ok: true });
		expect(consumeRateLimit({ key: 'a', rules, now: now + 1 }).ok).toBe(false);
	});
});
