# Study Coach: changelog

## 2.6.4 (Nov 10, 2026)
- Security: restoring is stricter about what it lets in. A backup code, a backup file, an automatic copy and your saved progress are now rebuilt from only the fields Study Coach knows, each checked for the right kind of value, instead of being merged in as they are. Anything else in a backup is left out.
- Security: this closes a real gap. A backup code made by hand to cause trouble could put its own text into the page (through the test date, a lesson score or a test score). The privacy lock already stopped any code in it from running, and it could only happen if you restored a code someone else gave you. Backups Study Coach made itself were never a problem.
- A backup from a newer version of Study Coach now gets its own message telling you to update first, instead of being restored with parts missing. A code that's far too big to be a backup gets its own message too.
- A saved test result that doesn't fit its test anymore is made to fit, so it opens instead of breaking the results screen.
- Your progress isn't affected: real backups, old ones included, restore exactly as before.
- Tested: the toolkit's release check passed every line: versions agree, the privacy lock is up to date on both pages, the self-test passed in headless Chrome at phone size, small phone size in dark mode and desktop size (1,957 to 1,964 checks), accessibility clean on Home, and no security leads. The self-test has about 30 new checks: a made-up backup full of unknown fields, `__proto__`, wrong kinds of values, page markup and a damaged test result is cleaned field by field and restored through the Restore screen with none of it reaching the page, and too-big and newer-version codes get their messages and change nothing. It caught all 6 bugs planted on purpose (merging a backup in as it is, no newer-version check, no size cap, no `__proto__` filter, an unchecked test date, and the Welcome flag dropped). The existing checks that a 2.3 backup and a current backup restore exactly still pass. The accessibility checker also ran on the Progress tab, the Restore screen with and without an error showing (clean), and all six sheets (same results as 2.6.3: only the known spoken-name items on PROGRESS.md's list). The newer-version message was looked at in a screenshot at 320px in dark mode. The test-date field now only keeps a real date; that one line has no self-test check, because a browser's date field won't accept anything else to test with. On the live site on a real iPhone (Safari engine, iOS 18.7, opened as `selftest.html?v=2.6.4b`, Nov 10, 2026), the self-test passed in Safari (1,961 checks). A first run minutes after the release showed 1,930 checks: that was the 2.6.3 page, still cached while the site updated, so it doesn't count.

## 2.6.3 (Nov 9, 2026)
- Accessibility: the Listen and Flag buttons on the quiz and test screens, and the Missed / All filter buttons on test results, are now 44px tall instead of 40px, so they're easier to tap. Everything else looks the same.
- Nothing else changed. Your progress isn't affected.
- Tested: the toolkit's release check passed every line: versions agree, the privacy lock is up to date on both pages, the self-test passed in headless Chrome at phone size, small phone size in dark mode and desktop size, accessibility clean on Home, and no security leads. The checker also ran on the test screen, the quiz screen and all six sheets with their opening taps pressed: no buttons under 44px left, and the check caught the Flag button put back to 40px on purpose. Before and after screenshots of the test screen look the same apart from the 4px of height. The self-test ran 1,925 to 1,934 checks per size. On the live site on a real iPhone (Safari engine, iOS 18.7, opened as `selftest.html?v=2.6.3`, Nov 9, 2026), the self-test passed in Safari (1,933 checks). The report doesn't print the version, and this release changed only styles, so its step count matches 2.6.2's.

## 2.6.2 (Nov 9, 2026)
- Accessibility: the pop-up sheets (the test's question list, "Finish the test?", "Leave the test?", "Test paused" and "Report a mistake") now have a name, so VoiceOver announces which sheet opened instead of just "dialog". They look and work the same. The calculator already had one.
- The self-test now checks that every sheet it opens has a name.
- Nothing else changed. Your progress isn't affected.
- Tested: the toolkit's release check passed every line: versions agree, the privacy lock is up to date on both pages, the self-test passed in headless Chrome at phone size, small phone size in dark mode and desktop size (1,926 to 1,931 checks), accessibility clean on Home, and no security leads. The checker also ran on all six sheets (calculator, question list, finish, leave, paused, report) with their opening taps pressed: no dialog-name problems left, and the self-test caught the sheet name removed on purpose (12 issues). Not run inside a frame, since the Claude copies are retired. On the live site on a real iPhone (Safari engine, iOS 18.7, Nov 9, 2026), the self-test passed in Safari (1,933 checks).

## 2.6.1 (Nov 9, 2026)
- Accessibility: section headings on About, Progress, Formula sheet, Test-day tips, every lesson and the practice test intro are now the right level, so screen reader users moving by heading don't hit a skipped level. They look exactly the same.
- The self-test now checks that headings never skip a level on every screen it visits.
- Security: added a SECURITY.md (how to report a problem privately) and a .gitignore, from the shared Baseline kit.
- Nothing else changed. Your progress isn't affected.
- Tested: the toolkit's release check passed every line: versions agree, the privacy lock is up to date on both pages, the self-test passed in headless Chrome at phone size, small phone size in dark mode and desktop size (1,916 to 1,928 checks, about 400 more than before because of the new heading check), the accessibility checker found nothing on Home at 4 sizes in light and dark mode, and there were no security leads since 2.6.0. A screen-by-screen accessibility scan in light and dark mode found no heading-level problems left on the six fixed screens and nothing new anywhere. On those screens, every heading's font, size, weight, color and spacing measured the same before and after at 390px and 320px with standard and large text, and before-and-after screenshots of About and Progress match except for the version number. The self-test caught both heading bugs planted on purpose (Formula sheet headings back at the old level, and a skipped level on About). On the live site, the self-test passed on a real iPhone (Safari engine, iOS 18.7, Nov 9, 2026): 1,913 checks in Safari and 1,915 from the Home Screen.

## 2.6.0 (Nov 9, 2026)
- Security: a privacy lock is now built into the page, the same one Till Payday uses. Your browser blocks Study Coach from sending anything over the internet, or loading anything from other sites, even if it tried. It only runs Study Coach's own code. About → Privacy says so, and the self-test checks the lock in your browser. The page also stops sharing its address with sites you open from its links.
- Accessibility: the "About, privacy and terms" and "Reset progress" links (and the other small text links) are now at least 44px tall, so they're easier to tap. They look the same.
- Accessibility: the calculator's x² key is now read aloud as "x squared" instead of "Square", so it matches what's on the key.
- Nothing else changed. Your progress isn't affected.
- Tested: the toolkit's release check passed every line: versions agree, the privacy lock is up to date on both pages, the self-test passed in headless Chrome at phone size, small phone size in dark mode and desktop size (1,511 to 1,519 checks), and the accessibility checker found nothing on Home at 4 sizes in light and dark mode. The self-test also passed inside a frame like the Claude copy (1,512 checks). With the lock on, the app page reported nothing blocked and no errors at three sizes, and a local copy still opened offline at all three. The accessibility checker found nothing new on About, the calculator or the Progress tab (an older heading-order note on About and Progress is the same as in 2.5.4). The self-test caught all 4 lock problems planted on purpose: an out-of-date fingerprint, the app page allowing connections, no lock on the app page, and the self-test's own lock opened up. Not run on a real iPhone on its own; the 2.6.1 iPhone run covers it, including the privacy lock.

## 2.5.4 (Nov 9, 2026)
- iPhone: the calculator display's height limit, and the sheets' height limit, are now measured from the part of the screen you can see. Safari measures "screen height" as if its toolbars were hidden, so before this they could come out a little taller than meant.
- Self-test fix: on a real iPhone, 2.5.3's self-test reported "The calculator display grew past its cap with a long sum". The check assumed the cap was a quarter of the visible screen, which Safari measures differently. It now measures the display's real cap the way the browser does, and if it ever fails it shows the sizes it saw.
- Tested: the self-test passed in headless Chrome at phone size, small phone size in dark mode and desktop size (1,505 to 1,508 checks), and inside a frame like the Claude copy (1,505 to 1,510 checks). With the cap set taller than a quarter of the screen on purpose (like iPhone Safari), the fixed check passed. With the cap removed on purpose, it failed at all three sizes and showed the sizes it saw. A browser check of every sheet and the calculator at three screen sizes, three text sizes and both themes found nothing squashed or spilling, and the moved note check passed 63 of 63. Headless Chrome can't show Safari's toolbars, so the real test was on an iPhone: on the live site, the self-test passed on a real iPhone (Safari engine, iOS 18.7, 1,515 checks, Nov 9, 2026), including the calculator's long-sum checks and offline use.

## 2.5.3 (Nov 9, 2026)
- About now shows the version as a plain number (like "Version 2.5.3"), the same as Till Payday.
- Version tags (like v2.5.3) are now added on GitHub automatically when a new version goes live, with the same small workflow Till Payday uses. It uses no outside actions and can only add tags.
- Nothing else changed. Your progress isn't affected.
- Tested: the self-test passed in headless Chrome at phone size, small phone size in dark mode and desktop size (1,507 to 1,510 checks), and inside a frame like the Claude copy (1,511 to 1,515 checks), including its check that the offline copy's name matches the version. The release check's versions line now passes. The new workflow was reviewed: no outside actions, no checkout, and it can only add tags. On updating, the old offline copies (named like study-coach-v2.5.2) are cleared and other apps' copies are left alone. The Claude copies stay on 2.5.2, since they're retired.

## 2.5.2 (Nov 9, 2026)
- Fixed: the calculator display could get squashed on small phones, with Large text, or with a long sum. Its top line got cut in half and the start of the sum disappeared. Now it never gets squashed. A long sum shows its newest part, you can scroll up inside the display to see the start, and the keys stay where they are.
- Every sheet (the question list, pause, finish, leave and Report a mistake) now keeps each item at its full size, like Till Payday 1.1.7, so nothing in them can get squashed later.
- Claude copy only: Study Coach inside Claude now says Study Coach has moved to the website. It explains how to bring your progress along with a backup code, with buttons that open the backup code and the website. This is the last update to the Claude copies, so the website is the one to use from now on. Progress saved in the Claude copy stays there and keeps working. The website doesn't show this note.
- Tested: the self-test passed in headless Chrome at phone size, small phone size in dark mode and desktop size (1,506 to 1,512 checks), and inside a frame like the Claude copy at the same sizes (1,507 to 1,512 checks). It caught all 4 bugs planted on purpose. A browser check opened every sheet and the calculator, with and without a long sum, at three screen sizes, three text sizes and both themes (18 runs): before the fix, the calculator display was squashed in 22 cases; after it, nothing was squashed or spilling out, and the display always showed the newest part of the sum. A browser check of the moved note passed 63 of 63: it shows only in the Claude-style copy, first on Home, at a small phone size with Large and bigger text, and its buttons open the backup code and the website. Progress made there (made-up answers) restored exactly on the website. An automated accessibility check (axe-core 4.14 at four sizes in light and dark mode) found no new problems on Home, the moved note or the calculator.

## 2.5.1 (Nov 3, 2026)
- The backup code boxes use 16px text, so iPhone Safari no longer zooms in when you tap them. The self-test checks it.

## 2.5 (Nov 3, 2026)
Saving now has the same safety net as Till Payday:
- **Save as a file:** Back up can save your backup as a small file through the share sheet (Files app, iCloud Drive or an email to yourself), or as a download on computers. Website only. The Claude copies keep the backup code.
- **Restore from a file:** Restore has a Choose a backup file button, next to pasting a code.
- **Automatic copies:** Study Coach keeps a copy of your progress from each of the last 3 days you opened it, on this device. They're listed under Progress → Move your progress. Reset progress leaves them, in case it was a mistake, and Delete these copies removes them.
- **Two taps to replace progress:** restoring a backup or a copy over existing progress asks you to tap again first. A code that doesn't work is caught before that.
- **Damaged progress is set aside:** if the progress saved on this device can't be read, Study Coach keeps it aside instead of saving over it, and Home shows See saved copies and Start fresh.
- **Not saving warning:** if this browser can't save (a private window, or full storage), Home says so and offers Back up now.
- **Two tabs:** the newest save wins, so an older open tab can't save over newer progress.
- Study Coach asks the browser to keep its data, where the browser allows that quietly (not Firefox, which would ask).
- Bringing back an automatic copy doesn't count as a backup, since it's still only on this device, so backup reminders keep counting.
- Saved progress keeps the same shape (data version 2), so nothing needs upgrading.
- The self-test checks all of this (1,349 to 1,363 checks in headless Chrome), and the 2.3 backup code check now confirms the restore really happened. It caught all 10 bugs planted on purpose.

## 2.4.1 (Nov 3, 2026)
- About now has a "Run the self-test" link under Feedback, worded like Till Payday's. In the Claude copies it opens the website's self-test.
- The self-test checks that the link is there and points to the right place.

## 2.4 (Nov 3, 2026)
Keeping progress safe now works and reads the same as in Till Payday:
- **About** has a new "Keep your progress safe" section: how to add Study Coach to the Home Screen on iPhone, iPad and Android, Safari's 7-day note, and "back up now and then". The Claude copies show only the backup tip.
- **Home** has one "Make it an app" card in place of the two old notes. It shows only on the website in a browser tab, after the welcome card, and goes away once Study Coach is installed or you tap Got it. "Show me how" opens the About tips, and on Android and computers it becomes an Install button when the browser offers one.
- **Backup reminders:** a first nudge once you've answered 10 questions, a reminder after a week and 25 answers (or 100 answers), and a firmer one after 30 days. Later waits 3 days, or 1 day when overdue. The Progress tab shows when you last backed up.
- Saved progress has a data version now. Progress and backup codes from 2.3 carry over: answers so far count as not backed up yet, and anyone who dismissed the old Safari note won't see the Make it an app card.
- The self-test checks the upgrade, every reminder rule, both cards and the About tips (1,287 checks in headless Chrome). It caught 7 bugs planted on purpose.

## 2.3 (Nov 3, 2026)
- Android phones and computers can now install Study Coach as an app, with its own icon, opening full screen. iPhones already could, with Add to Home Screen.
- New files: manifest.webmanifest (the install details) and three icons, redrawn sharp from the existing icon.
- The self-test checks the install details and icons on the website. The Claude copies have no such files, so it skips that check there.

## 2.2.3 (Nov 3, 2026)
- Moved to its new home at freeforgood-apps.github.io/study-coach.
- New feedback address: freeforgood-apps+study@proton.me.
- The offline copy now clears only its own saved files, since other apps share the same web address.

## 2.2.2 (Nov 2, 2026)
- The offline copy's name now matches the app version.

## 2.2.1 (Nov 1, 2026)
- Fixed the feedback email address.

## 2.2 (Nov 1, 2026)
- Feedback without an account: an email address, plus a "Report a mistake" button after each answer and in test results that fills in which question you mean.

## 2.1 (Nov 1, 2026)
- First version published on GitHub.
