# Study Coach: progress

New chat? Read this first. It replaces the old Claude Project instructions.

## Where things stand (Nov 3, 2026)

- **Live version:** 2.2.3 at https://freeforgood-apps.github.io/study-coach/
- Passed its self-test on a real iPhone (Nov 3, 2026). Full test history is in README.md under "Tested on".
- Every past version is kept in GitHub's history. To roll back, find the version in CHANGELOG.md and restore that upload.

## Next up

- Nothing planned yet.

## Ground rules

- **Free:** always free. No ads, accounts, donation buttons or paid services.
- **Private:** no analytics, tracking, cookies or outside requests. Progress is saved only in the person's own browser, under `ged-study-coach-v1`.
- **Anonymous:** no real names, personal emails or personal info in the code, commits or this repo. Commits use the account's private GitHub noreply address, and no links back to Claude chats.
- **Honest:** keep the GED® trademark notice and "Not affiliated with ACE or GED Testing Service". Practice scores are never called GED scores. Say that the content is AI-assisted.
- **Accessible:** WCAG 2.2 AA, large tap targets, Listen (read-aloud), large text, and no sideways scrolling at 320px wide.
- It's a one-person volunteer project, so replies to feedback may take time. Feedback goes to freeforgood-apps+study@proton.me.

## How updates work

1. Claude edits the files, runs the self-test in a headless browser, and saves the changes straight to GitHub. GitHub Pages updates the live site within a few minutes.
2. Every new version gets a number in `index.html` (APP_VERSION) and in `sw.js` (CACHE), a CHANGELOG.md entry, a new row in README.md's "Tested on" table, and an update to this file.
3. Afterward, open selftest.html on the iPhone to confirm it passes there too.

## Things to know before editing

- selftest.html carries its own copy of the app, so it has to be rebuilt after every change to index.html.
- Files sit flat at the top of the repo (no folders).
