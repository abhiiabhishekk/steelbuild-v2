type RateLimitEntry = {
  count: number;
  expiresAt: number;
};

type RateLimitOptions = {
  identifier: string;
  limit?: number;
  windowMs?: number;
};

export type RateLimitResult = {
  success: boolean;
  remaining: number;
  retryAfter: number;
};

const requestStore = new Map<
  string,
  RateLimitEntry
>();

function removeExpiredEntries(
  currentTime: number,
): void {
  if (requestStore.size < 500) {
    return;
  }

  for (const [key, entry] of requestStore.entries()) {
    if (entry.expiresAt <= currentTime) {
      requestStore.delete(key);
    }
  }
}

export function rateLimit({
  identifier,
  limit = 5,
  windowMs = 15 * 60 * 1000,
}: RateLimitOptions): RateLimitResult {
  const currentTime = Date.now();

  removeExpiredEntries(currentTime);

  const existingEntry =
    requestStore.get(identifier);

  if (
    !existingEntry ||
    existingEntry.expiresAt <= currentTime
  ) {
    requestStore.set(identifier, {
      count: 1,
      expiresAt: currentTime + windowMs,
    });

    return {
      success: true,
      remaining: Math.max(limit - 1, 0),
      retryAfter: 0,
    };
  }

  if (existingEntry.count >= limit) {
    return {
      success: false,
      remaining: 0,
      retryAfter: Math.max(
        Math.ceil(
          (existingEntry.expiresAt - currentTime) /
            1000,
        ),
        1,
      ),
    };
  }

  const updatedEntry: RateLimitEntry = {
    count: existingEntry.count + 1,
    expiresAt: existingEntry.expiresAt,
  };

  requestStore.set(identifier, updatedEntry);

  return {
    success: true,
    remaining: Math.max(
      limit - updatedEntry.count,
      0,
    ),
    retryAfter: 0,
  };
}