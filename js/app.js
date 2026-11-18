(function(){
"use strict";
var ALL = window.COURSES;
// Papers on a profile's timetable that have no study pack yet: countdown, course material and the test built from it.
[["COS102", "Problem Solving", 3], ["IFT191", "Computer Laboratory I", 1], ["PHY107", "General Practical Physics I", 1], ["MTH102", "Elementary Mathematics II", 2], ["GST102", "Use of English and Communication Skills II", 2],
  ["CIT237", "Programming and Algorithms", 2], ["CIT215", "Introduction to Programming Languages", 3], ["CIT211", "Introduction to Operating Systems", 3], ["CIT217", "Foundations of Sequential Programs", 2], ["CIT191", "Computer Laboratory I", 1],
  ["GST203", "Introduction to Philosophy and Logic", 2], ["MTH281", "Mathematical Methods I", 3], ["PHY102", "Electricity, Magnetism and Modern Physics", 3]].forEach(function(x){
  if (ALL.some(function(c){ return c.code === x[0]; })) return;
  ALL.push({ code: x[0], title: x[1], units: x[2], cat: "C", source: "noun", modules: [], cards: [], mcq: [], fib: [], stub: true });
});
var BY = {}, STUB = {}; ALL.forEach(function(c){ BY[c.code] = c; if (c.stub) STUB[c.code] = c; });

/* ---------- profiles: each student has their own courses, timetable and saved progress ---------- */
var KEY = "noun-study-desk-v1", WHO_KEY = "noun-study-desk-profile";
// 2026_2 e-exam final timetables. They fill only dates the student has not set themselves.
var PROFILES = {
  victor: { name: "Victor", courses: ["COS201", "GST201", "IFT203", "IFT205", "IFT211", "IFT213", "INS207", "PHY108", "CYB111", "IFT299"], clash: "INS207 and CYB111 clash (Thu 19 Nov, 11am): report it to your study centre. GST201 is missing from your personal timetable: Batch A is Sat 21 Nov 11am, Batch B is Sat 5 Dec 8:30am, so confirm your batch. IFT205: personal timetable says 2pm, master PDF Friday column says 3pm, so be there by 2pm. ", timetable: {
    COS201: ["2026-11-18", "11:00"], INS207: ["2026-11-19", "11:00"], CYB111: ["2026-11-19", "11:00"],
    IFT211: ["2026-11-19", "14:00"], IFT205: ["2026-11-20", "14:00"], GST201: ["2026-11-21", "11:00"],
    IFT213: ["2026-11-23", "11:00"], IFT203: ["2026-11-24", "08:30"], PHY108: ["2026-11-26", "11:00"]
  } },
  samuel: { name: "Samuel", courses: ["COS102", "COS201", "IFT211", "IFT205", "IFT203", "IFT191", "PHY108", "PHY107", "GST201", "MTH102", "GST102"], clash: "GST201 and MTH102 clash (Sat 5 Dec, 8:30am): report it to your study centre. ", timetable: {
    COS102: ["2026-11-18", "08:30"], COS201: ["2026-11-18", "11:00"], IFT211: ["2026-11-19", "14:00"],
    IFT205: ["2026-11-20", "14:00"], IFT203: ["2026-11-24", "08:30"], IFT191: ["2026-11-26", "08:30"],
    PHY108: ["2026-11-26", "11:00"], PHY107: ["2026-12-01", "11:00"], GST201: ["2026-12-05", "08:30"],
    MTH102: ["2026-12-05", "08:30"], GST102: ["2026-12-09", "08:30"]
  } },
  marley: { name: "Marley", courses: ["CIT237", "CIT215", "CIT211", "CIT217", "CIT191", "GST203", "GST201", "MTH281", "PHY102"], clash: "", timetable: {
    CIT237: ["2026-11-18", "11:00"], CIT215: ["2026-11-21", "08:30"], CIT211: ["2026-11-24", "14:00"],
    CIT217: ["2026-11-25", "08:30"], CIT191: ["2026-11-26", "08:30"], GST203: ["2026-11-30", "08:30"],
    GST201: ["2026-12-05", "08:30"], MTH281: ["2026-12-08", "11:00"], PHY102: ["2026-12-09", "11:00"]
  } }
};
// A link ending in ?u=samuel opens that profile and remembers it on this device.
var who = (/[?&]u=([a-z]+)/.exec(location.search) || [])[1];
try {
  if (PROFILES[who]){ localStorage.setItem(WHO_KEY, who); history.replaceState(null, "", location.pathname + location.hash); }
  else who = localStorage.getItem(WHO_KEY);
} catch(e){}
if (!PROFILES[who]) who = "victor";
var ME = PROFILES[who], SKEY = KEY + (who === "victor" ? "" : "-" + who);
var COURSES = ME.courses ? ME.courses.map(function(k){ return BY[k]; }) : ALL.filter(function(c){ return !c.stub; });
var PQ = window.PQ || {};
Object.keys(PQ).forEach(function(k){ var c = BY[k], p = PQ[k]; if (!c) return;
  p.mcq.forEach(function(m){ c.mcq.push([m[0], m[1], m[2], m[3], m[4], 1]); });
  p.fib.forEach(function(f){ c.fib.push([f[0], f[1], f[2], f[3], 1]); });
  p.cards.forEach(function(x){ c.cards.push([x[0], x[1] + "  (past question)"]); });
});
function pqCount(c){ return c.mcq.filter(function(m){ return m[5]; }).length + c.fib.filter(function(f){ return f[4]; }).length; }
var CBT_CODES = COURSES.filter(function(c){ return c.code !== "IFT299" && !c.stub; }).map(function(c){ return c.code; });

/* ---------- storage (per-browser, per-profile, guarded) ---------- */
function load(){ try { return JSON.parse(localStorage.getItem(SKEY)) || null; } catch(e){ return null; } }
function save(){ try { localStorage.setItem(SKEY, JSON.stringify(S)); } catch(e){} }
var S = Object.assign({ attempts: [], known: {}, dates: {}, theme: null }, load() || {});
var TIMETABLE = ME.timetable;
Object.keys(TIMETABLE).forEach(function(k){ if (!S.dates[k] || !S.dates[k].date) S.dates[k] = { date: TIMETABLE[k][0], time: TIMETABLE[k][1] }; });
var GUIDES = window.GUIDES || {};
var EXP = window.EXPLAIN || {};

/* ---------- helpers ---------- */
var $ = function(s, r){ return (r || document).querySelector(s); };
function esc(s){ return String(s == null ? "" : s).replace(/[&<>"']/g, function(c){ return {"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[c]; }); }
function shuffle(a){ a = a.slice(); for (var i = a.length - 1; i > 0; i--){ var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
function norm(s){ return String(s || "").toLowerCase().replace(/\s+/g, " ").trim(); }
function fibCorrect(given, acc){
  var n = norm(given); if (!n) return false;
  var n2 = n.replace(/\.$/, "");
  return acc.some(function(a){ a = norm(a); return a === n || a === n2; });
}
function grade(p){ return p >= 70 ? "A" : p >= 60 ? "B" : p >= 50 ? "C" : p >= 45 ? "D" : p >= 40 ? "E" : "F"; }
function pct(a, b){ return b ? Math.round(a / b * 100) : 0; }
function fmtDate(ts){ return new Date(ts).toLocaleDateString(undefined, { day: "numeric", month: "short", year: "numeric" }); }
function knownList(code){ return S.known[code] || []; }
function bestScore(code){
  var b = null;
  S.attempts.forEach(function(a){ if (a.codes.length === 1 && a.codes[0] === code && (b === null || a.pct > b)) b = a.pct; });
  return b;
}
function examTs(code){
  var d = S.dates[code]; if (!d || !d.date) return null;
  var t = new Date(d.date + "T" + (d.time || "08:30") + ":00").getTime();
  return isNaN(t) ? null : t;
}
function nextExam(){
  var now = Date.now(), best = null;
  COURSES.forEach(function(c){ var t = examTs(c.code); if (t && t > now && (!best || t < best.t)) best = { code: c.code, t: t }; });
  return best;
}

/* ---------- view state ---------- */
var view = { name: "home" };
var X = null;          // active exam
var timerId = null;
var fc = null;         // flashcard state

function go(v){ view = v; if (view.name !== "exam") stopTimer(); render(true); settle(); }
function settle(){
  var el = view.name === "home" && view.sec ? document.getElementById(view.sec) : null;
  if (el) el.scrollIntoView({ block: "start" }); else window.scrollTo(0, 0);
}

/* ---------- URL routing (#/ , #/course/IFT205/cards, #/exam, #/result) ---------- */
function hashFor(v){
  if (v.name === "course") return "#/course/" + v.code + "/" + (v.tab || defaultTab(v.code));
  if (v.name === "exam" || v.name === "result") return "#/" + v.name;
  if (v.name === "library") return "#/library" + (v.q ? "/" + encodeURIComponent(v.q) : "");
  if (v.name === "read") return "#/read/" + v.code + (v.file ? "/" + v.file : "");
  return v.name === "home" && v.sec ? "#/" + v.sec : "#/";
}
function defaultTab(code){ return GUIDES[code] ? "guide" : "notes"; }
function viewFromHash(h){
  var p = (h || location.hash || "").replace(/^#\/?/, "").split("/");
  if (p[0] === "course" && BY[p[1]]) return { name: "course", code: p[1], tab: ["guide", "notes", "cards", "practice"].indexOf(p[2]) >= 0 ? p[2] : defaultTab(p[1]) };
  if (p[0] === "library") return { name: "library", q: p[1] ? decodeURIComponent(p[1]) : "" };
  if (p[0] === "read" && /^[A-Z]{2,4}\d{3}[A-Z]?$/.test(p[1] || "")) return { name: "read", code: p[1], file: +p[2] || 0 };
  if (p[0] === "exam" && X && !X.done) return { name: "exam" };
  if (p[0] === "result" && X && X.done) return { name: "result", filter: "all" };
  if (p[0] === "timetable") return { name: "home", sec: "timetable" };
  return { name: "home" };
}
function syncHash(push){
  var h = hashFor(view);
  if (location.hash === h) return;
  try { history[push ? "pushState" : "replaceState"](null, "", h); } catch(e){ location.hash = h; }
}
window.addEventListener("popstate", function(){
  var v = viewFromHash();
  if (view.name === "exam" && X && !X.done && v.name !== "exam"){ syncHash(true); confirmQuit(); return; }
  if (v.name === "course" && view.name === "course" && v.code !== view.code) fc = null;
  view = v; if (view.name !== "exam") stopTimer(); render(); settle();
});

/* ---------- theme ---------- */
function applyTheme(){ if (S.theme) document.documentElement.setAttribute("data-theme", S.theme); else document.documentElement.removeAttribute("data-theme"); }
applyTheme();
$("#themeBtn").addEventListener("click", function(){
  var dark = S.theme ? S.theme === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
  S.theme = dark ? "light" : "dark"; save(); applyTheme();
  toast(S.theme === "dark" ? "Dark theme on" : "Light theme on");
});
$("#homeBtn").addEventListener("click", function(){
  if (view.name === "exam") return confirmQuit();
  go({ name: "home" });
});
$all("#nav a").forEach(function(a){ a.addEventListener("click", function(e){
  e.preventDefault();
  if (view.name === "exam") return confirmQuit();
  if (a.dataset.nav !== "library") fc = null;
  go(viewFromHash(a.getAttribute("href")));
}); });

/* ---------- modal ---------- */
var closeModal = null, toastId = null;
function toast(msg){
  var el = $("#toast"); if (!el) return;
  el.textContent = msg; el.classList.add("show");
  clearTimeout(toastId); toastId = setTimeout(function(){ el.classList.remove("show"); }, 2200);
}
// Esc or a click on the backdrop closes without running an action. Tab stays inside the dialog.
function modal(title, body, buttons){
  if (closeModal) closeModal();
  var root = $("#modalRoot"), prev = document.activeElement;
  root.innerHTML = '<div class="modal-bg"><div class="modal" role="dialog" aria-modal="true" aria-labelledby="modalTitle"><h3 id="modalTitle">' + esc(title) + '</h3><p>' + body + '</p><div class="row" style="justify-content:flex-end"></div></div></div>';
  var row = $(".modal .row", root);
  function onKey(e){
    if (e.key === "Escape"){ e.preventDefault(); close(); }
    else if (e.key === "Tab"){
      var bs = row.querySelectorAll("button"), at = Math.max(0, Array.prototype.indexOf.call(bs, document.activeElement));
      e.preventDefault(); bs[(at + (e.shiftKey ? -1 : 1) + bs.length) % bs.length].focus();
    }
  }
  function close(fn){
    document.removeEventListener("keydown", onKey, true);
    root.innerHTML = ""; closeModal = null;
    if (fn) fn(); else if (prev && document.contains(prev)) prev.focus();
  }
  closeModal = close;
  document.addEventListener("keydown", onKey, true);
  $(".modal-bg", root).onclick = function(e){ if (e.target === this) close(); };
  buttons.forEach(function(b){
    var el = document.createElement("button");
    el.className = "btn " + (b.cls || ""); el.textContent = b.label;
    el.onclick = function(){ close(b.fn); };
    row.appendChild(el);
  });
  var last = row.lastChild; if (last) last.focus();
}

/* ---------- top chip ---------- */
function renderChip(){
  var n = nextExam(), el = $("#topChip");
  if (!n){ el.innerHTML = ""; return; }
  var days = Math.ceil((n.t - Date.now()) / 86400000);
  el.innerHTML = '<span class="chip ' + (days <= 7 ? "hot" : "") + '"><span class="mono">' + esc(n.code) + '</span> in ' + days + ' day' + (days === 1 ? "" : "s") + '</span>';
}

/* ---------- render ---------- */
var TITLES = { home: "Dashboard", exam: "Exam in progress", result: "Results", library: "All NOUN courses", read: "Read course material" };
function render(push){
  renderChip();
  syncHash(push);
  document.title = (view.name === "course" ? view.code + " · " + BY[view.code].title : view.name === "read" ? view.code + " · " + TITLES.read : TITLES[view.name]) + " · Study Desk (unofficial)";
  document.body.classList.toggle("exam-mode", view.name === "exam");
  var here = view.name === "library" || view.name === "read" ? "library" : view.name === "home" ? view.sec || "home" : "";
  $all("#nav a").forEach(function(a){ if (a.dataset.nav === here) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current"); });
  var app = $("#app");
  if (view.name === "home") app.innerHTML = homeHTML();
  else if (view.name === "course") app.innerHTML = courseHTML();
  else if (view.name === "exam") app.innerHTML = examHTML();
  else if (view.name === "result") app.innerHTML = resultHTML();
  else if (view.name === "library") app.innerHTML = libraryHTML();
  else if (view.name === "read") app.innerHTML = readHTML();
  bind();
}

/* ===== HOME ===== */
function homeHTML(){
  var att = S.attempts, avg = att.length ? Math.round(att.reduce(function(s, a){ return s + a.pct; }, 0) / att.length) : null;
  var totalCards = 0, knownCards = 0;
  COURSES.forEach(function(c){ totalCards += c.cards.length; knownCards += knownList(c.code).length; });
  var n = nextExam(), now = Date.now();

  var h = '<div class="who"><label for="whoSel">Studying as</label><select id="whoSel">' + Object.keys(PROFILES).map(function(k){ return '<option value="' + k + '"' + (k === who ? " selected" : "") + '>' + esc(PROFILES[k].name) + '</option>'; }).join("") + '</select></div>';
  h += '<div class="hero">';
  h += '<div class="card next"><div class="eyebrow">Next paper</div>';
  if (n){
    var c = BY[n.code], diff = n.t - Date.now();
    var d = Math.floor(diff / 86400000), hr = Math.floor(diff % 86400000 / 3600000), mi = Math.floor(diff % 3600000 / 60000);
    h += '<h1 style="margin-top:4px"><span class="mono">' + esc(c.code) + '</span> · ' + esc(c.title) + '</h1>';
    h += '<div class="muted">' + new Date(n.t).toLocaleString(undefined, { weekday: "long", day: "numeric", month: "long", hour: "2-digit", minute: "2-digit" }) + '</div>';
    h += '<div class="count" id="countBox"><div><b>' + d + '</b><span>days</span></div><div><b>' + hr + '</b><span>hours</span></div><div><b>' + mi + '</b><span>mins</span></div></div>';
    if (c.stub) h += '<div class="row" style="margin-top:14px"><button class="btn primary" data-course="' + c.code + '">Open ' + esc(c.code) + '</button></div>';
    else h += '<div class="row" style="margin-top:14px"><button class="btn primary" data-course="' + c.code + '" data-tab="practice">Practise ' + esc(c.code) + '</button><button class="btn" data-course="' + c.code + '" data-tab="notes">Read summary</button></div>';
  } else {
    h += '<h1 style="margin-top:4px">Set your exam dates</h1><p class="muted">Copy each paper\'s date and time from the NOUN e-exam timetable into the table below. The countdown and the reminder chip at the top will follow.</p><a class="btn" href="#/timetable">Go to timetable</a>';
  }
  h += '</div>';
  h += '<div class="card"><h3>Mock CBT</h3><p class="muted" style="margin:4px 0 12px;font-size:14px">Timed, objective + fill-in-the-gap, like the e-exam.</p>';
  h += '<div class="grid" style="grid-template-columns:1fr 1fr;gap:10px">';
  h += '<label class="f" style="grid-column:1/-1">Course<select id="mkCourse"><option value="ALL">All CBT courses (mixed)</option>' + CBT_CODES.map(function(k){ return '<option value="' + k + '">' + k + ' · ' + esc(BY[k].title) + '</option>'; }).join("") + '</select></label>';
  h += '<label class="f">Questions<select id="mkCount"><option>20</option><option selected>50</option><option>100</option><option value="0">All</option></select></label>';
  h += '<label class="f">Minutes<input type="number" id="mkMin" min="1" max="180" value="38"></label>';
  h += '</div><button class="btn primary block" id="mkStart" style="margin-top:12px">Start mock exam</button></div>';
  h += '</div>';

  h += '<section><div class="grid g-stats">';
  h += '<div class="card stat"><b>' + att.length + '</b><span>tests taken</span></div>';
  h += '<div class="card stat"><b>' + (avg === null ? "–" : avg + "%") + '</b><span>average score</span></div>';
  h += '<div class="card stat"><b>' + knownCards + '/' + totalCards + '</b><span>flashcards known</span></div>';
  h += '<div class="card stat"><b>' + COURSES.filter(function(c){ return examTs(c.code) > now; }).length + '</b><span>papers left</span></div>';
  h += '</div></section>';

  h += '<section><h2>Your courses</h2><div class="grid g-courses">';
  // Next paper first, written papers last.
  var rank = function(c){ var t = examTs(c.code); return !t ? 8e15 : t > now ? t : 9e15 + t; };
  COURSES.slice().sort(function(a, b){ return rank(a) - rank(b); }).forEach(function(c){
    var b = bestScore(c.code), k = knownList(c.code).length, t = examTs(c.code);
    var when = !t ? "" : t > now ? "Exam " + new Date(t).toLocaleDateString(undefined, { weekday: "short", day: "numeric", month: "short" }) + " · " : "Paper written · ";
    h += '<div class="card course' + (t && t <= now ? " past" : "") + '"><div class="row" style="justify-content:space-between"><span class="code">' + c.code + '</span><span class="row" style="gap:4px"><span class="tag">' + c.units + ' unit' + (c.units === 1 ? "" : "s") + '</span><span class="tag ' + (c.cat === "E" ? "e" : "") + '">' + (c.cat === "E" ? "Elective" : "Compulsory") + '</span></span></div>';
    h += '<div class="title"><button class="link-btn" data-course="' + c.code + '" data-tab="' + defaultTab(c.code) + '">' + esc(c.title) + '</button></div>';
    if (c.stub){
      var sm = MATERIAL[c.code];
      h += '<div style="font-size:13px" class="muted">' + when + 'No study pack yet. Read the course material and test on it.</div><div class="foot">';
      if (sm) h += '<button class="btn small" data-read="' + sm.code + '">Material</button><button class="btn small" data-lib="' + sm.code + '">Past papers</button><button class="btn small primary" data-test="' + sm.code + '">Test</button>';
      h += '</div></div>';
      return;
    }
    h += '<div style="font-size:13px" class="muted">' + when + 'Best test: ' + (b === null ? "not yet" : b + "%") + ' · Cards: ' + k + '/' + c.cards.length + '</div>';
    h += '<div class="bar"><i style="width:' + (b || 0) + '%"></i></div>';
    h += '<div class="foot"><button class="btn small" data-course="' + c.code + '" data-tab="notes">Summary</button><button class="btn small" data-course="' + c.code + '" data-tab="cards">Flashcards</button>';
    if (MATERIAL[c.code]) h += '<button class="btn small" data-read="' + MATERIAL[c.code].code + '">Material</button>';
    if (c.code !== "IFT299") h += '<button class="btn small primary" data-course="' + c.code + '" data-tab="practice">Test</button>';
    h += '</div></div>';
  });
  h += '</div></section>';

  h += '<section><h2>Weak topics</h2>' + weakHTML() + '</section>';

  h += '<section id="timetable"><h2>Exam timetable</h2><div class="card"><p class="muted" style="margin-top:0;font-size:14px">Pre-filled from the 2026_2 e-exam final timetable. ' + esc(ME.clash) + 'Edit any date if the final timetable changes. Saved in this browser only.</p><div class="scroll-x"><table class="tt"><thead><tr><th>Course</th><th>Date</th><th>Time</th><th>Countdown</th></tr></thead><tbody>';
  COURSES.slice().sort(function(a, b){ return (examTs(a.code) || 9e15) - (examTs(b.code) || 9e15); }).forEach(function(c){
    var d = S.dates[c.code] || {}, t = examTs(c.code), cd = "–", cc = "";
    if (t){ var dd = Math.ceil((t - Date.now()) / 86400000); cd = dd < 0 ? "done" : dd === 0 ? "today" : dd + " d"; cc = dd < 0 ? " done" : dd <= 7 ? " hot" : ""; }
    h += '<tr><td><span class="mono">' + c.code + '</span><div class="muted" style="font-size:12px">' + esc(c.title) + '</div></td>';
    h += '<td><input type="date" data-date="' + c.code + '" value="' + esc(d.date || "") + '" aria-label="' + c.code + ' exam date"></td>';
    h += '<td><input type="time" data-time="' + c.code + '" value="' + esc(d.time || "08:30") + '" aria-label="' + c.code + ' exam time"></td>';
    h += '<td><span class="chip mono' + cc + '">' + cd + '</span></td></tr>';
  });
  h += '</tbody></table></div></div></section>';

  h += '<section><h2>Recent tests</h2>' + historyHTML(S.attempts.slice(-8).reverse()) + '</section>';

  h += '<section><details class="card small"><summary><b>About the questions</b></summary><p class="muted" style="margin-bottom:0"><b>Real past questions:</b> IFT205, COS201, INS207 and GST201 include ' + Object.keys(PQ).reduce(function(t, k){ return t + PQ[k].mcq.length + PQ[k].fib.length; }, 0) + ' questions from old NOUN e-exam papers, shared by students on third-party sites. They come from the old course codes (CIT101 and CIT104 for IFT205, CIT215 and CIT237 for COS201, CIT208 for INS207, and GST201). Each one has a PAST QUESTION tag. Answer keys were checked against the NOUN course material, and wrong keys were fixed or removed. Where a paper gave only the answer, the other options were rebuilt, and the item says so. <b>Everything else</b> is original practice written from the official NOUN course materials (IFT203, IFT211, CYB111, GST201) or the NUC CCMAS topics. No objective past questions were found online for IFT203, IFT211, IFT213, PHY108 or CYB111. Fill-in-the-gap answers are marked by spelling, as in the real e-exam, but capital letters are ignored.</p></details></section>';
  return h;
}

function weakHTML(){
  var agg = {};
  S.attempts.forEach(function(a){
    Object.keys(a.mods || {}).forEach(function(k){
      var v = a.mods[k]; agg[k] = agg[k] || [0, 0]; agg[k][0] += v[0]; agg[k][1] += v[1];
    });
  });
  var list = Object.keys(agg).filter(function(k){ return agg[k][1] >= 3; }).map(function(k){
    var p = k.split("|"); return { code: p[0], mod: +p[1], right: agg[k][0], total: agg[k][1], p: pct(agg[k][0], agg[k][1]) };
  }).filter(function(x){ return x.p < 70; }).sort(function(a, b){ return a.p - b.p; }).slice(0, 6);
  if (!list.length) return '<div class="card empty">' + (S.attempts.length ? "No weak topics right now. Keep testing." : "Take a test and your weakest modules will show here.") + '</div>';
  return '<div class="card"><table><thead><tr><th>Topic</th><th>Score</th><th></th></tr></thead><tbody>' + list.map(function(x){
    var c = BY[x.code], m = c ? c.modules[x.mod] : null;
    return '<tr><td><span class="mono">' + x.code + '</span> · ' + esc(m ? m[0] : "Module " + (x.mod + 1)) + '</td><td class="mono" style="color:var(--bad)">' + x.right + '/' + x.total + ' (' + x.p + '%)</td><td style="text-align:right">' + reviseBtn(x.code, x.mod) + '</td></tr>';
  }).join("") + '</tbody></table></div>';
}

function historyHTML(list){
  if (!list.length) return '<div class="card empty">No tests yet.</div>';
  return '<div class="card scroll-x"><table><thead><tr><th>Date</th><th>Course</th><th>Score</th><th>Grade</th></tr></thead><tbody>' + list.map(function(a){
    var g = grade(a.pct);
    return '<tr><td>' + fmtDate(a.date) + '</td><td class="mono">' + (a.codes.length > 1 ? "Mixed (" + a.codes.length + ")" : a.codes[0]) + '</td><td class="mono">' + a.correct + '/' + a.total + ' · ' + a.pct + '%</td><td class="mono" style="color:' + (g === "F" ? "var(--bad)" : "var(--good)") + '">' + g + '</td></tr>';
  }).join("") + '</tbody></table></div>';
}

/* ===== COURSE ===== */
function courseHTML(){
  var c = STUB[view.code] || BY[view.code], tab = view.tab || defaultTab(c.code);
  var h = '<button class="btn small" id="backHome">← Dashboard</button>';
  if (c.stub){
    h += '<div style="margin-top:14px"><div class="row"><span class="mono" style="color:var(--accent);font-weight:600">' + c.code + '</span><span class="tag">' + c.units + ' unit' + (c.units === 1 ? "" : "s") + '</span></div><h1 style="margin-top:6px">' + esc(c.title) + '</h1></div>';
    return h + '<div class="notice" style="margin:14px 0">No study pack for ' + c.code + ' yet. Use the course material below: read it, then take the test built from it.</div>' + materialHTML(c.code);
  }
  h += '<div style="margin-top:14px"><div class="row"><span class="mono" style="color:var(--accent);font-weight:600">' + c.code + '</span><span class="tag">' + c.units + ' units</span>' + (c.cat === "E" ? '<span class="tag e">Elective</span>' : "") + '<span class="tag src">' + (c.source === "noun" ? "From NOUN course material" : "From NUC CCMAS outline") + '</span></div><h1 style="margin-top:6px">' + esc(c.title) + '</h1></div>';
  h += '<div class="tabs" role="tablist">';
  [["guide", "Study guide"], ["notes", "Summary"], ["cards", "Flashcards"], ["practice", "Practice test"]].filter(function(t){ return t[0] !== "guide" || GUIDES[c.code]; }).forEach(function(t){
    if (t[0] === "practice" && c.code === "IFT299") t[1] = "Quiz";
    h += '<button role="tab" aria-selected="' + (tab === t[0]) + '" data-ctab="' + t[0] + '" class="' + (tab === t[0] ? "on" : "") + '">' + t[1] + '</button>';
  });
  h += '</div>';
  if (c.note) h += '<div class="notice" style="margin-bottom:14px">' + esc(c.note) + '</div>';
  h += materialHTML(c.code);
  if (tab === "guide" && GUIDES[c.code]) return h + guideHTML(c);
  if (tab === "notes") h += notesHTML(c);
  else if (tab === "cards") h += cardsHTML(c);
  else h += practiceHTML(c);
  return h;
}

// Course material on puredu.net for each course. Most new IFT/COS/INS/PHY codes are not there yet,
// so they point at the old NOUN course that covers the same topics.
var MATERIAL = {
  GST201: { code: "GST201" }, IFT203: { code: "IFT203" }, CYB111: { code: "CYB111" },
  COS201: { code: "CIT215", title: "Introduction to Programming Language" },
  IFT211: { code: "CIT344", title: "Introduction to Computer Design" },
  IFT213: { code: "CIT463", title: "Introduction to Multimedia Technology" },
  INS207: { code: "CIT208", title: "Information Systems" },
  PHY108: { code: "PHY192", title: "Introductory Physics Practical II" },
  IFT191: { code: "IFT191" }, MTH102: { code: "MTH102" }, GST102: { code: "GST102" },
  COS102: { code: "CIT108", title: "Problem-Solving Algorithm" },
  PHY107: { code: "PHY191", title: "Introductory Practical Physics I" },
  CIT237: { code: "CIT237" }, CIT215: { code: "CIT215" }, CIT211: { code: "CIT211" }, CIT217: { code: "CIT217" },
  CIT191: { code: "CIT191" }, GST203: { code: "GST203" }, PHY102: { code: "PHY102" }
};
function materialHTML(code){
  var m = MATERIAL[code];
  if (!m) return '<div class="notice" style="margin-bottom:14px">puredu.net has no course material for ' + esc(code) + (code === "IFT299" ? " (SIWES is industrial training)." : ". Check the NOUN student portal.") + '</div>';
  var h = '<div class="card read-bar" style="margin-bottom:14px"><div><b>Course material</b><div class="muted" style="font-size:13px">' +
    (m.code === code ? "The official NOUN material for this course." : "No " + esc(code) + " material yet. This is the old course " + esc(m.code) + " · " + esc(m.title) + ", which covers the same topics.") + '</div></div>';
  h += '<div class="row"><button class="btn small primary" data-read="' + m.code + '">Read ' + esc(m.code) + '</button>';
  // Own courses already have a practice tab; the extra test is for the related old course.
  if (m.code !== code || STUB[code]) h += '<button class="btn small" data-test="' + m.code + '">Test on ' + esc(m.code) + '</button>';
  h += '<button class="btn small" data-lib="' + m.code + '">Past papers</button></div></div>';
  return h;
}

/* ---------- study guide: long-form notes in a small markdown subset ----------
   # / ## / ### headings, - and 1. lists, | tables |, ~~~ code ~~~, > tip, **bold**, *italic* */
function mdInline(t){
  return esc(t).replace(/\*\*(.+?)\*\*/g, "<b>$1</b>").replace(/\*(\S(?:.*?\S)?)\*/g, "<i>$1</i>");
}
function md(src){
  var L = src.replace(/\r/g, "").split("\n"), out = [], i = 0, toc = [];
  while (i < L.length){
    var l = L[i], m;
    if (!l.trim()){ i++; continue; }
    if (/^~~~/.test(l)){ var code = []; i++; while (i < L.length && !/^~~~/.test(L[i])) code.push(L[i++]); i++; out.push('<pre class="g-code">' + esc(code.join("\n")) + '</pre>'); continue; }
    if ((m = /^(#{1,3}) (.*)/.exec(l))){
      var lv = m[1].length + 1, id = "g" + out.length;
      if (m[1].length <= 2) toc.push([id, m[2]]);
      out.push('<h' + lv + ' id="' + id + '">' + mdInline(m[2]) + '</h' + lv + '>'); i++; continue;
    }
    if (/^> /.test(l)){ var q = []; while (i < L.length && /^> /.test(L[i])) q.push(L[i++].slice(2)); out.push('<div class="g-tip">' + mdInline(q.join(" ")) + '</div>'); continue; }
    if (/^\|/.test(l)){
      var rows = []; while (i < L.length && /^\|/.test(L[i])) rows.push(L[i++]);
      rows = rows.filter(function(r){ return !/^\|[\s:|-]+\|$/.test(r); }).map(function(r){ return r.replace(/^\||\|$/g, "").split("|").map(function(x){ return mdInline(x.trim()); }); });
      out.push('<div class="scroll-x"><table class="g-table"><thead><tr><th>' + rows[0].join("</th><th>") + '</th></tr></thead><tbody>' + rows.slice(1).map(function(r){ return '<tr><td>' + r.join("</td><td>") + '</td></tr>'; }).join("") + '</tbody></table></div>');
      continue;
    }
    if (/^(- |\d+\. )/.test(l)){
      var ol = /^\d/.test(l), items = [];
      while (i < L.length && /^(- |\d+\. |  )/.test(L[i])){
        if (/^  /.test(L[i]) && items.length) items[items.length - 1] += " " + L[i].trim(); else items.push(L[i].replace(/^(- |\d+\. )/, ""));
        i++;
      }
      out.push((ol ? "<ol>" : "<ul>") + items.map(function(x){ return "<li>" + mdInline(x) + "</li>"; }).join("") + (ol ? "</ol>" : "</ul>")); continue;
    }
    var para = []; while (i < L.length && L[i].trim() && !/^(#|> |\||- |\d+\. |~~~)/.test(L[i])) para.push(L[i++]);
    out.push("<p>" + mdInline(para.join(" ")) + "</p>");
  }
  return { html: out.join(""), toc: toc };
}
function guideHTML(c){
  var g = md(GUIDES[c.code]), t = examTs(c.code);
  var h = '<div class="guide-wrap"><nav class="g-toc card" aria-label="Contents"><b>Contents</b><ol>' + g.toc.map(function(x){ return '<li><a href="#' + x[0] + '" data-goto="' + x[0] + '">' + mdInline(x[1]) + '</a></li>'; }).join("") + '</ol>';
  if (t) h += '<p class="muted" style="font-size:13px;margin:10px 0 0">Exam: ' + new Date(t).toLocaleString(undefined, { weekday: "short", day: "numeric", month: "short", hour: "numeric", minute: "2-digit" }) + '</p>';
  h += '</nav><article class="guide card">' + g.html + '<div class="row" style="margin-top:24px"><button class="btn" data-ctab="cards">Flashcards</button><button class="btn primary" data-ctab="practice">Test yourself</button></div></article></div>';
  return h;
}

function paras(s){
  return s.split("\n").map(function(l){ return l.trim(); }).filter(Boolean).map(function(l){
    return l.charAt(0) === "•" ? '<li>' + esc(l.slice(1).trim()) + '</li>' : '<p>' + esc(l) + '</p>';
  }).join("").replace(/(<li>[\s\S]*?<\/li>)(?!<li>)/g, "$1</ul>").replace(/(^|<\/p>|<\/ul>)<li>/g, "$1<ul><li>");
}
function officialHTML(c){
  var parts = (window.OFFICIAL || {})[c.code];
  if (!parts) return "";
  return parts.map(function(p){
    var exact = p.src.indexOf(c.code) === 0;
    var h = '<div class="card off-src"><div class="qnum">FROM THE NOUN COURSE TEXT</div><h3>' + esc(p.src) + '</h3><p class="muted" style="font-size:14px;margin:6px 0 0">' +
      (exact ? 'Unit summaries and conclusions copied word for word from the official course material.' :
        'NOUN has not put the new ' + esc(c.code) + ' text online, so this is the older NOUN text that covered the same topics. Wording is official; check unit order against your own course outline.') + '</p></div>';
    var n = 0;
    return h + p.units.map(function(u){
      var over = u.t === "Course overview";
      if (!over) n++;
      var b = '<details class="card off-unit"' + (over ? ' open' : '') + '><summary><span class="qnum">' + (over ? "OVERVIEW" : "UNIT " + n) + '</span> <b>' + esc(over ? "What the course covers" : u.t) + '</b></summary>';
      if (u.s) b += '<h4>Summary</h4>' + paras(u.s);
      if (u.c) b += '<h4>Conclusion</h4>' + paras(u.c);
      if (u.d && u.d.length) b += '<h4>Key definitions</h4><ul class="defs">' + u.d.map(function(d){ return '<li>' + esc(d.replace(/\n•\s*/g, " ")) + '</li>'; }).join("") + '</ul>';
      return b + '</details>';
    }).join("");
  }).join("");
}

function notesHTML(c){
  var off = officialHTML(c);
  return (off ? '<div class="row" style="justify-content:flex-end;margin-bottom:10px"><button class="btn small" id="offAll">Open all units</button></div><div class="official">' + off + '</div><h2 style="margin:28px 0 12px">Key points</h2>' : "") +
    '<div class="notes grid">' + ((window.SUMMARY || {})[c.code] || c.modules).map(function(m, i){
    return '<div class="card mod" id="mod-' + i + '"><div class="qnum">MODULE ' + (i + 1) + '</div><h3>' + esc(m[0]) + '</h3><ul>' + m[1].map(function(p){ return '<li>' + esc(p) + '</li>'; }).join("") + '</ul></div>';
  }).join("") + '</div><div class="row" style="margin-top:16px"><button class="btn" data-ctab="cards">Flashcards</button><button class="btn primary" data-ctab="practice">Test yourself</button></div>';
}

function initFc(c, onlyUnknown){
  var known = knownList(c.code);
  var order = c.cards.map(function(_, i){ return i; }).filter(function(i){ return !onlyUnknown || known.indexOf(i) < 0; });
  fc = { code: c.code, order: order, pos: 0, flip: false, onlyUnknown: !!onlyUnknown };
}
function cardsHTML(c){
  if (!fc || fc.code !== c.code) initFc(c, false);
  var known = knownList(c.code);
  var h = '<div class="row" style="justify-content:space-between;margin-bottom:14px"><span class="muted">Known ' + known.length + ' of ' + c.cards.length + '</span><span class="row">';
  h += '<button class="btn small" id="fcShuffle">Shuffle</button><button class="btn small" id="fcMode">' + (fc.onlyUnknown ? "Show all cards" : "Only cards I don't know") + '</button><button class="btn small" id="fcReset">Reset known</button></span></div>';
  if (!fc.order.length || fc.pos >= fc.order.length){
    return h + '<div class="card empty"><h3>' + (fc.order.length ? "Deck finished" : "You know every card") + '</h3><p>Known ' + known.length + ' of ' + c.cards.length + '.</p><button class="btn primary" id="fcAgain">Go again</button></div>';
  }
  var i = fc.order[fc.pos], card = c.cards[i];
  h += '<div class="fc-stage"><div class="fc ' + (fc.flip ? "flip" : "") + '" id="fcCard" tabindex="0" role="button" aria-label="Flip card"><div class="face"><div class="qnum">' + (fc.pos + 1) + ' / ' + fc.order.length + '</div><div class="term" style="margin-top:8px">' + esc(card[0]) + '</div><div class="hint">Tap to flip</div></div><div class="face back"><div class="def">' + esc(card[1]) + '</div><div class="hint">' + esc(card[0]) + '</div></div></div>';
  h += '<div class="row fc-actions"><button class="btn" id="fcPrev" aria-label="Previous card" ' + (fc.pos ? "" : "disabled") + '>←</button><button class="btn danger" id="fcNo">Still learning</button><button class="btn primary" id="fcYes">I know it</button></div><p class="keys-hint"><span class="kbd">Space</span> flip · <span class="kbd">1</span> still learning · <span class="kbd">2</span> know it · <span class="kbd">←</span> back</p></div>';
  return h;
}

function practiceHTML(c){
  var n = c.mcq.length + c.fib.length;
  var h = '<div class="grid" style="grid-template-columns:repeat(auto-fit,minmax(280px,1fr))"><div class="card"><h3>Start a test</h3><p class="muted" style="font-size:14px">' + c.mcq.length + ' objective + ' + c.fib.length + ' fill-in-the-gap questions in this bank' + (pqCount(c) ? ', including <b>' + pqCount(c) + ' real past questions</b> from the old course code' : "") + '.</p>';
  h += '<div class="grid" style="grid-template-columns:1fr 1fr;gap:10px">';
  h += '<label class="f">Questions<select id="pCount"><option value="10">10</option><option value="20">20</option>' + (n >= 50 ? '<option value="50" selected>50</option>' : "") + (n >= 100 ? '<option value="100">100</option>' : "") + '<option value="0"' + (n >= 50 ? "" : " selected") + '>All (' + n + ')</option></select></label>';
  h += '<label class="f">Minutes<input type="number" id="pMin" min="1" max="180" value="' + Math.max(5, Math.round((n >= 50 ? 50 : n) * 0.75)) + '"></label>';
  h += '<label class="f" style="grid-column:1/-1">Type<select id="pKind"><option value="mix">Objective + fill-in-the-gap</option><option value="mcq">Objective only</option><option value="fib">Fill-in-the-gap only</option>' + (pqCount(c) ? '<option value="pq">Past questions only (' + pqCount(c) + ')</option><option value="orig">Original questions only</option>' : "") + '</select></label>';
  h += '</div><button class="btn primary block" id="pStart" style="margin-top:12px">Start test</button></div>';
  h += '<div class="card"><h3>Tips for the e-exam</h3><ul style="padding-left:18px;margin:8px 0 0;font-size:14px"><li>Answer every question. There is no penalty for a wrong answer.</li><li>Fill-in-the-gap is marked by computer, so spelling must be exact.</li><li>Flag hard questions and come back to them using the number grid.</li><li>Keys: <span class="kbd">A</span>–<span class="kbd">D</span> pick an option, <span class="kbd">N</span>/<span class="kbd">P</span> or the arrow keys move between questions, <span class="kbd">F</span> flags.</li></ul></div></div>';
  var mine = S.attempts.filter(function(a){ return a.codes.length === 1 && a.codes[0] === c.code; }).slice(-8).reverse();
  h += '<section><h2>Your ' + c.code + ' tests</h2>' + historyHTML(mine) + '</section>';
  return h;
}

/* ===== EXAM ===== */
function startExam(codes, count, minutes, kind){
  var items = [];
  codes.forEach(function(code){
    var c = BY[code];
    var keep = function(isPq){ return kind === "pq" ? isPq : kind === "orig" ? !isPq : true; };
    if (kind !== "fib") c.mcq.forEach(function(m){
      if (!keep(!!m[5])) return;
      var order = shuffle(m[2].map(function(_, i){ return i; }));
      items.push({ t: "mcq", code: code, mod: m[0], q: m[1], opts: order.map(function(i){ return m[2][i]; }), ans: order.indexOf(m[3]), exp: m[4] || EXP[m[1]] || "", pq: !!m[5] });
    });
    if (kind !== "mcq") c.fib.forEach(function(f){ if (keep(!!f[4])) items.push({ t: "fib", code: code, mod: f[0], q: f[1], acc: f[2], exp: f[3] || EXP[f[1]] || "", pq: !!f[4] }); });
  });
  items = shuffle(items);
  if (count && count < items.length) items = items.slice(0, count);
  items.sort(function(a, b){ return (a.t === "fib") - (b.t === "fib"); });
  minutes = Math.max(1, Math.min(180, +minutes || 30));
  X = { codes: codes, kind: kind, items: items, ans: items.map(function(){ return null; }), flag: items.map(function(){ return false; }), locked: items.map(function(){ return false; }), instant: S.instant !== false, cur: 0, minutes: minutes, start: Date.now(), endAt: Date.now() + minutes * 60000, done: false };
  go({ name: "exam" });
  startTimer();
}

function examHTML(){
  var it = X.items[X.cur], i = X.cur, answered = X.ans.filter(function(a){ return a !== null && a !== ""; }).length;
  var title = X.codes.length > 1 ? "Mixed mock · " + X.codes.length + " courses" : X.codes[0] + " · " + BY[X.codes[0]].title;
  var h = '<div class="exam-bar"><strong>' + esc(title) + '</strong><span class="spacer"></span><button class="btn small" id="fbToggle" title="Show right/wrong as soon as you answer">Instant check: ' + (X.instant ? "on" : "off") + '</button><span style="font-size:13px">Answered <span id="ansCount">' + answered + '</span>/' + X.items.length + '</span><span class="timer" id="timer" role="timer" aria-label="Time left">--:--</span><div class="bar"><i id="ansBar" style="width:' + pct(answered, X.items.length) + '%"></i></div></div>';
  h += '<div class="exam"><div class="card">';
  h += '<div class="row" style="justify-content:space-between"><span class="qnum">QUESTION ' + (i + 1) + ' OF ' + X.items.length + ' · ' + (it.t === "mcq" ? "OBJECTIVE" : "FILL IN THE GAP") + (X.codes.length > 1 ? " · " + it.code : "") + (it.pq ? ' <span class="tag pq">PAST QUESTION</span>' : "") + '</span><button class="btn small" id="flagBtn">' + (X.flag[i] ? "Unflag" : "Flag for review") + '</button></div>';
  h += '<div class="qtext">' + esc(it.q) + '</div>';
  var lock = X.instant && X.locked[i];
  if (it.t === "mcq"){
    h += it.opts.map(function(o, k){
      var cls = X.ans[i] === k ? "sel" : "";
      if (lock) cls = k === it.ans ? "right" : X.ans[i] === k ? "wrong" : "dim";
      return '<button class="opt ' + cls + '" data-opt="' + k + '"' + (lock ? ' aria-disabled="true"' : "") + '><span class="k">' + "ABCD"[k] + '</span><span>' + esc(o) + '</span></button>';
    }).join("");
  } else {
    h += '<div class="fib"><input type="text" id="fibIn" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="Type your answer" value="' + esc(X.ans[i] || "") + '" aria-label="Your answer"' + (lock ? " readonly" : "") + '>' + (X.instant && !lock ? '<button class="btn primary" id="fibCheck">Check</button>' : "") + '</div><p class="muted" style="font-size:13px">Type one word or short phrase. Check your spelling.' + (X.instant && !lock ? " Press Enter to check." : "") + '</p>';
  }
  if (lock){
    var ok = it.t === "mcq" ? X.ans[i] === it.ans : fibCorrect(X.ans[i], it.acc);
    var right = it.t === "mcq" ? "ABCD"[it.ans] + ". " + it.opts[it.ans] : it.acc[0];
    h += '<div class="fb ' + (ok ? "ok" : "no") + '" role="status"><b>' + (ok ? "Correct" : "Wrong") + '</b>' + (ok ? "" : ' · Answer: ' + esc(right)) + (it.exp ? '<div class="fb-exp">' + esc(it.exp) + '</div>' : "") + '</div>';
  }
  h += '<div class="q-actions"><button class="btn" id="prevQ" ' + (i ? "" : "disabled") + '>← Previous</button><button class="btn ' + (i === X.items.length - 1 ? "primary" : "") + '" id="nextQ">' + (i === X.items.length - 1 ? "Finish" : "Next →") + '</button></div>';
  h += '</div><div class="card q-side"><h3 style="margin-bottom:10px">Questions</h3><div class="nav-grid" id="navGrid">' + navButtons() + '</div>';
  h += '<div class="legend"><span><i style="background:var(--accent-soft);border-color:var(--accent)"></i>Answered</span><span><i></i>Not answered</span><span><i style="background:var(--warn);border-radius:50%;border:0"></i>Flagged</span></div>';
  h += '<div class="row" style="margin-top:14px"><button class="btn primary" id="submitBtn" style="flex:1">Submit</button><button class="btn" id="quitBtn">Quit</button></div></div></div>';
  h += '<p class="keys-hint"><span class="kbd">A</span>–<span class="kbd">D</span> answer · <span class="kbd">←</span> <span class="kbd">→</span> move · <span class="kbd">F</span> flag</p>';
  return h;
}
function navButtons(){
  return X.items.map(function(_, k){
    var cls = [];
    if (X.ans[k] !== null && X.ans[k] !== "") cls.push("ans");
    if (k === X.cur) cls.push("cur");
    if (X.flag[k]) cls.push("flg");
    return '<button data-nav="' + k + '" class="' + cls.join(" ") + '" aria-label="Question ' + (k + 1) + '">' + (k + 1) + '</button>';
  }).join("");
}
function refreshNav(){
  var g = $("#navGrid"); if (g) g.innerHTML = navButtons();
  var done = X.ans.filter(function(x){ return x !== null && x !== ""; }).length;
  var a = $("#ansCount"); if (a) a.textContent = done;
  var bar = $("#ansBar"); if (bar) bar.style.width = pct(done, X.items.length) + "%";
  // Scoped to the grid: the header nav links carry data-nav too.
  $all("#navGrid [data-nav]").forEach(function(b){ b.onclick = function(){ jump(+b.dataset.nav); }; });
}
function jump(k){ if (k < 0 || k >= X.items.length) return; X.cur = k; render(); var f = $("#fibIn"); if (f) f.focus(); }
function startTimer(){ stopTimer(); tick(); timerId = setInterval(tick, 1000); }
function stopTimer(){ if (timerId){ clearInterval(timerId); timerId = null; } }
function tick(){
  if (!X || X.done) return stopTimer();
  var left = Math.max(0, X.endAt - Date.now()), s = Math.ceil(left / 1000);
  var el = $("#timer");
  if (el){ el.textContent = String(Math.floor(s / 60)).padStart(2, "0") + ":" + String(s % 60).padStart(2, "0"); el.classList.toggle("low", s <= 60); el.classList.toggle("soon", s > 60 && s <= 300); }
  if (left <= 0){ finishExam(true); }
}
function askSubmit(){
  var un = X.ans.filter(function(a){ return a === null || a === ""; }).length;
  modal("Submit test?", un ? "You have <b>" + un + "</b> unanswered question" + (un === 1 ? "" : "s") + ". You cannot change answers after submitting." : "All questions answered. You cannot change answers after submitting.", [
    un ? { label: "Go to unanswered", fn: firstGap } : { label: "Keep working" }, { label: "Submit", cls: "primary", fn: function(){ finishExam(false); } }
  ]);
}
function firstGap(){ for (var k = 0; k < X.ans.length; k++) if (X.ans[k] === null || X.ans[k] === "") return jump(k); }
function confirmQuit(){
  modal("Quit this test?", "Your answers will be discarded and nothing will be saved.", [
    { label: "Stay" }, { label: "Quit", cls: "danger", fn: function(){ X = null; go({ name: "home" }); } }
  ]);
}
function finishExam(timeUp){
  if (!X || X.done) return;
  X.done = true; stopTimer();
  var correct = 0, mods = {};
  X.res = X.items.map(function(it, k){
    var a = X.ans[k], ok = it.t === "mcq" ? a === it.ans : fibCorrect(a, it.acc);
    if (ok) correct++;
    var key = it.code + "|" + it.mod; mods[key] = mods[key] || [0, 0]; mods[key][1]++; if (ok) mods[key][0]++;
    return ok;
  });
  var attempt = { date: Date.now(), codes: X.codes, total: X.items.length, correct: correct, pct: pct(correct, X.items.length), used: Math.round((Math.min(Date.now(), X.endAt) - X.start) / 1000), mods: mods };
  X.attempt = attempt;
  S.attempts.push(attempt); if (S.attempts.length > 200) S.attempts = S.attempts.slice(-200);
  save();
  X.timeUp = timeUp;
  go({ name: "result", filter: "all" });
}

/* ===== RESULT ===== */
function resultHTML(){
  if (!X || !X.attempt) return '<div class="card empty">No result to show.</div>';
  var a = X.attempt, g = grade(a.pct);
  var h = '<button class="btn small" id="backHome">← Dashboard</button>';
  if (X.timeUp) h += '<div class="notice" style="margin-top:14px">Time up. Your test was submitted automatically.</div>';
  h += '<div class="card" style="margin-top:14px"><div class="score-ring"><div class="grade ' + (g === "F" ? "f" : "") + '">' + g + '</div><div><div class="big">' + a.pct + '%</div><div class="muted">' + a.correct + ' of ' + a.total + ' correct · ' + Math.floor(a.used / 60) + 'm ' + (a.used % 60) + 's used</div></div><span class="spacer"></span><div class="row"><button class="btn" id="retry">Retake</button>' + (X.codes.length === 1 ? reviseBtn(X.codes[0], null, "btn primary", "Revise " + X.codes[0]) : "") + '</div></div></div>';

  h += '<section><h2>By topic</h2><div class="card scroll-x"><table><thead><tr><th>Topic</th><th>Score</th><th style="width:30%"></th></tr></thead><tbody>';
  Object.keys(a.mods).sort(function(p, q){ return pct(a.mods[p][0], a.mods[p][1]) - pct(a.mods[q][0], a.mods[q][1]); }).forEach(function(k){
    var v = a.mods[k], p = k.split("|"), m = BY[p[0]] ? BY[p[0]].modules[+p[1]] : null, pc = pct(v[0], v[1]);
    h += '<tr><td><span class="mono">' + p[0] + '</span> · ' + esc(m ? m[0] : "") + '</td><td class="mono">' + v[0] + '/' + v[1] + '</td><td><div class="bar"><i style="width:' + pc + '%;background:' + (pc < 50 ? "var(--bad)" : "var(--accent)") + '"></i></div></td></tr>';
  });
  h += '</tbody></table></div></section>';

  var f = view.filter || "all";
  h += '<section><div class="row" style="justify-content:space-between;margin-bottom:12px"><h2 style="margin:0">Review answers</h2><div class="row"><button class="btn small ' + (f === "all" ? "primary" : "") + '" data-filter="all">All</button><button class="btn small ' + (f === "wrong" ? "primary" : "") + '" data-filter="wrong">Wrong only (' + (a.total - a.correct) + ')</button></div></div>';
  X.items.forEach(function(it, k){
    var ok = X.res[k]; if (f === "wrong" && ok) return;
    var given = X.ans[k], yours, right;
    if (it.t === "mcq"){ yours = given === null ? "No answer" : "ABCD"[given] + ". " + it.opts[given]; right = "ABCD"[it.ans] + ". " + it.opts[it.ans]; }
    else { yours = given ? given : "No answer"; right = it.acc[0]; }
    h += '<div class="rv ' + (ok ? "" : "wrong") + '"><div class="qnum">Q' + (k + 1) + ' · ' + it.code + ' · ' + (ok ? "CORRECT" : "WRONG") + (it.pq ? ' <span class="tag pq">PAST QUESTION</span>' : "") + '</div><div style="margin:4px 0">' + esc(it.q) + '</div>';
    if (!ok) h += '<div style="font-size:14px">Your answer: <span class="yours">' + esc(yours) + '</span></div>';
    h += '<div style="font-size:14px">Answer: <span class="right">' + esc(right) + '</span>' + (it.t === "fib" && it.acc.length > 1 ? ' <span class="muted">(also accepted: ' + esc(it.acc.slice(1).join(", ")) + ')</span>' : "") + '</div>';
    if (it.exp) h += '<div class="muted" style="font-size:13px;margin-top:4px">' + esc(it.exp) + '</div>';
    h += '</div>';
  });
  h += '</section>';
  return h;
}

/* ===== COURSE LIBRARY (all NOUN courses, js/library.js loaded on first visit) ===== */
var libShown = 50;
function loadLib(done){
  if (window.LIB) return done();
  var s = document.createElement("script");
  s.src = "js/library.js";
  s.onload = done;
  s.onerror = function(){ var o = $("#libOut"); if (o) o.innerHTML = '<div class="card empty">Could not load the course list. Check your connection and reload.</div>'; };
  document.head.appendChild(s);
}
function libPrefix(code){ var m = /^[A-Z]+/.exec(code); return m ? m[0] : code; }
function libraryHTML(){
  var h = '<button class="btn small" id="backHome">← Dashboard</button>';
  h += '<div style="margin-top:14px"><h1>All NOUN courses</h1><p class="muted" style="margin:6px 0 0">Course material PDFs and past question papers for every course code listed on <a href="https://puredu.net/noun-e-courseware" target="_blank" rel="noopener">puredu.net</a>. Files open on that site.</p></div>';
  h += '<div class="card lib-search"><label class="f" style="flex:1 1 260px">Search course code or title<input type="text" id="libQ" autocomplete="off" placeholder="e.g. GST101, CIT, accounting" value="' + esc(view.q || "") + '"></label>';
  h += '<label class="f">Prefix<select id="libPre"><option value="">All prefixes</option></select></label>';
  h += '<label class="f">Show<select id="libHas"><option value="">All courses</option><option value="cw">With course material</option><option value="pq">With past questions</option></select></label></div>';
  h += '<div id="libOut"><div class="card empty">Loading course list…</div></div>';
  return h;
}
function libRow(r){
  var L = window.LIB, h = '<div class="card lib-row">';
  h += '<div class="row" style="justify-content:space-between"><span class="code">' + esc(r[0]) + '</span>' + (BY[r[0]] && !BY[r[0]].gen ? '<button class="btn small" data-course="' + esc(r[0]) + '">Study on this site</button>' : "") + '</div>';
  h += '<div class="title">' + (r[1] ? esc(r[1]) : '<span class="muted">Title not listed</span>') + '</div>';
  h += '<div class="row">';
  if (r[2].length) h += '<button class="btn small primary" data-read="' + esc(r[0]) + '">Read course material</button>';
  if (hasTest(r[0])) h += '<button class="btn small" data-test="' + esc(r[0]) + '">Take a test</button>';
  if (!r[2].length) h += '<span class="tag">No course material</span>';
  if (!r[3].length) h += '<span class="tag">No past questions</span>';
  h += '</div>';
  if (r[3].length){
    h += '<details><summary>Past questions (' + r[3].length + ')</summary><ul class="pq-files">';
    r[3].forEach(function(p){ var n = decodeURIComponent(p).replace(/\.[a-z0-9]+$/i, ""); h += '<li><a href="' + esc(L.pq + p) + '" target="_blank" rel="noopener">' + esc(n) + '</a></li>'; });
    h += '</ul></details>';
  }
  return h + '</div>';
}
function libFill(reset){
  var out = $("#libOut"); if (!out || !window.LIB) return;
  if (reset) libShown = 50;
  var q = norm($("#libQ").value), qc = q.toUpperCase().replace(/\s+/g, ""), pre = $("#libPre").value, has = $("#libHas").value;
  view.q = $("#libQ").value.trim();
  var list = window.LIB.c.filter(function(r){
    if (pre && libPrefix(r[0]) !== pre) return false;
    if (has === "cw" && !r[2].length) return false;
    if (has === "pq" && !r[3].length) return false;
    return !q || r[0].indexOf(qc) >= 0 || r[1].toLowerCase().indexOf(q) >= 0;
  });
  if (qc) list.sort(function(a, b){ return (b[0].indexOf(qc) === 0) - (a[0].indexOf(qc) === 0); });
  if (!list.length){ out.innerHTML = '<div class="card empty">' + (BY[qc] ? "puredu.net has no course material or past papers listed for " + esc(qc) + " yet. Use the notes and practice on its course page." : "No course matches that search.") + '</div>'; return; }
  var h = '<p class="muted" style="font-size:13px">' + list.length + ' course' + (list.length === 1 ? "" : "s") + (list.length > libShown ? ", showing " + libShown : "") + '</p>';
  h += '<div class="grid g-lib">' + list.slice(0, libShown).map(libRow).join("") + '</div>';
  if (list.length > libShown) h += '<div class="row" style="justify-content:center;margin-top:14px"><button class="btn" id="libMore">Show more</button></div>';
  out.innerHTML = h;
  $all("#libOut [data-course]").forEach(function(b){ b.onclick = function(){ fc = null; go({ name: "course", code: b.dataset.course, tab: "notes" }); }; });
  bindReadTest(out);
  var more = $("#libMore"); if (more) more.onclick = function(){ libShown += 100; libFill(); };
}

/* ===== READER (course material PDF shown in the page) + tests built from it (qb/CODE.json, tools/gen_qbank.py) ===== */
var QB = null, QBP = {};
function loadQB(done){
  if (QB) return done();
  fetch("qb/index.json").then(function(r){ return r.ok ? r.json() : {}; }).catch(function(){ return {}; }).then(function(j){ QB = j || {}; done(); });
}
function hasTest(code){ return (BY[code] && !BY[code].gen && !BY[code].stub) || !!(QB && QB[code]); }
function loadBank(code, done){
  if (BY[code] && !BY[code].stub) return done(true);
  var p = (code.match(/^[A-Za-z]+/) || [code])[0];
  (QBP[p] || (QBP[p] = fetch("qb/p/" + p + ".json").then(function(r){ if (!r.ok) throw 0; return r.json(); }).catch(function(e){ delete QBP[p]; throw e; }))).then(function(pk){
    var b = pk[code]; if (!b) throw 0;
    BY[code] = { code: code, title: b.title || code, units: 0, cat: "", source: "gen", note: "", modules: b.modules, cards: [], mcq: b.mcq, fib: b.fib, gen: true };
    done(true);
  }).catch(function(){ done(false); });
}
function takeTest(code, count){
  loadBank(code, function(ok){
    if (!ok) return modal("Test not available", "Could not load the questions for " + esc(code) + ". Check your connection and try again.", [{ label: "OK" }]);
    var c = BY[code], n = Math.min(count || 20, c.mcq.length + c.fib.length);
    startExam([code], n, Math.max(5, Math.round(n * 0.75)), "mix");
  });
}
function reviseBtn(code, mod, cls, label){
  var c = BY[code];
  if (c && !c.gen) return '<button class="' + (cls || "btn small") + '" data-course="' + code + '" data-tab="notes"' + (mod != null ? ' data-mod="' + mod + '"' : "") + '>' + esc(label || "Revise") + '</button>';
  return '<button class="' + (cls || "btn small") + '" data-read="' + code + '">' + esc(label || "Revise") + '</button>';
}
function bindReadTest(root){
  Array.prototype.forEach.call(root.querySelectorAll("[data-read]"), function(b){ b.onclick = function(){ go({ name: "read", code: b.dataset.read, file: 0 }); }; });
  Array.prototype.forEach.call(root.querySelectorAll("[data-test]"), function(b){ b.onclick = function(){ takeTest(b.dataset.test); }; });
}
// Phones and tablets often will not show a PDF inside a page, so they start on Google's viewer.
var touchy = !!(window.matchMedia && window.matchMedia("(pointer: coarse)").matches);
function readHTML(){
  return '<div class="row"><button class="btn small" data-lib="' + esc(view.code) + '">← All courses</button></div><div id="readOut" style="margin-top:14px"><div class="card empty">Loading…</div></div>';
}
function fillRead(){
  loadLib(function(){ loadQB(function(){
    var out = $("#readOut"); if (!out || view.name !== "read") return;
    var L = window.LIB, code = view.code, r = L.c.filter(function(x){ return x[0] === code; })[0];
    if (!r || !r[2].length){ out.innerHTML = '<div class="card empty">puredu.net has no course material for ' + esc(code) + '.</div>'; return; }
    var i = Math.min(view.file || 0, r[2].length - 1), url = L.cw + r[2][i];
    var gview = "https://docs.google.com/viewer?embedded=true&url=" + encodeURIComponent(url);
    var h = '<h1><span class="mono">' + esc(code) + '</span> · ' + esc(r[1] || "Course material") + '</h1>';
    h += '<div class="card read-bar">';
    if (hasTest(code)){
      var own = BY[code] && !BY[code].gen && !BY[code].stub ? BY[code] : null, n = own ? own.mcq.length + own.fib.length : QB[code];
      h += '<div><b>Test yourself on this material</b><div class="muted" style="font-size:13px">' + n + ' questions ' + (own ? "in this course's question bank" : "built from the definitions in this course material") + '. Each answer shows the sentence it came from.</div></div>';
      h += '<div class="row"><label class="f">Questions<select id="rdCount">' + [10, 20, 40, 60].filter(function(k, j){ return j === 0 || k <= n; }).map(function(k){ return '<option' + (k === 20 ? " selected" : "") + '>' + k + '</option>'; }).join("") + '</select></label><button class="btn primary" id="rdTest">Start test</button></div>';
    } else h += '<div class="muted" style="font-size:14px">No test for this course yet. Its PDF may be scanned pages, which the question builder cannot read.</div>';
    h += '</div><div class="row" style="margin:14px 0 8px">';
    if (r[2].length > 1) r[2].forEach(function(p, j){ h += '<button class="btn small ' + (j === i ? "primary" : "") + '" data-file="' + j + '">Part ' + (j + 1) + '</button>'; });
    h += '<span class="spacer"></span><button class="btn small" id="rdAlt">' + (touchy ? "Use built-in viewer" : "Use Google viewer") + '</button><a class="btn small" href="' + esc(url) + '" target="_blank" rel="noopener">Open PDF in new tab</a></div>';
    h += '<div class="reader"><iframe id="rdFrame" title="' + esc(code) + ' course material" src="' + esc(touchy ? gview : url) + '"></iframe></div>';
    h += '<p class="muted" style="font-size:13px">Large PDFs can take a minute to load from puredu.net. If the page stays blank, switch viewer or open the PDF in a new tab.</p>';
    if (r[3].length){
      h += '<section><h2>Past question papers (' + r[3].length + ')</h2><div class="card"><ul class="pq-files" style="max-height:none">';
      r[3].forEach(function(p){ h += '<li><a href="' + esc(L.pq + p) + '" target="_blank" rel="noopener">' + esc(decodeURIComponent(p).replace(/\.[a-z0-9]+$/i, "")) + '</a></li>'; });
      h += '</ul></div></section>';
    }
    out.innerHTML = h;
    var google = touchy;
    $("#rdAlt").onclick = function(){ google = !google; $("#rdFrame").src = google ? gview : url; this.textContent = google ? "Use built-in viewer" : "Use Google viewer"; };
    $all("[data-file]").forEach(function(b){ b.onclick = function(){ view.file = +b.dataset.file; syncHash(false); fillRead(); }; });
    if ($("#rdTest")) $("#rdTest").onclick = function(){ takeTest(code, +$("#rdCount").value); };
  }); });
}

/* ---------- events ---------- */
function $all(s){ return Array.prototype.slice.call(document.querySelectorAll(s)); }
function bind(){
  $all("[data-course]").forEach(function(b){ b.onclick = function(){
    fc = null; var mod = b.dataset.mod;
    go({ name: "course", code: b.dataset.course, tab: b.dataset.tab || "notes" });
    if (mod != null){ var el = document.getElementById("mod-" + mod); if (el) el.scrollIntoView({ block: "start" }); }
  }; });
  var bh = $("#backHome"); if (bh) bh.onclick = function(){ go({ name: "home" }); };
  var ws = $("#whoSel"); if (ws) ws.onchange = function(){
    try { localStorage.setItem(WHO_KEY, ws.value); } catch(e){}
    location.reload();
  };
  $all("[data-lib]").forEach(function(b){ b.onclick = function(){ go({ name: "library", q: b.dataset.lib }); }; });

  bindReadTest(document);
  if (view.name === "read") fillRead();

  if (view.name === "library"){
    var timer = null;
    $("#libQ").oninput = function(){ clearTimeout(timer); timer = setTimeout(function(){ libFill(true); syncHash(false); }, 150); };
    $("#libPre").onchange = $("#libHas").onchange = function(){ libFill(true); };
    loadLib(function(){ loadQB(function(){
      var counts = {};
      window.LIB.c.forEach(function(r){ var p = libPrefix(r[0]); counts[p] = (counts[p] || 0) + 1; });
      $("#libPre").innerHTML = '<option value="">All prefixes</option>' + Object.keys(counts).sort().map(function(p){ return '<option value="' + p + '">' + p + ' (' + counts[p] + ')</option>'; }).join("");
      libFill(true);
    }); });
  }

  if (view.name === "home"){
    $("#mkCount").onchange = function(){ var n = +this.value; $("#mkMin").value = n ? Math.round(n * 0.75) : 60; };
    $("#mkStart").onclick = function(){
      var v = $("#mkCourse").value;
      startExam(v === "ALL" ? CBT_CODES : [v], +$("#mkCount").value, $("#mkMin").value, "mix");
    };
    $all("[data-date],[data-time]").forEach(function(inp){ inp.onchange = function(){
      var code = inp.dataset.date || inp.dataset.time;
      S.dates[code] = S.dates[code] || {};
      if (inp.dataset.date) S.dates[code].date = inp.value; else S.dates[code].time = inp.value;
      save(); render();
      toast(code + " exam " + (inp.dataset.date ? "date" : "time") + " saved");
      var t = document.querySelector('[data-' + (inp.dataset.date ? "date" : "time") + '="' + code + '"]'); if (t) t.focus();
    }; });
  }

  if (view.name === "course"){
    var c = BY[view.code];
    $all("[data-ctab]").forEach(function(b){ b.onclick = function(){ view.tab = b.dataset.ctab; render(); window.scrollTo(0, 0); }; });
    $all("[data-goto]").forEach(function(a){ a.onclick = function(e){ e.preventDefault(); var el = document.getElementById(a.dataset.goto); if (el) el.scrollIntoView({ behavior: "smooth", block: "start" }); }; });
    if ($("#offAll")) $("#offAll").onclick = function(){
      var d = $all(".off-unit"), open = d.some(function(x){ return !x.open; });
      d.forEach(function(x){ x.open = open; }); this.textContent = open ? "Close all units" : "Open all units";
    };
    if (view.tab === "cards"){
      var card = $("#fcCard");
      var flip = function(){ fc.flip = !fc.flip; card.classList.toggle("flip", fc.flip); };
      if (card){ card.onclick = flip; card.onkeydown = function(e){ if (e.key === "Enter"){ e.preventDefault(); flip(); } }; }
      var mark = function(know){
        var i = fc.order[fc.pos], list = knownList(c.code).slice(), at = list.indexOf(i);
        if (know && at < 0) list.push(i); if (!know && at >= 0) list.splice(at, 1);
        S.known[c.code] = list; save(); fc.pos++; fc.flip = false; render();
      };
      if ($("#fcYes")) $("#fcYes").onclick = function(){ mark(true); };
      if ($("#fcNo")) $("#fcNo").onclick = function(){ mark(false); };
      if ($("#fcPrev")) $("#fcPrev").onclick = function(){ fc.pos = Math.max(0, fc.pos - 1); fc.flip = false; render(); };
      $("#fcShuffle").onclick = function(){ fc.order = shuffle(fc.order); fc.pos = 0; fc.flip = false; render(); toast("Deck shuffled"); };
      $("#fcMode").onclick = function(){ initFc(c, !fc.onlyUnknown); render(); };
      $("#fcReset").onclick = function(){ modal("Reset known cards?", "All " + c.code + " cards will be marked as not known.", [{ label: "Cancel" }, { label: "Reset", cls: "danger", fn: function(){ S.known[c.code] = []; save(); initFc(c, fc.onlyUnknown); render(); } }]); };
      if ($("#fcAgain")) $("#fcAgain").onclick = function(){ initFc(c, fc.onlyUnknown); render(); };
    }
    if (view.tab === "practice"){
      $("#pCount").onchange = $("#pKind").onchange = function(){ var k = $("#pKind").value, n = +$("#pCount").value || (k === "pq" ? pqCount(c) : k === "orig" ? c.mcq.length + c.fib.length - pqCount(c) : c.mcq.length + c.fib.length); $("#pMin").value = Math.max(5, Math.round(n * 0.75)); };
      $("#pStart").onclick = function(){ startExam([c.code], +$("#pCount").value, $("#pMin").value, $("#pKind").value); };
    }
  }

  if (view.name === "exam"){
    $all("[data-opt]").forEach(function(b){ b.onclick = function(){
      if (X.instant && X.locked[X.cur]) return;
      X.ans[X.cur] = +b.dataset.opt;
      if (X.instant){ X.locked[X.cur] = true; render(); return; }
      $all("[data-opt]").forEach(function(o){ o.classList.toggle("sel", o === b); }); refreshNav();
    }; });
    var fi = $("#fibIn");
    var checkFib = function(){
      if (!X.instant || X.locked[X.cur] || !String(X.ans[X.cur] || "").trim()) return false;
      X.locked[X.cur] = true; render(); return true;
    };
    if (fi){
      fi.oninput = function(){ X.ans[X.cur] = fi.value; refreshNav(); };
      fi.onkeydown = function(e){ if (e.key === "Enter"){ e.preventDefault(); if (!checkFib()) next(); } };
    }
    if ($("#fibCheck")) $("#fibCheck").onclick = function(){ if (!checkFib()) fi.focus(); };
    $("#fbToggle").onclick = function(){ X.instant = !X.instant; S.instant = X.instant; save(); render(); };
    $("#prevQ").onclick = function(){ jump(X.cur - 1); };
    $("#nextQ").onclick = next;
    $("#flagBtn").onclick = function(){ X.flag[X.cur] = !X.flag[X.cur]; this.textContent = X.flag[X.cur] ? "Unflag" : "Flag for review"; refreshNav(); };
    $("#submitBtn").onclick = askSubmit;
    $("#quitBtn").onclick = confirmQuit;
    refreshNav(); tick();
  }

  if (view.name === "result"){
    $all("[data-filter]").forEach(function(b){ b.onclick = function(){ view.filter = b.dataset.filter; render(); }; });
    $("#retry").onclick = function(){ startExam(X.codes, X.items.length, X.minutes, X.kind || "mix"); };
  }
}
function next(){ if (X.cur === X.items.length - 1) askSubmit(); else jump(X.cur + 1); }

document.addEventListener("keydown", function(e){
  if ($("#modalRoot").firstChild || e.ctrlKey || e.metaKey || e.altKey) return;
  var tag = e.target && e.target.tagName;
  if (tag === "INPUT" || tag === "SELECT" || tag === "TEXTAREA") return;
  var k = e.key.toLowerCase();
  if (view.name === "course" && view.tab === "cards"){
    var hit = k === " " && tag !== "BUTTON" ? "#fcCard" : k === "1" ? "#fcNo" : k === "2" ? "#fcYes" : k === "arrowleft" ? "#fcPrev" : null;
    var el = hit && $(hit);
    if (el && !el.disabled){ e.preventDefault(); el.click(); }
    return;
  }
  if (view.name !== "exam" || !X || X.done) return;
  var it = X.items[X.cur];
  if (it.t === "mcq" && "abcd".indexOf(k) >= 0 && k.length === 1){
    var idx = "abcd".indexOf(k); if (idx < it.opts.length){ var b = document.querySelector('[data-opt="' + idx + '"]'); if (b) b.click(); }
  } else if (k === "n" || k === "arrowright"){ next(); }
  else if (k === "p" || k === "arrowleft"){ jump(X.cur - 1); }
  else if (k === "f"){ $("#flagBtn").click(); }
});
setInterval(function(){ if (view.name === "home") { var n = nextExam(); if (n && $("#countBox")){ var diff = n.t - Date.now(); var b = $all("#countBox b"); b[0].textContent = Math.floor(diff / 86400000); b[1].textContent = Math.floor(diff % 86400000 / 3600000); b[2].textContent = Math.floor(diff % 3600000 / 60000); } renderChip(); } }, 30000);

/* ---------- install + offline ---------- */
var installEvt = null, ib = $("#installBtn");
window.addEventListener("beforeinstallprompt", function(e){ e.preventDefault(); installEvt = e; if (ib) ib.hidden = false; });
if (ib) ib.onclick = function(){ if (!installEvt) return; installEvt.prompt(); installEvt = null; ib.hidden = true; };
window.addEventListener("appinstalled", function(){ if (ib) ib.hidden = true; });
if ("serviceWorker" in navigator && /^https?:$/.test(location.protocol)){
  window.addEventListener("load", function(){ navigator.serviceWorker.register("sw.js").catch(function(){}); });
}

view = viewFromHash();
render();
})();
