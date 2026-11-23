import { mkdirSync, writeFileSync } from "node:fs";

// Six Words, One Story — v3: a child shields their mother by
// mistranslating every insult, and she smiles back, unknowing.
// Zero pronouns: all six words carry weight. The mistranslation
// is the turn — a failure of language turned into an act of love.
const STORY =
  "Mistranslated every insult. Mother smiled back.";

if (STORY.split(/\s+/).length !== 6) {
  throw new Error(`story must be exactly 6 words, got ${STORY}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", STORY, "utf8");
