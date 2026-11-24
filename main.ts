// Angry Judge: The Short Rant Contest
//
// Writes one short, funny rant about an everyday annoyance (the alarm
// that snoozed itself) to /output/entry.txt.
//
// Deterministic by design: the rant is a string literal in this file.
// No network, no environment variables, no file reads, no randomness.
//
// Gate: /output/entry.txt must be UTF-8 text of 1-400 characters, not
// only whitespace. This rant is 226 characters, and it is written with
// no trailing newline so the file holds exactly the rant, nothing more.

import { mkdirSync, writeFileSync } from "node:fs";

// Candidate #5 from candidates.md: the alarm that snoozed itself and
// cost the narrator the bus, breakfast, and dignity. Winner of the local
// Crown judge round-robin (BT theta +0.384, share 2.45/4.00) — the
// strongest of the five candidates, so this is the submitted entry.
const RANT =
  "My alarm snoozed itself. I set it for 6 a.m., it rang once, decided I looked tired, and gave me nine more minutes — nine minutes that cost me the bus, my breakfast, and my dignity. Even my phone pities me now, and it is right.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", RANT, "utf8");
