"""Build js/packs/CODE.js from packs/CODE.py data files.
Each data file defines: CODE, TITLE, UNITS, MODULES [(title,[points])], CARDS [(front,back)],
MCQ [(topic, question, correct, [w1,w2,w3], note)], FIB [(topic, question, [answers], note)]."""
import json, random, sys, runpy, os

def build(path, outdir):
    d = runpy.run_path(path)
    code = d["CODE"]
    r = random.Random(code)
    mcq = []
    for t, q, right, wrong, note in d["MCQ"]:
        assert len(wrong) == 3 and right not in wrong, (code, q)
        opts = [right] + list(wrong); r.shuffle(opts)
        mcq.append([t, q, opts, opts.index(right), note])
    fib = [[t, q, a, n] for t, q, a, n in d["FIB"]]
    nm = len(d["MODULES"])
    for x in mcq + fib:
        assert 0 <= x[0] < nm, (code, x)
        assert x[1].count("____") <= 1
    for x in fib:
        assert "____" in x[1], (code, x)
    course = {"code": code, "title": d["TITLE"], "units": d["UNITS"], "cat": "C", "source": "noun",
              "modules": [[m, p] for m, p in d["MODULES"]], "cards": [list(c) for c in d["CARDS"]], "mcq": mcq, "fib": fib}
    js = ("// %s %s: hand-written notes, flashcards, %d objective questions with explanations and %d fill-in-the-gap, "
          "based on the NOUN course outline. Open to every visitor.\nwindow.COURSES.push(%s);\n"
          % (code, d["TITLE"], len(mcq), len(fib), json.dumps(course, ensure_ascii=False, indent=1)))
    open(os.path.join(outdir, code + ".js"), "w", encoding="utf-8").write(js)
    print(code, len(mcq), "mcq", len(fib), "fib", len(d["CARDS"]), "cards")

for p in sys.argv[2:]:
    build(p, sys.argv[1])
