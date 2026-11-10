# Study Coach: progress

New chat? Read this first. It replaces the old Claude Project instructions.

## What it is

Study Coach for the GED® Test: a free, mobile-first study web app. It's for adults working toward a GED around jobs and families, mostly on phones, often in short breaks, and sometimes anxious about tests or school. README.md lists the features.

## Where things stand (Nov 9, 2026)

- **Live version:** 2.6.2 at https://freeforgood-apps.github.io/study-coach/
- 2.6.2 (Nov 9, 2026): the five `overlay()` sheets now name themselves for screen readers: `overlay()` adds `aria-labelledby="sheet-title"` and gives the first `<h2>` in the sheet that id (the calculator keeps its own `aria-label`). The self-test now checks every sheet it opens has a name. The toolkit's release check passed every line (self-test 1,926 to 1,931 checks at three sizes; accessibility clean on Home; no security leads), the checker ran on all six sheets with no dialog-name problems left, and the self-test caught the name removed on purpose. Not run inside a frame. On the live site on a real iPhone (Safari engine, iOS 18.7, Nov 9, 2026), the self-test passed in Safari (1,933 checks).
- 2.6.1 (Nov 9, 2026): section headings on About, Progress, Formula sheet, Test-day tips, every lesson and the practice test intro are now `h2` under the page's `h1` (they were `h3`, skipping a level), with the look unchanged; Progress's "Automatic copies" heading moved from `h4` to `h3` to match. The self-test now flags any skipped heading level on every screen it visits. Added `SECURITY.md` and `.gitignore` from the toolkit's Baseline kit. The toolkit's release check passed every line (self-test 1,916 to 1,928 checks at three sizes; accessibility clean on Home; no security leads), a per-screen axe scan found no heading-order problems left, heading styles measured identical before and after, and the self-test caught both heading bugs planted on purpose. Not run inside a frame, since the Claude copies are retired. On the live site on a real iPhone (Safari engine, iOS 18.7, Nov 9, 2026), the self-test passed in Safari (1,913 checks) and from the Home Screen app (1,915 checks). This covers 2.6.0 too, whose own iPhone run was never done.
- 2.6.0 (Nov 9, 2026): the privacy lock from the toolkit's Baseline kit (the same one Till Payday uses), plus the two older accessibility items: every text link is now at least 44px tall, and the calculator's x² key is read as "x squared". The toolkit's release check passed every line (self-test 1,511 to 1,519 checks at three sizes; accessibility clean on Home), the self-test passed inside a frame (1,512 checks), and it caught all 4 lock problems planted on purpose. Never run on a real iPhone; 2.6.1's run covers it.
- 2.5.4 (Nov 9, 2026): on a real iPhone, 2.5.3's self-test failed one check (1,512 checks): "The calculator display grew past its cap with a long sum". iPhone Safari's `vh` is measured as if its toolbars were hidden, so `25vh` came out taller than the check's quarter of `innerHeight`. The calculator cap and the sheets' `88vh` now use `dvh` (the visible screen, with `vh` as a fallback), and the self-test measures the cap with a probe in the browser's own units and prints the sizes if it fails. It passed the self-test at three sizes and inside a frame (1,505 to 1,510 checks), and on the live site on a real iPhone (Safari engine, iOS 18.7, 1,515 checks, Nov 9, 2026), including the calculator's long-sum checks. Tip: right after a release, Safari can show the previous self-test for up to 10 minutes (GitHub Pages lets browsers reuse a page that long). Open `selftest.html?v=<version>` to get the fresh one.
- 2.5.3 (Nov 9, 2026): APP_VERSION is now a plain number (`"2.5.3"`) and the offline cache is `study-coach-2.5.3`, like Till Payday, so the toolkit's release check reads them. Version tags are now added automatically by `.github/workflows/tag-new-versions.yml` (copied from Till Payday) when a new version reaches main. It passed the self-test at three sizes and inside a frame (1,507 to 1,515 checks). On a real iPhone it failed one self-test check, fixed in 2.5.4.
- 2.5.2 (Nov 9, 2026): the calculator display can't get squashed anymore (a long sum scrolls inside it and the keys stay put), every sheet keeps its items at full size (Till Payday 1.1.7's fix), and the Claude copy shows a "Study Coach has moved" note. It passed the self-test in headless Chrome at phone, small phone (dark) and desktop sizes, and inside a frame like the Claude copy (1,506 to 1,512 checks), and the self-test caught all 4 bugs planted on purpose.
- **The Claude copies are retired** (Nov 9, 2026). Both were republished one last time on 2.5.2 and get no more updates. See "Where it lives".
- 2.5 (Nov 3, 2026) brings Till Payday's saving safety net: backup files, restore from a file, automatic copies, two-tap restore, damaged progress set aside, a not-saving warning and two-tab protection. It passed the self-test in headless Chrome at phone, small phone (dark) and desktop sizes, and as a Claude-style copy inside a frame (1,349 to 1,363 checks), and the self-test caught all 10 bugs planted on purpose. Both Claude copies are on 2.5 too (republished Nov 3, 2026). 2.5.1 (Nov 3, 2026) makes the backup code boxes 16px so iPhone Safari stops zooming, and passed the self-test at phone and small phone (dark) sizes. Both Claude copies are on 2.5.1 (republished Nov 3, 2026). 2.5.1 also passed on the live site on a real iPhone (Safari engine, iOS 18.7, 1,353 checks, Nov 3, 2026).
- 2.4 (Keep your progress safe, matched with Till Payday) and 2.4.1 (a Run the self-test link on About, like Till Payday's) passed the self-test in headless Chrome at phone, small phone (dark) and desktop sizes, and as a Claude-style copy inside a frame (Nov 3, 2026). Both Claude copies are on 2.4.1 too (republished Nov 3, 2026). 2.4.1 also passed on the live site on a real iPhone (Safari engine, iOS 18.7, 1,291 checks, Nov 3, 2026). Full test history is in README.md under "Tested on".
- Every past version is kept in GitHub's history. To roll back, find the version in CHANGELOG.md and restore that upload. From 2.5.3 on, the tagging workflow adds a tag like v2.5.3 when a new version goes live. Claude's workspace can't push tags itself (GitHub refused them, Nov 3 and Nov 9, 2026), so older versions like v2.5.2 have no tags unless added on the GitHub website.

## Where it lives

- **This repo is the latest source.** Claude's workspace is temporary, so anything worth keeping gets saved here. Files sit flat at the top of the repo (no folders).
- `index.html`: the whole app in one self-contained file.
- `selftest.html`: the same app plus an automated self-test, on its own storage (`study-coach-selftest-v1`).
- **Keep your progress safe** (2.4) is shared with Till Payday on purpose: the About tips, the one-card-at-a-time Home cards, and the backup reminder timing. Change them in both apps together so they keep matching. Study Coach counts answered questions toward reminders (Till Payday counts edits), so its numbers are scaled to that.
- **Saving safety net** (2.5), copied from Till Payday on purpose: Study Coach asks the browser to keep its data; Back up offers Save as a file (share sheet, or a download) on the website and the backup code everywhere; Restore takes a file or a code; restoring over existing progress takes two taps; automatic copies from the last 3 days opened live under `ged-study-coach-v1-copies`; unreadable progress is set aside under `ged-study-coach-v1-damaged` and never saved over; a warning shows when saving fails; and the newest save wins across open tabs. Keep these matching Till Payday. One deliberate difference: bringing back an automatic copy does **not** count as a backup here (it's still only on this device), while Till Payday counts it as one.
- **Saved data** carries a data version (`dv`, now 2). Saved progress and backup codes both go through `hydrate()`, which upgrades older data. If the shape changes again, bump DATA_VERSION and add the upgrade there.
- **Privacy lock** (2.6.0): `index.html` and `selftest.html` each start with a Content-Security-Policy meta tag (from the toolkit's `templates/privacy-lock.html`) and `<meta name="referrer" content="no-referrer">`. It blocks every outside request and runs only scripts whose sha256 fingerprint is listed. **After any script edit, run `python3 /tmp/toolkit/lock.py index.html selftest.html`** (toolkit setup is in its README), or the edited page won't start. `lock.py --check` changes nothing and says if a lock is out of date. The self-test checks that a request to another site is blocked, and (on the website) that the app page's lock blocks everything and lists every script's fingerprint.
- `.github/workflows/tag-new-versions.yml`: adds the version tag when a new version reaches main. It reads `APP_VERSION = "X.Y.Z"` from index.html, so keep it written that way. Same file as Till Payday's.
- `sw.js`: offline support (network-first). It only clears caches whose names start with `study-coach-`, because the address is shared with other free apps.
- `README.md`: the public project page.
- `SECURITY.md` and `.gitignore` (2.6.1): straight from the toolkit's `templates/`. SECURITY.md points people to the repo's private "Report a vulnerability" button (private vulnerability reporting is on, checked Nov 9, 2026). Its "Last checked" line is from the 2.6.1 release security check, not a full audit; update it after each audit.
- `manifest.webmanifest` and `icon-192.png`, `icon-512.png`, `icon-maskable-512.png`: install details and icons, so Android phones and computers can install it as an app. Its id, start and scope all stay inside /study-coach/, since the address is shared.
- **Claude copies (retired Nov 9, 2026):** two Claude pages, named "Study Coach for the GED® Test" and "Study Coach Self-Test". Find them by name in the Claude artifacts list. Their links stay out of this repo. Both stay up on 2.5.2, which shows a "Study Coach has moved" note pointing to the website, with steps to bring progress along by backup code. **Don't republish them on releases.** People's progress lives in the app copy, so never delete it without asking. Only touch them again for a safety or data fix. To make them from `index.html` and `selftest.html`: start at the `<title>` line, add `<meta name="claude:viewport-fit-sides" content="cover">` right after it, then remove the `</head>` and `<body>` lines and the closing `</body>` and `</html>` lines. The manifest link sits above the `<title>` line on purpose, so the copies leave it out.
- **Old address:** freestudycoach.github.io/study-coach holds only a "we've moved" page that forwards people here and helps anyone with progress saved there bring it along. Never put the app back there.

## Next up

- Short buttons on the test and quiz screens (found Nov 9, 2026 by the same scans, on the screen behind the sheets, not the sheets): "Read aloud" is 96×40 on the quiz and test screens, and "Flag" is 83×40 on the test screen. Both are under the 44px rule. Also the test screen's timer and question-list buttons show the same "spoken name doesn't include the visible words" issue as the item below.
- No main heading on full-screen views (found Nov 9, 2026, older than 2.6.1): the quiz, flashcards, practice test, test results and essay screens show their title in the top bar as plain text, so they have no `h1` (axe: "page-has-heading-one", moderate). The essay checklist's `h3` headings and quiz feedback's `h4` would then need checking too.
- Spoken names that don't include the visible words (axe "label-content-name-mismatch", found Nov 9, 2026, older than 2.6.1): the timers (spoken "Pause test" / "Start timer", showing the time), Listen ("Read aloud"), the test's "All questions" button, and a flashcard ("Show the definition"). Voice Control users say what they see. The calculator's x² key ("x squared") gets flagged too, but that's how "x²" is read, so leave it.
- Restore checks, for the next release (found Nov 5, 2026, comparing with the shared kit in freeforgood-apps/toolkit): `parseCode()` checks the prefix and shape, but `hydrate()` merges the backup straight in with `Object.assign`, so unknown keys (including `__proto__`) come along. Rebuild from known fields only, like Till Payday's `sanitize()`, and add a size cap and a "this backup is from a newer version" message.
- Check the 4 `innerHTML` spots (`syncListen`, `strip`, the calculator sheet, and the main screen render) to confirm no saved or typed text reaches them unescaped. Not confirmed as a problem yet; a security-audit Full audit would settle it.
- Till Payday 1.1.2 matches: restoring an automatic copy no longer counts as a backup there either (Nov 3, 2026).

## Decisions

Why some things are the way they are, so nobody "fixes" them by mistake:
- **Everything directly inside a sheet has `flex-shrink: 0`** (2.5.2, matching Till Payday 1.1.7). Sheets scroll as flex columns, and without it an item with a `min-height` gets squashed and its contents spill out or get cut off. The calculator sheet is a `.sheet` too. The self-test checks every sheet it opens.
- **Section headings in cards are `h2`, styled by `.sec>h2,.sec>h3`** (2.6.1). The `>` (direct child) is on purpose: the "Automatic copies" `h3` sits deeper inside a `.sec` and keeps its own smaller bold look from `.copies h3`. A heading must never skip a level; the self-test checks this on every screen.
- **A sheet's name comes from its first `<h2>`** (2.6.2): `overlay()` gives it `id="sheet-title"`. Only one sheet is open at a time, so the id stays unique; each sheet's content must start its first heading as a plain `<h2>`. The self-test fails any sheet without a name.
- **Heights use `dvh`, with `vh` as a fallback** (2.5.4). iPhone Safari's `vh` is measured as if its toolbars were hidden, so it's taller than what's visible. `dvh` is the part of the screen you can see.
- **The calculator display is capped and scrolls inside** (2.5.2): `max-height: max(25dvh, 7.5rem)`, with `#cexpr` pushed down by `margin-top: auto` (not `justify-content: flex-end`, which can make the start of a long sum unreachable). Each update scrolls it to the newest part. It's focusable (`tabindex="0"`, "Calculator display") so keyboard users can scroll it. This keeps the keys still while typing a long sum.
- **The self-test's privacy lock allows `connect-src 'self'`; the app's is `'none'`** (2.6.0). The self-test reads its own site's files (`sw.js`, the manifest and the app page) to check them, which `'none'` would block, quietly skipping those checks. Everything else in the two locks is the same, a request to another site is still blocked on both, and the app page itself can't fetch or send anything. Don't "match" them.
- **The About line about the privacy lock shows on the website only** (2.6.0, like Till Payday): the retired Claude copies don't carry the lock. The Claude-copy recipe starts at the `<title>` line, so it leaves the lock out on purpose.
- **Clickjacking is a known GitHub Pages limit:** `frame-ancestors` is ignored in a meta tag and Pages can't set headers, so the lock can't stop another site from framing Study Coach. Same as Till Payday.
- **The Claude copies are retired** (2.5.2), because republishing and checking them on every release cost Claude usage for little gain: the website does more (file backups, offline, Home Screen). `movedCard()` shows only when `WEB` is false (inside a frame), so the website never shows it. Same as Till Payday 1.1.8.

## Non-negotiables

1. **Always free:** no ads, paywalls, accounts, or donation or support buttons.
2. **Private:** no analytics, tracking, cookies or outside requests (no external fonts or CDNs). Progress lives only in the browser, under `ged-study-coach-v1` (plus `ged-study-coach-v1-install`, which only remembers that the Make it an app card was dismissed on that device, `ged-study-coach-v1-copies` for the automatic copies, and `ged-study-coach-v1-damaged` for unreadable progress set aside). Never rename them, and keep every storage key and cache name unique, since other apps share the same address.
3. **Anonymous:** the only public identity is freeforgood-apps and freeforgood-apps+study@proton.me. Never put anyone's real name, personal email, location, workplace, social handles, links to Claude chats or Claude page IDs in any file, commit or post. Commits use the account's private GitHub noreply address as the author, and keep Claude's default committer (Claude, noreply@anthropic.com) so GitHub shows them as Verified. Don't upload Claude's signing key to the account: it isn't ours and may be shared. Leave out the `Claude-Session:` line that tools may suggest adding to commit messages, and check the message (`git log -1 --format=%B`) before pushing. One older commit (Nov 3, 2026) has that line; it was left on purpose, since removing it means rewriting history.
4. **Honest:** keep the GED® trademark notice and "Not affiliated with ACE or GED Testing Service". Practice scores are never GED scores. Keep the AI-assisted content disclosure. Never overstate what has been tested.
5. **Accessible:** WCAG 2.2 AA contrast in light and dark mode, large tap targets, screen-reader labels, Listen (read aloud), keyboard support, a large-text option, and no sideways scrolling at 320px wide.

## How to make changes

- Keep the single-file structure. Never break saved progress: old data must still load after an update.
- Bump APP_VERSION with every change (patch for fixes, minor for new features), written as a plain `"X.Y.Z"`, and the cache name in `sw.js` to match (`study-coach-X.Y.Z`).
- Keep `index.html` and `selftest.html` running identical app code. Add self-test checks for anything new.
- After any script edit in either page, refresh the privacy lock: `python3 /tmp/toolkit/lock.py index.html selftest.html`.
- Run the toolkit's release check: `bash /tmp/toolkit/release-check.sh <repo folder>`. Every line should pass; look at each REVIEW lead (it only scans lines changed since the last tag). On 2.6.0 the two leads were the self-test's `fetch("./")` (reads the app page) and its test request to example.com (meant to be blocked), both on purpose.
- Check the sheets and dialogs too (the release check only scans what's showing on load, and its `--click` presses one element per pass, but every sheet here needs two to four taps). Serve the repo folder (`python3 -m http.server 8770 --bind 127.0.0.1` in the background), then run the checker once per sheet with chained `--click`s (pressed in order before the scan), and read each result against the screen behind it:
  ```
  C='node /tmp/toolkit/a11y-check.mjs'; U=http://127.0.0.1:8770/index.html
  T='--click button[data-act=tab][data-id=practice] --click button[data-act=testintro] --click button[data-act=starttest]'
  $C --click 'button[data-act=tab][data-id=tools]' --click 'button[data-act=calc]' $U   # Calculator
  $C $T --click 'button[data-act=tnav]' $U                                              # Questions list
  $C $T --click 'button[data-act=tnav]' --click 'button[data-act=tsubmitask]' $U        # Finish the test?
  $C $T --click 'button[data-act=texit]' $U                                             # Leave the test?
  $C $T --click 'button[data-act=tpause]' $U                                            # Test paused
  $C --click 'button[data-act=quick5]' --click 'button[data-act=pick][data-i="0"]' --click 'button[data-act=report]' $U   # Report a mistake
  ```
  The sheets are the five `overlay()` dialogs plus the calculator (`#calc`). If a sheet is added or its opening taps change, update this list. A `--click matched nothing` error means the taps no longer lead there. Compare each result with the same screen without the sheet; only what the sheet adds is new.
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
