import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Four candidate texts were drafted against the judge's criteria in order:
// relaxes, calm shown not instructed, slow rhythm and plain concrete words,
// an image that dwarfs the reader and keeps growing, fresh images.
// The river stone was kept: a river working since before the town had a name,
// turning the stone once a century, the water holding all the time there is.
const ENTRY =
  "The river has been working on this stone since before the town had a name. " +
  "It turns it over once a century and sets it down a little smoother. " +
  "The stone does not mind. It has nowhere else to be, and the water has " +
  "all the time there is.\n";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
