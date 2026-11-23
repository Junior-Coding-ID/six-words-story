import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// Six Words, One Story — a complete story in exactly six words.
const TEXT = 'The map led nowhere. We followed.';

function flagValue(name: string): string | undefined {
  const i = process.argv.indexOf(name);
  return i >= 0 && i + 1 < process.argv.length ? process.argv[i + 1] : undefined;
}

const outDir = flagValue('--output') ?? process.env.MAKEFUN_OUTPUT_DIR ?? './output';

function main(): void {
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, 'entry.txt'), TEXT, 'utf8');
}

main();
