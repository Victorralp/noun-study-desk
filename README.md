# NOUN Study Desk

Free study website for every NOUN course: new visitors type a course code, take a test and see the right answers. The 200L IT/CS study-group profiles (Victor, Samuel, Marley) keep their full dashboard (CBT practice, past questions, flashcards, course summaries, progress tracking and exam countdown).

No build step and no backend. Plain HTML, CSS and JavaScript. Progress is stored in each visitor's browser (`localStorage`).

## Files

```
site/
├── index.html             page shell, meta tags, header/footer
├── manifest.webmanifest   makes it installable as an app (PWA)
├── sw.js                  service worker: offline cache
├── css/styles.css         all styles (light + dark theme)
├── icons/icon.svg         app icon
└── js/
    ├── data.js            courses: summaries, flashcards, original questions (window.COURSES)
    ├── past-questions.js  past exam questions per course (window.PQ)
    ├── library.js         every NOUN course code with course material + past question PDF links (window.LIB, loaded on #/library only)
    └── app.js             the app: routing, exams, flashcards, progress
```

## Pages (URLs)

Links use `#` routes, so they work on any static host with no server config:

- `#/` dashboard
- `#/course/COS201/notes`, `#/course/COS201/cards`, `#/course/COS201/practice`
- `#/library`, `#/library/CIT` all NOUN courses (search, prefix filter)
- `#/read/ACC101` read a course's material (puredu.net PDF shown in the page) and take a test built from it; `#/read/ACC101/1` opens part 2 of a multi-part course
- `#/exam`, `#/result` (only while a test is running / just finished)

## Run on your computer

The service worker and install button need a real web server (opening `index.html` by double-click works, but offline mode won't).

```bash
cd site
python -m http.server 8000
```

Then open http://localhost:8000

## Put it online (free)

Pick one:

1. **Netlify Drop** (easiest): go to https://app.netlify.com/drop and drag the `site` folder onto the page. You get a link at once. Sign up to keep it.
2. **GitHub Pages**: make a repository, upload the contents of `site/` to it, then Settings → Pages → Deploy from branch → `main` / root.
3. **Cloudflare Pages**: Workers & Pages → Create → Pages → Upload assets → drop the `site` folder.

Anything you publish is public. Anyone with the link can see it.

## Updating content

- **Add past questions:** edit `js/past-questions.js`. Each course has `mcq` entries `[topicIndex, question, [optionA, optionB, optionC, optionD], correctIndex, note]` and `fib` entries `[topicIndex, question, [accepted answers], note]`. `topicIndex` is the 0-based position of the topic in that course's list in `js/data.js`. Follow the entries already there.
- **Edit summaries or flashcards:** edit `js/data.js`.
- **Refresh the course library:** from the `school` folder run `node tools/crawl.mjs e-courseware tools/courseware.json` and `node tools/crawl.mjs past-questions tools/pastq.json` (takes several minutes, ~45k requests), then `python tools/build_lib.py tools site/js/library.js`.
- **Tests built from course material:** `qb/CODE.json` holds questions pulled from definitions in each course PDF; `qb/index.json` lists which courses have one. To build or refresh them, from the `school` folder run `python tools/gen_qbank.py --workers 10` (needs `pip install pymupdf`; hours for every course; safe to stop and re-run, it skips finished courses). `--only ACC101,BIO101 --force` rebuilds chosen courses. Courses whose PDFs are scanned images get no test and are listed in `qb/skipped.json`.
- **Clean the generated tests:** `python tools/clean_qbank.py .` (run on freshly generated `qb/` files only, not twice on the same files). It removes TMA/boilerplate questions and broken answers, replaces junk wrong options, and adds "which of these best describes…" questions.
- **After any change on a live site:** open `sw.js` and bump `CACHE = "study-desk-v1"` to `v2`, `v3`, ... so returning visitors get the new files instead of the cached ones.

## Notes

- Not affiliated with the National Open University of Nigeria. Check answers against your own course material.
- Clearing browser data erases saved progress.
