# Study Coach for the GED® Test

A free study app for the GED® test that works on any phone or computer. No account, no ads, no tracking, nothing locked.

**Open the app:** https://freestudycoach.github.io/study-coach/

**Run the self-test:** https://freestudycoach.github.io/study-coach/selftest.html

## Who it's for

Anyone working toward a GED® credential, especially people fitting study into full lives: between shifts, on the bus, after the kids are asleep. Every lesson is short, every answer is explained, and the whole app is free. If school didn't work for you the first time, that says nothing about what you can do now.

## What's inside

- **19 short lessons** across Math, Reasoning Through Language Arts, Science and Social Studies
- **4 full practice tests** (25 questions each), timed at roughly the pace of the real test, with flagging, pause and resume, and a score breakdown by topic
- **Quick 5:** five questions for when you only have a few minutes
- **Instant-feedback practice:** lesson quizzes, mixed sets and a "missed questions" review that brings back anything you got wrong until you get it right
- **Flashcards** for key terms in every subject
- **Essay practice** for the Extended Response: two prompts, a 45-minute timer, an outline helper and a self-check rubric
- **Formula sheet**, **calculator** and **test-day tips**, including tips for test nerves
- **Your test date:** pick a date and get a suggested weekly pace
- **Progress tracking:** daily goal, study streak, accuracy by subject and test history
- **Backup and restore codes**, so you can move your progress to a new phone

## Add it to your home screen

- **iPhone:** open the link in Safari → tap **Share** → **Add to Home Screen**
- **Android:** open the link in Chrome → tap **⋮** → **Add to Home screen**

On iPhones and Macs, Safari can erase saved data for websites you haven't opened in 7 days. Apps added to the Home Screen are kept, so adding it is the best way to protect your progress. A backup code from the Progress tab works too.

## Tested on

Results are tied to the version and date they were run. When the app changes, these results only describe the version listed.

| Version | Date | Browser and device | Result |
|---|---|---|---|
| 2.2 | Nov 1, 2026 | Chrome (Blink engine) on Linux: full check at phone size, plus layout checks at tablet, laptop and desktop sizes | ✓ Passed, 1,233 automated checks |
| 2.2 | Nov 1, 2026 | Safari engine (WebKit) on a real iPhone | ✓ Passed, 1,243 automated checks |
| 2.1 | Nov 1, 2026 | Chrome (Blink engine) on Linux: full check at phone size, plus layout checks at tablet, laptop and desktop sizes | ✓ Passed, 1,219 automated checks |
| 2.1 | Nov 1, 2026 | Safari engine (WebKit) on a real iPhone | ✓ Passed, 1,219 automated checks |
| 2.1 | Nov 1, 2026 | The published GitHub Pages site, Safari engine on a real iPhone | ✓ Passed, 1,227 automated checks |
| — | — | Firefox | Not tested yet |

**What the automated checks cover:** every lesson and quiz, all four full practice tests (answering, flagging, jumping between questions, pausing, saving and resuming, and finishing when time runs out), score math, missed-question review, Quick 5, flashcards, essay practice, the calculator's answers, read-aloud, keyboard shortcuts, the test-date planner, backup and restore, saving to the device, feedback and mistake reporting, and checks that no screen scrolls sideways or shows broken text. The exact number of checks varies a little between runs because practice questions are shuffled.

Chrome's engine also powers Microsoft Edge, Chromebooks, Android phones, Samsung Internet, Brave and Opera. Safari's engine powers Safari and nearly every other browser on iPhone and iPad.

### Run the self-test yourself

Open **selftest.html** in any browser and tap **Run self-test**. In a few seconds it taps through the whole app and shows a pass/fail report you can copy. It saves to its own separate storage, so it never touches anyone's real progress. If you run it on a browser that isn't listed above, please share the report by email or in this repository's **Issues** tab (see Feedback below).

## Privacy

- No accounts, ads, analytics or tracking cookies.
- Progress, scores and essay drafts are saved only in the visitor's own browser (local storage). The app never sends them anywhere.
- Clearing browser data or tapping **Reset progress** erases them. **Back up** in the Progress tab creates a code you can keep.
- The app loads nothing from other websites. Like any site, GitHub Pages logs visitors' IP addresses for security; see the [GitHub Privacy Statement](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement).

## Accessibility

Designed for phones first, with large tap targets, screen-reader labels, a large-text setting, light and dark themes, and text colors that meet WCAG 2.2 AA contrast. **Listen** reads lessons and questions out loud. On computers, the keyboard works too: A–D to answer, Enter for the next question, ← → to move through a practice test, F to flag. If anything is hard to use, please let us know (see Feedback below).

## Not an official GED® product

Study Coach is an independent study tool. It is not affiliated with, endorsed by or sponsored by the American Council on Education (ACE) or GED Testing Service LLC. Practice scores are for studying only and are not GED® scores. For official information, visit [GED.com](https://ged.com).

GED® and GED Testing Service® are registered trademarks of the American Council on Education. They may not be used or reproduced without the express written permission of ACE or GED Testing Service. The GED® and GED Testing Service® brands are administered by GED Testing Service LLC under license from the American Council on Education. GED Ready® is a trademark of its owner. These names are used only to describe the test this app helps people prepare for.

## About the content

All lessons, questions and essay passages are original and were written with help from AI (Claude, made by Anthropic), then reviewed for accuracy. Mistakes are still possible. If you find one, tap **Report a mistake** after answering a question or in your test results, or see Feedback below. The essay passages, and the people and studies in them, are made up for practice.

## Feedback

Spotted a mistake, got stuck or have an idea? You don't need an account to reach us.

- **Email:** freestudycoach@proton.me (private, no account needed)
- **GitHub:** open an issue in this repository's **Issues** tab (public, needs a free GitHub account)
- **In the app:** after you answer a question, and in your test results, tap **Report a mistake**. It fills in which question you mean. The About screen has a feedback button too.

Study Coach is a one-person volunteer project, so replies can take a while. Every report still helps, even if you don't hear back right away. Please don't include personal details you don't want to share.

## Terms of use

Free to use. Provided "as is," without warranties of any kind. Study Coach is a study aid, not a guarantee of any test result.

## Files

| File | What it does |
|---|---|
| `index.html` | The whole app in one file (about 190 KB, light on data plans) |
| `selftest.html` | The automated self-test. Uses separate storage, so it's safe to share |
| `sw.js` | Lets the app work offline after the first visit. Keep it next to `index.html` |
| `README.md` | This page |

## Updating the app

Upload the new files to this repository and commit. GitHub Pages updates the site within a minute or two, and everyone's saved progress carries over. After an update, run the self-test again and add a new row to **Tested on**.

© 2026 Study Coach
