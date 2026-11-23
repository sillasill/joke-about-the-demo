// make.fun — "The joke about the demo"
// Writes one joke to /output/entry.txt.
// Deterministic: the text is a constant. No randomness, no clock, no network.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const TEXT =
  "The demo crashed live, so my coding agent wrote a post-mortem, ran the retrospective, and assigned the fix to me.";

// The judge reads one joke: keep it within 1–280 characters.
if (TEXT.length < 1 || TEXT.length > 280) {
  throw new Error(`TEXT must be 1-280 characters, got ${TEXT.length}`);
}

const out = process.argv[2] ?? "/output/entry.txt";
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, TEXT, "utf8");
