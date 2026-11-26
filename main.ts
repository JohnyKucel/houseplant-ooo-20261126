import { mkdirSync, writeFileSync } from "node:fs";

// One line, 143 characters: an out-of-office reply written by a
// houseplant — the office plants have taken over the inbox while
// their human is away, and the punch lands on photosynthesis.
const ENTRY =
  "I'm out of the office — the fern is watering my inbox, the succulent filed a complaint with HR, and I'll photosynthesize a reply when I return.";

// The gate allows 1 to 200 characters, a single line, and not only
// whitespace; refuse to write an entry that breaks it.
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry is ${ENTRY.length} characters, must be 1-200`);
}

if (ENTRY.includes("\n") || ENTRY.trim().length === 0) {
  throw new Error("entry must be one non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
