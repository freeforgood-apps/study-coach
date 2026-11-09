# Study Coach: changelog

## 2.6.0 (Nov 9, 2026)
- Security: a privacy lock is now built into the page, the same one Till Payday uses. Your browser blocks Study Coach from sending anything over the internet, or loading anything from other sites, even if it tried. It only runs Study Coach's own code. About → Privacy says so, and the self-test checks the lock in your browser. The page also stops sharing its address with sites you open from its links.
- Accessibility: the "About, privacy and terms" and "Reset progress" links (and the other small text links) are now at least 44px tall, so they're easier to tap. They look the same.
- Accessibility: the calculator's x² key is now read aloud as "x squared" instead of "Square", so it matches what's on the key.
- Nothing else changed. Your progress isn't affected.
- Tested: the toolkit's release check passed every line: versions agree, the privacy lock is up to date on both pages, the self-test passed in headless Chrome at phone size, small phone size in dark mode and desktop size (1,511 to 1,519 checks), and the accessibility checker found nothing on Home at 4 sizes in light and dark mode. The self-test also passed inside a frame like the Claude copy (1,512 checks). With the lock on, the app page reported nothing blocked and no errors at three sizes, and a local copy still opened offline at all three. The accessibility checker found nothing new on About, the calculator or the Progress tab (an older heading-order note on About and Progress is the same as in 2.5.4). The self-test caught all 4 lock problems planted on purpose: an out-of-date fingerprint, the app page allowing connections, no lock on the app page, and the self-test's own lock opened up. Not yet run on a real iPhone.

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
