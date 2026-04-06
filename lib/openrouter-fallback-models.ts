/**
 * OpenRouter `models` list: primary is `OPENROUTER_MODEL` (see /api/chat), then these in order.
 * Each id must support `/v1/chat/completions` on OpenRouter.
 */
export const OPENROUTER_FALLBACK_MODEL_IDS: readonly string[] = [
  "google/lyria-3-pro-preview",
  "nvidia/nemotron-3-super-120b-a12b:free",
]
