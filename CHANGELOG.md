# Study Coach: changelog

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
