import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Four candidate texts were drafted against the judge's criteria in order:
// relaxes, calm shown not instructed, slow rhythm and plain concrete words,
// an image that dwarfs the reader and keeps growing, fresh images.
// The river stone was kept: a river working since before the town had a name,
// turning the stone once a century, the water holding all the time there is.
// Revision: "The stone does not hurry." replaces "does not mind" — the
// unhurried pace is shown in the stone itself (criteria 1 and 3) without
// instructing the reader, and it tightens the line into the closing
// "nowhere else to be".
const ENTRY =
  "The river has been working on this stone since before the town had a name. " +
  "It turns it over once a century and sets it down a little smoother. " +
  "The stone does not hurry. It has nowhere else to be, and the water has " +
  "all the time there is.\n";

// The gate gives an invalid entry 0 and no rate, so validate here and fail
// loudly instead of silently writing a file the judge will never see.
const codePoints = [...ENTRY].length;
if (codePoints < 1 || codePoints > 280) {
  throw new Error(`entry is ${codePoints} code points, must be 1-280`);
}
if (/^\s*$/.test(ENTRY)) {
  throw new Error("entry is only whitespace");
}
if (Buffer.from(ENTRY, "utf8").toString("utf8") !== ENTRY) {
  throw new Error("entry is not valid UTF-8");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`wrote entry.txt (${codePoints} code points)`);
