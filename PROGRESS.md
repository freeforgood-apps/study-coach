# Study Coach: progress

New chat? Read this first. It replaces the old Claude Project instructions.

## What it is

Study Coach for the GED® Test: a free, mobile-first study web app. It's for adults working toward a GED around jobs and families, mostly on phones, often in short breaks, and sometimes anxious about tests or school. README.md lists the features.

## Where things stand (Nov 3, 2026)

- **Live version:** 2.5.1 at https://freeforgood-apps.github.io/study-coach/
- 2.5 (Nov 3, 2026) brings Till Payday's saving safety net: backup files, restore from a file, automatic copies, two-tap restore, damaged progress set aside, a not-saving warning and two-tab protection. It passed the self-test in headless Chrome at phone, small phone (dark) and desktop sizes, and as a Claude-style copy inside a frame (1,349 to 1,363 checks), and the self-test caught all 10 bugs planted on purpose. Both Claude copies are on 2.5 too (republished Nov 3, 2026). 2.5.1 (Nov 3, 2026) makes the backup code boxes 16px so iPhone Safari stops zooming, and passed the self-test at phone and small phone (dark) sizes. Both Claude copies are on 2.5.1 (republished Nov 3, 2026). 2.5.1 also passed on the live site on a real iPhone (Safari engine, iOS 18.7, 1,353 checks, Nov 3, 2026).
- 2.4 (Keep your progress safe, matched with Till Payday) and 2.4.1 (a Run the self-test link on About, like Till Payday's) passed the self-test in headless Chrome at phone, small phone (dark) and desktop sizes, and as a Claude-style copy inside a frame (Nov 3, 2026). Both Claude copies are on 2.4.1 too (republished Nov 3, 2026). 2.4.1 also passed on the live site on a real iPhone (Safari engine, iOS 18.7, 1,291 checks, Nov 3, 2026). Full test history is in README.md under "Tested on".
- Every past version is kept in GitHub's history. To roll back, find the version in CHANGELOG.md and restore that upload. Claude's workspace couldn't push version tags (GitHub refused them, Nov 3, 2026), so add tags like v2.4 on the GitHub website if wanted.

## Where it lives

- **This repo is the latest source.** Claude's workspace is temporary, so anything worth keeping gets saved here. Files sit flat at the top of the repo (no folders).
- `index.html`: the whole app in one self-contained file.
- `selftest.html`: the same app plus an automated self-test, on its own storage (`study-coach-selftest-v1`).
- **Keep your progress safe** (2.4) is shared with Till Payday on purpose: the About tips, the one-card-at-a-time Home cards, and the backup reminder timing. Change them in both apps together so they keep matching. Study Coach counts answered questions toward reminders (Till Payday counts edits), so its numbers are scaled to that.
- **Saving safety net** (2.5), copied from Till Payday on purpose: Study Coach asks the browser to keep its data; Back up offers Save as a file (share sheet, or a download) on the website and the backup code everywhere; Restore takes a file or a code; restoring over existing progress takes two taps; automatic copies from the last 3 days opened live under `ged-study-coach-v1-copies`; unreadable progress is set aside under `ged-study-coach-v1-damaged` and never saved over; a warning shows when saving fails; and the newest save wins across open tabs. Keep these matching Till Payday. One deliberate difference: bringing back an automatic copy does **not** count as a backup here (it's still only on this device), while Till Payday counts it as one.
- **Saved data** carries a data version (`dv`, now 2). Saved progress and backup codes both go through `hydrate()`, which upgrades older data. If the shape changes again, bump DATA_VERSION and add the upgrade there.
- `sw.js`: offline support (network-first). It only clears caches whose names start with `study-coach-`, because the address is shared with other free apps.
- `README.md`: the public project page.
- `manifest.webmanifest` and `icon-192.png`, `icon-512.png`, `icon-maskable-512.png`: install details and icons, so Android phones and computers can install it as an app. Its id, start and scope all stay inside /study-coach/, since the address is shared.
- **Claude copies:** two Claude pages, named "Study Coach for the GED® Test" and "Study Coach Self-Test". Find them by name in the Claude artifacts list. Their links stay out of this repo. Republish both with every release. To make them from `index.html` and `selftest.html`: start at the `<title>` line, add `<meta name="claude:viewport-fit-sides" content="cover">` right after it, then remove the `</head>` and `<body>` lines and the closing `</body>` and `</html>` lines. The manifest link sits above the `<title>` line on purpose, so the copies leave it out.
- **Old address:** freestudycoach.github.io/study-coach holds only a "we've moved" page that forwards people here and helps anyone with progress saved there bring it along. Never put the app back there.

## Next up

- Till Payday 1.1.2 matches: restoring an automatic copy no longer counts as a backup there either (Nov 3, 2026).

## Non-negotiables

1. **Always free:** no ads, paywalls, accounts, or donation or support buttons.
2. **Private:** no analytics, tracking, cookies or outside requests (no external fonts or CDNs). Progress lives only in the browser, under `ged-study-coach-v1` (plus `ged-study-coach-v1-install`, which only remembers that the Make it an app card was dismissed on that device, `ged-study-coach-v1-copies` for the automatic copies, and `ged-study-coach-v1-damaged` for unreadable progress set aside). Never rename them, and keep every storage key and cache name unique, since other apps share the same address.
3. **Anonymous:** the only public identity is freeforgood-apps and freeforgood-apps+study@proton.me. Never put anyone's real name, personal email, location, workplace, social handles, links to Claude chats or Claude page IDs in any file, commit or post. Commits use the account's private GitHub noreply address as the author, and keep Claude's default committer (Claude, noreply@anthropic.com) so GitHub shows them as Verified. Don't upload Claude's signing key to the account: it isn't ours and may be shared.
4. **Honest:** keep the GED® trademark notice and "Not affiliated with ACE or GED Testing Service". Practice scores are never GED scores. Keep the AI-assisted content disclosure. Never overstate what has been tested.
5. **Accessible:** WCAG 2.2 AA contrast in light and dark mode, large tap targets, screen-reader labels, Listen (read aloud), keyboard support, a large-text option, and no sideways scrolling at 320px wide.

## How to make changes

- Keep the single-file structure. Never break saved progress: old data must still load after an update.
- Bump APP_VERSION with every change (patch for fixes, minor for new features), and the cache name in `sw.js` to match.
- Keep `index.html` and `selftest.html` running identical app code. Add self-test checks for anything new.
- Before delivering, always:
  1. Run the full self-test (it must pass).
  2. Check light and dark mode and small phone widths.
  3. Scan every file for personal info.
  4. Confirm only the intended lines changed, and give a short summary.
- Update README.md (features, plus a dated "Tested on" row for each version and environment; list untested browsers honestly), add a CHANGELOG.md entry, and update this file.
- Save the changes straight to GitHub and say which files changed. Then run the self-test on the live site on a real iPhone.

## Content standards

- Original, accurate, plain-language content.
- Every question has exactly 4 unique options, one correct answer, and a "why" explanation. Every test question is tagged to a lesson.
- Lessons must teach everything the practice tests ask.
- For GED rules, dates, prices or policies, check GED.com, since they change and vary by state.
- Essay passages stay clearly labeled as made up for practice.

## Feedback from users

- Reports arrive by email or GitHub Issues. Verify each claim before changing anything.
- Fix real mistakes, then retest. Never publish a reporter's personal details.

## Working with the owner

- Casual, warm and brief. Plain language, no jargon.
- Any steps the owner has to do should work on an iPhone (Safari, Files app, GitHub website).
- Ask before anything that affects privacy, anonymity or money, or removes a feature.
- If something is unclear, ask one short question rather than guessing.
