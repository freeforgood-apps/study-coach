# Study Coach: progress

New chat? Read this first. It replaces the old Claude Project instructions.

## What it is

Study Coach for the GED® Test: a free, mobile-first study web app. It's for adults working toward a GED around jobs and families, mostly on phones, often in short breaks, and sometimes anxious about tests or school. README.md lists the features.

## Where things stand (Nov 3, 2026)

- **Live version:** 2.3 at https://freeforgood-apps.github.io/study-coach/
- 2.3 passed its self-test in headless Chrome (Nov 3, 2026). Still to do: run it on a real iPhone. Full test history is in README.md under "Tested on".
- Every past version is kept in GitHub's history. To roll back, find the version in CHANGELOG.md and restore that upload.

## Where it lives

- **This repo is the latest source.** Claude's workspace is temporary, so anything worth keeping gets saved here. Files sit flat at the top of the repo (no folders).
- `index.html`: the whole app in one self-contained file.
- `selftest.html`: the same app plus an automated self-test, on its own storage (`study-coach-selftest-v1`).
- `sw.js`: offline support (network-first). It only clears caches whose names start with `study-coach-`, because the address is shared with other free apps.
- `README.md`: the public project page.
- `manifest.webmanifest` and `icon-192.png`, `icon-512.png`, `icon-maskable-512.png`: install details and icons, so Android phones and computers can install it as an app. Its id, start and scope all stay inside /study-coach/, since the address is shared.
- **Claude copies:** two Claude pages, named "Study Coach for the GED® Test" and "Study Coach Self-Test". Find them by name in the Claude artifacts list. Their links stay out of this repo. Republish both with every release. To make them from `index.html` and `selftest.html`: start at the `<title>` line, add `<meta name="claude:viewport-fit-sides" content="cover">` right after it, then remove the `</head>` and `<body>` lines and the closing `</body>` and `</html>` lines. The manifest link sits above the `<title>` line on purpose, so the copies leave it out.
- **Old address:** freestudycoach.github.io/study-coach holds only a "we've moved" page that forwards people here and helps anyone with progress saved there bring it along. Never put the app back there.

## Next up

- Nothing planned yet.

## Non-negotiables

1. **Always free:** no ads, paywalls, accounts, or donation or support buttons.
2. **Private:** no analytics, tracking, cookies or outside requests (no external fonts or CDNs). Progress lives only in the browser, under `ged-study-coach-v1`. Never rename it, and keep every storage key and cache name unique, since other apps share the same address.
3. **Anonymous:** the only public identity is freeforgood-apps and freeforgood-apps+study@proton.me. Never put anyone's real name, personal email, location, workplace, social handles, links to Claude chats or Claude page IDs in any file, commit or post. Commits use the account's private GitHub noreply address.
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
