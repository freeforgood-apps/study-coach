# Study Coach: how to update

Read PROGRESS.md first. These are the steps for any change and release, and the things that must not break. They moved here from PROGRESS.md's "How to make changes" (Nov 2026), to match the other apps.

- Keep the single-file structure. Never break saved progress: old data must still load after an update.
- Bump APP_VERSION with every change (patch for fixes, minor for new features), written as a plain `"X.Y.Z"`, and the cache name in `sw.js` to match (`study-coach-X.Y.Z`).
- Keep `index.html` and `selftest.html` running identical app code. Add self-test checks for anything new.
- After any script edit in either page, refresh the privacy lock: `python3 /tmp/toolkit/lock.py index.html selftest.html`.
- Run the toolkit's release check: `bash /tmp/toolkit/release-check.sh <repo folder> selftest.html` (the extra page has the accessibility checker scan the self-test page too; it's been clean since 2.6.11). Every line should pass; look at each REVIEW lead (it only scans lines changed since the last tag). On 2.6.0 the two leads were the self-test's `fetch("./")` (reads the app page) and its test request to example.com (meant to be blocked), both on purpose.
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
  The full-screen views need taps too (2.6.5):
  ```
  L='--click button[data-act=tab][data-id=tools]'
  $C --click 'button[data-act=quick5]' $U                                               # Quiz question
  $C --click 'button[data-act=quick5]' --click 'button[data-act=pick][data-i="0"]' $U   # Quiz feedback
  $C $T $U                                                                              # Practice test
  $C $L --click 'button[data-act=open][data-id=decks]' --click 'button[data-act=deck]' $U    # Flashcards
  $C $L --click 'button[data-act=open][data-id=essays]' --click 'button[data-act=essay]' $U  # Essay, Read step
  $C $L --click 'button[data-act=open][data-id=essays]' --click 'button[data-act=essay]' --click 'button[data-act=epane][data-id=check]' $U   # Essay, Check step
  $C --click 'button[data-act=quick5]' --click 'button[data-act=listen]' $U             # Quiz, Listen on (2.6.6)
  $C $L --click 'button[data-act=open][data-id=decks]' --click 'button[data-act=deck]' --click 'button[data-act=cflip]' $U     # Flashcard, back (2.6.6)
  $C $L --click 'button[data-act=open][data-id=essays]' --click 'button[data-act=essay]' --click 'button[data-act=etimer]' $U  # Essay, timer running (2.6.6)
  X="$T --click button[data-act=texit] --click button[data-act=texitgo]"
  $C $X $U                                                                              # Practice tab, Unfinished test card (2.6.7)
  $C $X --click 'button[data-act=tab][data-id=learn]' $U                                # Home, Unfinished test card (2.6.7)
  $C $X --click 'button[data-act=testintro]' $U                                         # Test in progress (2.6.7)
  $C $T --click 'button[data-act=tnav]' --click 'button[data-act=tsubmitask]' --click 'button[data-act=tsubmit]' $U   # Test results (2.6.7)
  $C --click 'button[data-act=subject][data-id=math]' --click 'button[data-act=lesson][data-id=m2]' $U                    # Ratios lesson (2.6.9)
  ```
  The sheets are the five `overlay()` dialogs plus the calculator (`#calc`). If a sheet is added or its opening taps change, update this list. A `--click matched nothing` error means the taps no longer lead there. Compare each result with the same screen without the sheet; only what the sheet adds is new.
- Before delivering, always:
  1. Run the full self-test (it must pass).
  2. Check light and dark mode and small phone widths.
  3. Scan every file for personal info.
  4. Confirm only the intended lines changed, and give a short summary.
- Update README.md (features, plus a dated "Tested on" row for each version and environment; list untested browsers honestly), add a CHANGELOG.md entry, and update this file.
- Save the changes straight to GitHub and say which files changed. Then run the self-test on the live site on a real iPhone.
- **Right after a release,** Safari can show the previous self-test for up to 10 minutes (GitHub Pages lets browsers reuse a page that long). Open `selftest.html?v=<version>` to get the fresh one.
