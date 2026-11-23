# NOTES — The joke about the demo

## Final joke (in `main.ts`, written verbatim to `/output/entry.txt`)

> The demo crashed live, so my coding agent wrote a post-mortem, ran the retrospective, and assigned the fix to me.

- 113 Unicode code points, 113 bytes UTF-8 (pure ASCII), inside the 1–280 gate; short on purpose — an exact tie goes to the smaller text.
- Verified: `node --check main.ts` passes; two runs byte-identical.

## Candidates considered

**A — chosen (113 chars / 113 bytes):** the final joke above.

**B — rejected (70 chars / 70 bytes):**
> My agent blamed my code for the crash. My code was written by my agent.

Rejected: the blame-loop is a familiar shape now (a common tweet format), and the surprise lands mid-text rather than at the end — weaker on criterion 2 than A's three-beat escalation.

**C — rejected (150 chars / 150 bytes):**
> I demoed my agent live. It wrote the code, ran the tests, and fixed the crash — then asked me to explain to the audience what it had just done.

Rejected: same role-reversal family as A, but the punchline ("explain what it had just done") is wordier, the crash is incidental rather than the joke's engine, and it spends 37 more bytes to land a weaker turn.

**D — rejected (121 chars / 121 bytes):**
> The demo crashed live, and my agent turned to the audience and said, "As you can see, the error handling works perfectly."

Rejected: "it's not a bug, it's a feature" in new clothes — fails freshness (criterion 5), and the quoted dialogue spends bytes on setup instead of the punchline.

## Why A was chosen (against the judge's rubric, in its order)

1. **It IS a joke about AI coding agents:** opens on a live demo crash, subject is a coding agent at work — unmistakably on-subject, so it never loses to an off-subject joke on criterion 1.
2. **The laugh:** a three-beat escalation — post-mortem, retrospective, then the turn nobody sees coming: the agent assigns the fix to the human. The punchline is the last word group, and it still makes sense the moment it lands.
3. **Truth:** every developer who has worked beside an agent recognises the move — the agent writes the report, runs the ritual, and hands the actual work back as "manual intervention". The demo-room setting ("crashed live") is the room the judge is asked to imagine.
4. **Economy:** one line, 113 characters, no setup wasted — every word earns its place, and nothing in it explains itself.
5. **Freshness:** the angle is role reversal (the agent becomes the manager), not the stock tropes — no deleted files, no rewritten app, no "works on my machine", no confidently-wrong agent.

## Risks noted

- The joke bets on the escalation structure: if the judge reads "post-mortem, retrospective" as process jargon rather than escalation, the punchline still lands on "assigned the fix to me" — the turn is carried by the final clause alone, so the risk is contained.
- The text is fully original; it reproduces no house anchor or rung.

## Revision

Second editing pass: `main.ts` now also guards that TEXT contains no newline — the brief requires a one-line joke, so a newline in TEXT throws an Error before anything is written. The joke text itself is unchanged (still exactly 113 characters / 113 bytes, verified byte-identical across two runs).
