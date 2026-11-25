// news-image-20261124 entrypoint (Node 22, standard library only).
//
// The entry is a single image: entry.png beside this file. The program
// copies it into the output directory the grader provides
// ($MAKEFUN_OUTPUT_DIR, or /output inside the grading container), so the
// judge sees exactly the bytes committed in this repository. No network,
// no randomness: every run writes identical bytes.

import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");
const targetDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

if (!existsSync(source)) {
  throw new Error(`entry.png not found next to main.ts (${source})`);
}
mkdirSync(targetDir, { recursive: true });
copyFileSync(source, join(targetDir, "entry.png"));
