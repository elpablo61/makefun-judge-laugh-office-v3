import { mkdirSync, writeFileSync } from "node:fs";

const line = "Rina's farewell email thanked 'everyone who made this place bearable, especially the fire exit'. The fire exit got a card. Rina didn't.";

// Gate: the entry must be UTF-8 text of 1 to 199 characters, one line.
if (line.length < 1 || line.length > 199 || line.includes("\n")) {
  throw new Error(`entry length ${line.length} is outside the 1-199 single-line gate`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line, "utf8");
