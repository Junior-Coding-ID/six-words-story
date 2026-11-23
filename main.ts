import { mkdirSync, writeFileSync } from "node:fs";

// Six Words, One Story — v2 entry.
// A complete two-sentence story in exactly six words: a passport burned
// (freedom taken away), then "I swam" (the escape). No filler words.
const entry = "He burned my passport. I swam.";

mkdirSync("/output", { recursive: true });

// Write the entry exactly as-is: 30 bytes, no trailing newline, no extra
// text. The exact byte count matters: the bounty ranks equal scores by
// entry size, so the shortest complete story wins the tie-break.
writeFileSync("/output/entry.txt", entry, "utf8");
