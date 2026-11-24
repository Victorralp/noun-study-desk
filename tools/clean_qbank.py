"""Clean the auto-generated NOUN Study Desk question banks (qb/p/*.json, qb/*.json).

- drops questions about TMA / assignments / course-guide boilerplate
- drops questions whose answer is a broken fragment ("Integration really", "Recall that barter")
- replaces junk wrong options with real terms from the same course (or same subject prefix)
- never uses a wrong option that is a near-copy of the answer ("Production rule" vs "Production rules")
- makes option capitalisation consistent so the answer doesn't stand out
- adds a second question style: term -> "which statement describes it?"
Usage: python clean_qbank.py <site_dir>
"""
import json, glob, os, re, random, sys, hashlib

SITE = sys.argv[1]
BOILER = re.compile(r"\bTMAs?\b|tutor[- ]marked|marked assignment|course guide|this (unit|module|course)\b|study unit|self[- ]assessment|in-text question|course material|e-?exam|facilitator|study centre", re.I)
BAD_FIRST = set("""recall note simplest particularly same difference integration also hence thus therefore however here this these those
that it they we you our your such other another one two three four five many most more some each every any all both very typical existing so
then now further finally firstly secondly again still only just even what which when where why how if as see let lengthier""".split())
BAD_LAST = set("""a an the of really is are was were be to and or for in on with by that this which as at from simply provides provide
can may will also its their his her c r called known such""".split())

def norm(t):
    t = re.sub(r"\(.*?\)", " ", t.lower())
    t = re.sub(r"[^a-z0-9 ]", " ", t)
    w = [x[:-1] if x.endswith("s") and len(x) > 3 else x for x in t.split()]
    return w

def junk(t):
    t = t.strip()
    if not t or len(t) > 45 or "…" in t or ".." in t or re.search(r"\d{2,}\s*$", t):
        return True
    if BOILER.search(t):
        return True
    w = t.split()
    if len(w) > 5:
        return True
    if w[0].lower() in BAD_FIRST and len(w) > 1:
        return True
    if w[-1].lower().strip(".,") in BAD_LAST:
        return True
    if len(w) == 1 and w[0].lower() in BAD_FIRST | BAD_LAST:
        return True
    if not re.search(r"[A-Za-z]{3}", t):
        return True
    return False

def close(a, b):
    na, nb = norm(a), norm(b)
    if not na or not nb:
        return True
    sa, sb = " ".join(na), " ".join(nb)
    if sa == sb or sa in sb or sb in sa:
        return True
    A, B = set(na), set(nb)
    return len(A & B) / min(len(A), len(B)) >= 0.5

def cap(t):
    return t if not t or t[:2].isupper() else t[0].upper() + t[1:]

def tidy(s):
    s = re.sub(r"\s+\d+\.?\s*$", ".", s.strip())
    s = re.sub(r"\s+", " ", s)
    s = re.sub(r"(\w)- (\w)", r"\1-\2", s)
    return s

def rng(*parts):
    return random.Random(hashlib.md5("|".join(map(str, parts)).encode()).hexdigest())

def pick(answer, stem, keep, pool, r):
    out = []
    for c in keep + pool:
        if len(out) == 3:
            break
        if junk(c) or "_" in c or close(c, answer) or any(close(c, o) for o in out):
            continue
        if c.lower() in stem.lower():
            continue
        out.append(c)
    return out

DEF = re.compile(r"^_+\s+(is|are|refers to|refer to|means|is defined as|are defined as|is called|describes)\s+(.+)$", re.I)

def clean_course(code, c, prefix_pool):
    stats = {"in": len(c["mcq"]) + len(c["fib"]), "dropped": 0, "fixed_opts": 0, "added": 0}
    terms = []
    for q in c["mcq"]:
        terms.append(q[2][q[3]])
    for q in c["fib"]:
        terms.extend(q[2][:1])
    for m in c.get("modules", []):
        terms.extend(m[1])
    pool = []
    seen = set()
    for t in terms:
        k = " ".join(norm(t))
        if k and k not in seen and not junk(t):
            seen.add(k); pool.append(t)
    mcq, defs = [], []
    for i, q in enumerate(c["mcq"]):
        topic, stem, opts, ci, note = q[0], q[1], q[2], q[3], q[4]
        rest = q[5:]
        ans = opts[ci]
        body = re.sub(r'^Complete the statement from the course material:\s*"(.*)"\s*$', r"\1", stem, flags=re.S)
        body = tidy(body)
        if junk(ans) or BOILER.search(body) or BOILER.search(note) or ans.lower() in body.lower() or "______" not in body or len(re.findall(r"_{3,}", body)) > 1 or "…" in body:
            stats["dropped"] += 1; continue
        r = rng(code, i)
        own = [t for t in pool if t != ans]; r.shuffle(own)
        bor = [t for t in prefix_pool if t not in own]; r.shuffle(bor)
        wc = len(ans.split())
        own.sort(key=lambda t: abs(len(t.split()) - wc) > 1)  # stable: similar length first
        old = [o for j, o in enumerate(opts) if j != ci]
        wrong = pick(ans, body, old, own + bor, r)
        if len(wrong) < 3:
            stats["dropped"] += 1; continue
        if wrong != old:
            stats["fixed_opts"] += 1
        new = [cap(ans)] + [cap(w) for w in wrong]
        r.shuffle(new)
        mcq.append([topic, "Fill in the blank: " + body, new, new.index(cap(ans)), note] + rest)
        m = DEF.match(body)
        if m:
            d = tidy(m.group(2)).rstrip(".")
            d = re.sub(r"(\w)- (\w)", r"\1-\2", d)
            if "_" not in d and "…" not in d and 4 <= len(d.split()) <= 30 and not re.match(r"(known|called|defined|also|used|given|said|referred|seen|considered|important|not|one|two|very|more|less|so|thus|then)\b", d, re.I):
                defs.append((topic, ans, cap(d) + ".", note, rest))
    fib = []
    for q in c["fib"]:
        ans = q[2][0] if q[2] else ""
        s = tidy(q[1])
        if junk(ans) or BOILER.search(s) or ans.lower() in s.lower() or len(re.findall(r"_{3,}", s)) != 1:
            stats["dropped"] += 1; continue
        fib.append([q[0], s, q[2]] + q[3:])
    # second style: term -> description
    for k, (topic, ans, d, note, rest) in enumerate(defs):
        others = [x for x in defs if not close(x[1], ans) and x[2] != d]
        if len(others) < 3:
            continue
        r = rng(code, "rev", k); r.shuffle(others)
        opts = [d] + [o[2] for o in others[:3]]
        r.shuffle(opts)
        mcq.append([topic, "Which of these best describes " + cap(ans) + "?", opts, opts.index(d), note] + rest)
        stats["added"] += 1
    c["mcq"], c["fib"] = mcq, fib
    stats["out"] = len(mcq) + len(fib)
    return stats

def main():
    tot = {"in": 0, "out": 0, "dropped": 0, "fixed_opts": 0, "added": 0}
    index = {}
    for f in sorted(glob.glob(os.path.join(SITE, "qb", "p", "*.json"))):
        pack = json.load(open(f, encoding="utf-8"))
        prefix_pool = []
        for c in pack.values():
            prefix_pool += [q[2][q[3]] for q in c["mcq"] if not junk(q[2][q[3]])]
        for code, c in pack.items():
            s = clean_course(code, c, prefix_pool)
            for k in tot: tot[k] += s[k]
            index[code] = len(c["mcq"]) + len(c["fib"])
            single = os.path.join(SITE, "qb", code + ".json")
            if os.path.exists(single):
                json.dump(c, open(single, "w", encoding="utf-8"), ensure_ascii=False, separators=(",", ":"))
        json.dump(pack, open(f, "w", encoding="utf-8"), ensure_ascii=False, separators=(",", ":"))
    old = json.load(open(os.path.join(SITE, "qb", "index.json")))
    new = {k: index.get(k, 0) for k in old if index.get(k, 0) > 0}
    json.dump(new, open(os.path.join(SITE, "qb", "index.json"), "w"), separators=(",", ":"))
    print(tot, "courses:", len(old), "->", len(new))

main()
