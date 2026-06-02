/* ==========================================================================
   PJV / Java Trenér — aplikační logika
   ========================================================================== */
"use strict";

const STORE_KEY = "pjv_trainer_v1";
const CAT_MAP = {};
CATEGORIES.forEach(c => { CAT_MAP[c.key] = c; });

/* ---------------- persistentní stav ---------------- */
const defaultStore = () => ({
  status: {},          // id -> 'know' | 'repeat' | 'dont'
  wrong: {},           // id -> true (špatně zodpovězeno v testu)
  stats: { total: 0, correct: 0, byCat: {} }, // statistika testů
  lastPracticed: null
});

let store = loadStore();

function loadStore() {
  try {
    const raw = localStorage.getItem(STORE_KEY);
    if (!raw) return defaultStore();
    const parsed = JSON.parse(raw);
    return Object.assign(defaultStore(), parsed);
  } catch (e) {
    return defaultStore();
  }
}
function saveStore() {
  try { localStorage.setItem(STORE_KEY, JSON.stringify(store)); } catch (e) {}
}

function setStatus(id, status) {
  if (store.status[id] === status) {
    delete store.status[id];            // toggle off
  } else {
    store.status[id] = status;
  }
  if (status === "know") delete store.wrong[id];
  saveStore();
  updateMiniBar();
}

function recordAnswer(q, isCorrect) {
  store.stats.total++;
  if (isCorrect) store.stats.correct++;
  const c = q.category;
  if (!store.stats.byCat[c]) store.stats.byCat[c] = { total: 0, correct: 0 };
  store.stats.byCat[c].total++;
  if (isCorrect) store.stats.byCat[c].correct++;
  else store.wrong[q.id] = true;
  store.lastPracticed = Date.now();
  saveStore();
  updateMiniBar();
}
function markPracticed() { store.lastPracticed = Date.now(); saveStore(); }

/* ---------------- pomocné funkce ---------------- */
function $(sel, root) { return (root || document).querySelector(sel); }
function el(tag, cls, html) {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (html != null) e.innerHTML = html;
  return e;
}
function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, c =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}
function highlight(text, term) {
  const safe = escapeHtml(text);
  if (!term) return safe;
  const t = term.trim();
  if (!t) return safe;
  const re = new RegExp("(" + t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ")", "gi");
  return safe.replace(re, '<span class="hl">$1</span>');
}
function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function sample(arr, n) { return shuffle(arr).slice(0, n); }
function statusLabel(s) { return { know: "Umím", repeat: "Opakovat", dont: "Neumím" }[s] || ""; }

let toastTimer = null;
function toast(msg) {
  const t = $("#toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("show"), 1800);
}

function firstSentence(text) {
  const clean = text.replace(/\s+/g, " ").trim();
  const m = clean.match(/^(.*?[\.\!\?])(\s|$)/);
  let s = m ? m[1] : clean;
  if (s.length > 120) s = s.slice(0, 117).trim() + "…";
  return s;
}

/* ---------------- globální UI stav ---------------- */
let currentMode = "dashboard";
let currentCategory = "all";   // filtr kategorie
let searchTerm = "";

/* ============================================================
   ABCD: získání možností (autorské nebo generované)
   ============================================================ */
function getQuizOptions(q) {
  if (q.options && q.options.length >= 2 && typeof q.correctOption === "number") {
    return { options: q.options.slice(), correct: q.correctOption };
  }
  // generování věrohodných distraktorů z jiných otázek
  const correctText = firstSentence(q.answer);
  const pool = QUESTIONS.filter(o =>
    o.id !== q.id && o.category === q.category && o.answer);
  let distractSrc = sample(pool, 3);
  if (distractSrc.length < 3) {
    const extra = QUESTIONS.filter(o => o.id !== q.id && o.category !== q.category);
    distractSrc = distractSrc.concat(sample(extra, 3 - distractSrc.length));
  }
  const opts = [correctText].concat(distractSrc.map(o => firstSentence(o.answer)));
  // odstranit náhodné duplicity textů
  const seen = new Set();
  const uniq = [];
  opts.forEach(t => { if (!seen.has(t)) { seen.add(t); uniq.push(t); } });
  while (uniq.length < 2) uniq.push("Žádná z uvedených možností");
  const order = shuffle(uniq);
  return { options: order, correct: order.indexOf(correctText) };
}

/* ============================================================
   ROUTER
   ============================================================ */
function renderMode(mode) {
  currentMode = mode;
  document.querySelectorAll(".mode-btn").forEach(b =>
    b.classList.toggle("active", b.dataset.mode === mode));
  closeSidebar();
  const main = $("#main");
  main.scrollTop = 0;
  window.scrollTo(0, 0);
  switch (mode) {
    case "dashboard":  renderDashboard(main); break;
    case "overview":   renderOverview(main); break;
    case "flashcards": renderFlashcards(main); break;
    case "abcd":       renderAbcd(main); break;
    case "truefalse":  renderTrueFalse(main); break;
    case "written":    renderWritten(main); break;
    case "weak":       renderWeak(main); break;
    case "exam":       renderExam(main); break;
    case "stats":      renderStats(main); break;
    default:           renderDashboard(main);
  }
}

/* ---------- agregace pokroku ---------- */
function progressCounts(questions) {
  const list = questions || QUESTIONS;
  let know = 0, repeat = 0, dont = 0, none = 0;
  list.forEach(q => {
    const s = store.status[q.id];
    if (s === "know") know++;
    else if (s === "repeat") repeat++;
    else if (s === "dont") dont++;
    else none++;
  });
  return { know, repeat, dont, none, total: list.length };
}
function updateMiniBar() {
  const c = progressCounts();
  const pct = c.total ? Math.round((c.know / c.total) * 100) : 0;
  const fill = $("#miniBarFill"), lbl = $("#miniBarLabel");
  if (fill) fill.style.width = pct + "%";
  if (lbl) lbl.textContent = pct + " %";
}

/* ============================================================
   DASHBOARD
   ============================================================ */
function renderDashboard(main) {
  const c = progressCounts();
  const pctKnow = c.total ? Math.round((c.know / c.total) * 100) : 0;
  const acc = store.stats.total ? Math.round((store.stats.correct / store.stats.total) * 100) : null;
  const weakCat = weakestCategory();
  const last = store.lastPracticed
    ? new Date(store.lastPracticed).toLocaleString("cs-CZ", { day: "numeric", month: "numeric", year: "numeric", hour: "2-digit", minute: "2-digit" })
    : "zatím nikdy";

  main.innerHTML = `
    <div class="view-head">
      <h1>Dashboard</h1>
      <p>Tvůj přehled přípravy na zkoušku z PJV / Javy.</p>
    </div>
    <div class="dash-grid">
      <div class="stat-card"><div class="label">Otázek celkem</div><div class="value accent">${c.total}</div><div class="sub">${CATEGORIES.length} kategorií</div></div>
      <div class="stat-card"><div class="label">Naučeno</div><div class="value good">${c.know}</div><div class="sub">${pctKnow} % z celku</div></div>
      <div class="stat-card"><div class="label">Neumím / opakovat</div><div class="value bad">${c.dont}<span style="font-size:18px;color:var(--warn)"> / ${c.repeat}</span></div><div class="sub">${c.none} neoznačeno</div></div>
      <div class="stat-card"><div class="label">Úspěšnost testů</div><div class="value ${acc==null?'':acc>=70?'good':acc>=40?'warn':'bad'}">${acc==null?'—':acc+' %'}</div><div class="sub">${store.stats.total} odpovědí</div></div>
    </div>

    <div class="progress-block">
      <h3>Celkový pokrok</h3>
      <div class="bar">
        <div class="bar-seg know"   style="width:${pct(c.know,c.total)}%"></div>
        <div class="bar-seg repeat" style="width:${pct(c.repeat,c.total)}%"></div>
        <div class="bar-seg dont"   style="width:${pct(c.dont,c.total)}%"></div>
      </div>
      <div class="legend">
        <span><i style="background:var(--good)"></i> Umím (${c.know})</span>
        <span><i style="background:var(--warn)"></i> Opakovat (${c.repeat})</span>
        <span><i style="background:var(--bad)"></i> Neumím (${c.dont})</span>
        <span><i style="background:var(--bg-3)"></i> Neoznačeno (${c.none})</span>
      </div>
    </div>

    <div class="quick-actions">
      <button class="quick-btn" data-go="flashcards">▤ Flashcards</button>
      <button class="quick-btn" data-go="abcd">▦ ABCD test</button>
      <button class="quick-btn" data-go="truefalse">✓✗ Pravda/Nepravda</button>
      <button class="quick-btn" data-go="weak">★ Procvičit slabá místa (${weakQuestions().length})</button>
      <button class="quick-btn" data-go="exam">⏱ Náhodný test</button>
    </div>

    <div class="view-head" style="margin-bottom:12px"><h1 style="font-size:17px">Pokrok podle kategorií</h1>
    <p>Poslední procvičování: ${last}. ${weakCat ? "Nejslabší kategorie: <b style='color:var(--bad)'>" + escapeHtml(CAT_MAP[weakCat].label) + "</b>." : ""}</p></div>
    <div class="cat-progress-grid" id="dashCats"></div>
  `;

  const grid = $("#dashCats", main);
  CATEGORIES.forEach(cat => {
    const qs = QUESTIONS.filter(q => q.category === cat.key);
    const cc = progressCounts(qs);
    const p = pct(cc.know, cc.total);
    const card = el("div", "cat-progress-card");
    card.innerHTML = `
      <div class="cphead"><span class="cat-dot" style="background:${cat.color}"></span>
        <span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${escapeHtml(cat.label)}</span>
        <span class="cat-count">${cc.know}/${cc.total}</span></div>
      <div class="bar"><div class="bar-seg know" style="width:${p}%"></div>
        <div class="bar-seg repeat" style="width:${pct(cc.repeat,cc.total)}%"></div>
        <div class="bar-seg dont" style="width:${pct(cc.dont,cc.total)}%"></div></div>`;
    card.addEventListener("click", () => { currentCategory = cat.key; renderMode("overview"); syncCategoryUI(); });
    grid.appendChild(card);
  });

  main.querySelectorAll("[data-go]").forEach(b =>
    b.addEventListener("click", () => renderMode(b.dataset.go)));
}
function pct(a, b) { return b ? (a / b) * 100 : 0; }

function weakestCategory() {
  let worst = null, worstScore = 2;
  CATEGORIES.forEach(cat => {
    const qs = QUESTIONS.filter(q => q.category === cat.key);
    const cc = progressCounts(qs);
    const st = store.stats.byCat[cat.key];
    let score;
    if (st && st.total >= 2) score = st.correct / st.total;          // dle testů
    else score = cc.total ? cc.know / cc.total : 1;                   // dle naučenosti
    const touched = (st && st.total) || cc.know || cc.dont || cc.repeat;
    if (touched && score < worstScore) { worstScore = score; worst = cat.key; }
  });
  return worst;
}

/* ============================================================
   KOMPLETNÍ PŘEHLED
   ============================================================ */
let overviewState = { showAnswers: true, statusFilter: "all" };

function filteredQuestions() {
  const term = searchTerm.toLowerCase();
  return QUESTIONS.filter(q => {
    if (currentCategory !== "all" && q.category !== currentCategory) return false;
    if (overviewState.statusFilter !== "all") {
      const s = store.status[q.id] || "none";
      if (overviewState.statusFilter === "none" && s !== "none") return false;
      if (overviewState.statusFilter !== "none" && s !== overviewState.statusFilter) return false;
    }
    if (term) {
      const hay = (q.question + " " + q.answer + " " + (q.keywords || []).join(" ")).toLowerCase();
      if (!hay.includes(term)) return false;
    }
    return true;
  });
}

function renderOverview(main) {
  main.innerHTML = `
    <div class="view-head"><h1>Kompletní přehled</h1>
      <p>Všechny otázky a odpovědi. Klikni na otázku pro rozbalení.</p></div>
    <div class="controls">
      <button class="pill" id="toggleAnswers"></button>
      <button class="pill" id="expandAll">Rozbalit vše</button>
      <button class="pill" id="collapseAll">Sbalit vše</button>
      <select id="statusFilter">
        <option value="all">Všechny stavy</option>
        <option value="know">Umím</option>
        <option value="repeat">Opakovat</option>
        <option value="dont">Neumím</option>
        <option value="none">Neoznačené</option>
      </select>
      <div class="spacer"></div>
      <span class="count-tag" id="overviewCount"></span>
    </div>
    <div id="overviewList"></div>`;

  $("#statusFilter", main).value = overviewState.statusFilter;
  updateToggleAnswersBtn();
  $("#toggleAnswers", main).addEventListener("click", () => {
    overviewState.showAnswers = !overviewState.showAnswers;
    updateToggleAnswersBtn();
    renderOverviewList();
  });
  $("#expandAll", main).addEventListener("click", () =>
    main.querySelectorAll(".q-card").forEach(c => c.classList.add("open")));
  $("#collapseAll", main).addEventListener("click", () =>
    main.querySelectorAll(".q-card").forEach(c => c.classList.remove("open")));
  $("#statusFilter", main).addEventListener("change", e => {
    overviewState.statusFilter = e.target.value; renderOverviewList();
  });

  renderOverviewList();
}
function updateToggleAnswersBtn() {
  const b = $("#toggleAnswers");
  if (b) b.textContent = overviewState.showAnswers ? "Skrýt odpovědi" : "Zobrazit odpovědi";
}

function renderOverviewList() {
  const wrap = $("#overviewList");
  if (!wrap) return;
  const list = filteredQuestions();
  $("#overviewCount").textContent = list.length + " otázek";
  wrap.innerHTML = "";
  if (!list.length) {
    wrap.innerHTML = `<div class="empty"><div class="big">🔍</div>Žádná otázka neodpovídá filtru.</div>`;
    return;
  }
  // seskupit podle kategorie (v pořadí CATEGORIES)
  CATEGORIES.forEach(cat => {
    const qs = list.filter(q => q.category === cat.key);
    if (!qs.length) return;
    const group = el("div", "cat-group");
    group.appendChild(el("div", "cat-group-head",
      `<span class="cat-dot" style="background:${cat.color}"></span><h2>${escapeHtml(cat.label)}</h2>
       <span class="cat-count" style="margin-left:auto">${qs.length}</span>`));
    qs.forEach(q => group.appendChild(buildQuestionCard(q)));
    wrap.appendChild(group);
  });
}

function buildQuestionCard(q) {
  const st = store.status[q.id];
  const card = el("div", "q-card" + (st ? " status-" + st : ""));
  const badges = [];
  if (q.type === "trap") badges.push(`<span class="badge type-trap">chyták</span>`);
  if (q.type === "code") badges.push(`<span class="badge type-code">kód</span>`);
  badges.push(`<span class="badge diff-${q.difficulty}">${q.difficulty}</span>`);
  if (st) badges.push(`<span class="badge status ${st}">${statusLabel(st)}</span>`);

  const head = el("div", "q-head");
  head.innerHTML = `
    <span class="q-num">#${q.id}</span>
    <span class="q-title">${highlight(q.question, searchTerm)}</span>
    <span class="q-badges">${badges.join("")}</span>
    <span class="chev">▸</span>`;
  head.addEventListener("click", () => card.classList.toggle("open"));

  const body = el("div", "q-body");
  if (overviewState.showAnswers) {
    body.innerHTML = `<div class="q-section-label">Odpověď</div>
      <div class="answer-text">${highlight(q.answer, searchTerm)}</div>`;
  } else {
    body.innerHTML = `<div class="answer-text" style="color:var(--text-mute)">Odpovědi jsou skryté (zapni „Zobrazit odpovědi").</div>`;
  }
  if (overviewState.showAnswers && q.codeExample) {
    body.appendChild(el("div", "q-section-label", "Příklad kódu"));
    body.appendChild(el("pre", "code", escapeHtml(q.codeExample)));
  }
  if (overviewState.showAnswers && q.commonMistakes) {
    body.appendChild(el("div", "mistake-box", `<b>Časté chyby:</b> ${escapeHtml(q.commonMistakes)}`));
  }
  if (q.keywords && q.keywords.length) {
    const kw = el("div", "keywords");
    q.keywords.forEach(k => kw.appendChild(el("span", "kw", "#" + escapeHtml(k))));
    body.appendChild(kw);
  }
  // status tlačítka
  const row = el("div", "status-row");
  ["know", "repeat", "dont"].forEach(s => {
    const b = el("button", "status-btn " + s + (st === s ? " sel" : ""), statusLabel(s));
    b.addEventListener("click", ev => {
      ev.stopPropagation();
      setStatus(q.id, s);
      const ns = store.status[q.id];
      card.className = "q-card open" + (ns ? " status-" + ns : "");
      row.querySelectorAll(".status-btn").forEach(x =>
        x.classList.toggle("sel", x.classList.contains(store.status[q.id] || "__")));
      // refresh badge
      const badgeWrap = head.querySelector(".q-badges");
      const base = badges.slice(0, badges.length).join("");
    });
    row.appendChild(b);
  });
  body.appendChild(row);
  card.appendChild(head);
  card.appendChild(body);
  return card;
}

/* ============================================================
   FLASHCARDS
   ============================================================ */
let flash = { deck: [], idx: 0, flipped: false, onlyDont: false, cat: "all" };

function buildFlashDeck() {
  let list = QUESTIONS.filter(q => flash.cat === "all" || q.category === flash.cat);
  if (flash.onlyDont) {
    list = list.filter(q => store.status[q.id] === "dont" || store.status[q.id] === "repeat" || store.wrong[q.id]);
  }
  flash.deck = list.map(q => q.id);
  if (flash.idx >= flash.deck.length) flash.idx = 0;
}

function renderFlashcards(main) {
  if (flash.cat === "all" && currentCategory !== "all") flash.cat = currentCategory;
  buildFlashDeck();
  main.innerHTML = `
    <div class="view-head"><h1>Flashcards</h1>
      <p>Klikni na kartičku pro otočení. Procházej otázky a označuj, co umíš.</p></div>
    <div class="flash-wrap">
      <div class="flash-toolbar">
        <select id="flashCat"></select>
        <button class="pill ${flash.onlyDont ? "active" : ""}" id="flashOnlyDont">Jen neumím / opakovat</button>
        <div class="spacer"></div>
        <button class="btn sm" id="flashShuffle">🔀 Zamíchat</button>
      </div>
      <div id="flashArea"></div>
    </div>`;

  const sel = $("#flashCat", main);
  sel.innerHTML = `<option value="all">Všechny kategorie</option>` +
    CATEGORIES.map(c => `<option value="${c.key}">${escapeHtml(c.label)}</option>`).join("");
  sel.value = flash.cat;
  sel.addEventListener("change", e => { flash.cat = e.target.value; flash.idx = 0; flash.flipped = false; buildFlashDeck(); renderFlashArea(); });
  $("#flashOnlyDont", main).addEventListener("click", e => {
    flash.onlyDont = !flash.onlyDont; flash.idx = 0; flash.flipped = false;
    e.target.classList.toggle("active", flash.onlyDont); buildFlashDeck(); renderFlashArea();
  });
  $("#flashShuffle", main).addEventListener("click", () => {
    flash.deck = shuffle(flash.deck); flash.idx = 0; flash.flipped = false; renderFlashArea();
  });
  renderFlashArea();
}

function renderFlashArea() {
  const area = $("#flashArea");
  if (!area) return;
  if (!flash.deck.length) {
    area.innerHTML = `<div class="empty"><div class="big">🎉</div>Žádné kartičky pro tento filtr.${flash.onlyDont ? " Zřejmě už vše umíš!" : ""}</div>`;
    return;
  }
  const q = QUESTIONS.find(x => x.id === flash.deck[flash.idx]);
  const st = store.status[q.id];
  const cat = CAT_MAP[q.category];
  area.innerHTML = `
    <div class="flash-progress">Kartička ${flash.idx + 1} / ${flash.deck.length}${st ? " · " + statusLabel(st) : ""}</div>
    <div class="flashcard ${flash.flipped ? "flipped" : ""}" id="theCard">
      <div class="flash-inner">
        <div class="flash-face front">
          <div class="flash-meta"><span class="cat-dot" style="background:${cat.color}"></span>
            <span class="badge diff-${q.difficulty}">${q.difficulty}</span>
            ${q.type === "trap" ? '<span class="badge type-trap">chyták</span>' : ""}
            <span style="color:var(--text-mute);font-size:12px">#${q.id}</span></div>
          <div class="flash-q">${escapeHtml(q.question)}</div>
          <div class="flash-hint">Klikni pro odpověď ▸</div>
        </div>
        <div class="flash-face back">
          <div class="flash-meta"><span style="color:var(--accent);font-size:11px;text-transform:uppercase;letter-spacing:.06em">Odpověď</span></div>
          <div class="flash-answer">${escapeHtml(q.answer)}${q.codeExample ? '<pre class="code">' + escapeHtml(q.codeExample) + "</pre>" : ""}${q.commonMistakes ? '<div class="mistake-box"><b>Pozor:</b> ' + escapeHtml(q.commonMistakes) + "</div>" : ""}</div>
        </div>
      </div>
    </div>
    <div class="flash-nav">
      <button class="btn" id="fPrev">◂ Předchozí</button>
      <button class="btn good" id="fKnow">Umím</button>
      <button class="btn bad" id="fDont">Neumím</button>
      <button class="btn" id="fRandom">🎲 Náhodná</button>
      <button class="btn primary" id="fNext">Další ▸</button>
    </div>`;

  $("#theCard").addEventListener("click", () => {
    flash.flipped = !flash.flipped;
    $("#theCard").classList.toggle("flipped", flash.flipped);
  });
  $("#fPrev").addEventListener("click", () => flashGo(-1));
  $("#fNext").addEventListener("click", () => flashGo(1));
  $("#fRandom").addEventListener("click", () => {
    flash.idx = Math.floor(Math.random() * flash.deck.length); flash.flipped = false; renderFlashArea();
  });
  $("#fKnow").addEventListener("click", () => { setStatus(q.id, "know"); markPracticed(); toast("Označeno: Umím"); flashGo(1); });
  $("#fDont").addEventListener("click", () => { setStatus(q.id, "dont"); markPracticed(); toast("Označeno: Neumím"); flashGo(1); });
}
function flashGo(dir) {
  if (!flash.deck.length) return;
  flash.idx = (flash.idx + dir + flash.deck.length) % flash.deck.length;
  flash.flipped = false;
  renderFlashArea();
}

/* ============================================================
   ABCD TEST (průběžný)
   ============================================================ */
let abcd = { deck: [], idx: 0, answered: false, cat: "all", current: null };

function abcdEligible(cat) {
  return QUESTIONS.filter(q =>
    (cat === "all" || q.category === cat) &&
    q.type !== "trueFalse");
}
function renderAbcd(main) {
  if (abcd.cat === "all" && currentCategory !== "all") abcd.cat = currentCategory;
  abcd.deck = shuffle(abcdEligible(abcd.cat).map(q => q.id));
  abcd.idx = 0; abcd.answered = false;
  main.innerHTML = `
    <div class="view-head"><h1>ABCD test</h1>
      <p>Vyber správnou odpověď. Po odpovědi uvidíš správné řešení a vysvětlení.</p></div>
    <div class="quiz-wrap">
      <div class="flash-toolbar"><select id="abcdCat"></select><div class="spacer"></div>
        <span class="count-tag" id="abcdScore"></span></div>
      <div class="quiz-progress-bar"><div id="abcdBar"></div></div>
      <div id="abcdArea"></div>
    </div>`;
  const sel = $("#abcdCat", main);
  sel.innerHTML = `<option value="all">Všechny kategorie</option>` +
    CATEGORIES.map(c => `<option value="${c.key}">${escapeHtml(c.label)}</option>`).join("");
  sel.value = abcd.cat;
  sel.addEventListener("change", e => { abcd.cat = e.target.value; renderAbcd(main); });
  abcdSession = { answered: 0, correct: 0 };
  renderAbcdQuestion();
}
let abcdSession = { answered: 0, correct: 0 };

function renderAbcdQuestion() {
  const area = $("#abcdArea");
  if (!area) return;
  $("#abcdBar").style.width = (abcd.deck.length ? (abcd.idx / abcd.deck.length) * 100 : 0) + "%";
  $("#abcdScore").textContent = `${abcd.idx}/${abcd.deck.length} · skóre ${abcdSession.correct}/${abcdSession.answered}`;
  if (abcd.idx >= abcd.deck.length) {
    const pctv = abcdSession.answered ? Math.round(abcdSession.correct / abcdSession.answered * 100) : 0;
    area.innerHTML = `<div class="result-card"><div class="result-score ${pctv>=70?'good':pctv>=40?'mid':'bad'}">${pctv} %</div>
      <div class="result-sub">${abcdSession.correct} z ${abcdSession.answered} správně</div>
      <div style="margin-top:18px"><button class="btn primary" id="abcdAgain">Znovu</button></div></div>`;
    $("#abcdAgain").addEventListener("click", () => renderAbcd($("#main")));
    return;
  }
  const q = QUESTIONS.find(x => x.id === abcd.deck[abcd.idx]);
  const { options, correct } = getQuizOptions(q);
  abcd.current = { q, options, correct };
  abcd.answered = false;
  const cat = CAT_MAP[q.category];
  area.innerHTML = `
    <div class="quiz-card">
      <div class="flash-meta"><span class="cat-dot" style="background:${cat.color}"></span>
        <span style="color:var(--text-dim);font-size:12px">${escapeHtml(cat.label)}</span>
        <span class="badge diff-${q.difficulty}" style="margin-left:auto">${q.difficulty}</span></div>
      <div class="quiz-q">${escapeHtml(q.question)}</div>
      <div class="options" id="abcdOptions"></div>
      <div class="feedback" id="abcdFb"></div>
      <div class="quiz-actions">
        <button class="btn" id="abcdSkip">Přeskočit</button>
        <button class="btn primary" id="abcdNext" disabled>Další ▸</button>
      </div>
    </div>`;
  const optWrap = $("#abcdOptions");
  const keys = ["A", "B", "C", "D", "E"];
  options.forEach((opt, i) => {
    const b = el("button", "option");
    b.innerHTML = `<span class="key">${keys[i]}</span><span>${escapeHtml(opt)}</span>`;
    b.addEventListener("click", () => abcdAnswer(i));
    optWrap.appendChild(b);
  });
  $("#abcdSkip").addEventListener("click", () => { abcd.idx++; renderAbcdQuestion(); });
  $("#abcdNext").addEventListener("click", () => { abcd.idx++; renderAbcdQuestion(); });
}

function abcdAnswer(chosen) {
  if (abcd.answered) return;
  abcd.answered = true;
  const { q, correct } = abcd.current;
  const isCorrect = chosen === correct;
  abcdSession.answered++;
  if (isCorrect) abcdSession.correct++;
  recordAnswer(q, isCorrect);
  const opts = document.querySelectorAll("#abcdOptions .option");
  opts.forEach((o, i) => {
    o.disabled = true;
    if (i === correct) o.classList.add("correct");
    if (i === chosen && !isCorrect) o.classList.add("wrong");
  });
  const fb = $("#abcdFb");
  fb.className = "feedback show " + (isCorrect ? "ok" : "no");
  fb.innerHTML = `<div class="fb-title">${isCorrect ? "✓ Správně!" : "✗ Špatně"}</div>
    <div class="fb-text">${escapeHtml(q.answer)}${q.commonMistakes ? "\n\nPozor: " + escapeHtml(q.commonMistakes) : ""}</div>`;
  $("#abcdNext").disabled = false;
  $("#abcdScore").textContent = `${abcd.idx + 1}/${abcd.deck.length} · skóre ${abcdSession.correct}/${abcdSession.answered}`;
}

/* ============================================================
   PRAVDA / NEPRAVDA
   ============================================================ */
let tf = { deck: [], idx: 0, answered: false, correct: 0, total: 0 };

function renderTrueFalse(main) {
  tf.deck = shuffle(TRUE_FALSE.map((_, i) => i));
  tf.idx = 0; tf.answered = false; tf.correct = 0; tf.total = 0;
  main.innerHTML = `
    <div class="view-head"><h1>Pravda / Nepravda</h1>
      <p>Typické chytáky. Rozhodni, zda tvrzení platí, a přečti si vysvětlení.</p></div>
    <div class="quiz-wrap">
      <div class="flash-toolbar"><div class="spacer"></div><span class="count-tag" id="tfScore"></span></div>
      <div class="quiz-progress-bar"><div id="tfBar"></div></div>
      <div id="tfArea"></div>
    </div>`;
  renderTfQuestion();
}
function renderTfQuestion() {
  const area = $("#tfArea");
  if (!area) return;
  $("#tfBar").style.width = (tf.idx / tf.deck.length) * 100 + "%";
  $("#tfScore").textContent = `${tf.idx}/${tf.deck.length} · skóre ${tf.correct}/${tf.total}`;
  if (tf.idx >= tf.deck.length) {
    const p = tf.total ? Math.round(tf.correct / tf.total * 100) : 0;
    area.innerHTML = `<div class="result-card"><div class="result-score ${p>=70?'good':p>=40?'mid':'bad'}">${p} %</div>
      <div class="result-sub">${tf.correct} z ${tf.total} správně</div>
      <div style="margin-top:18px"><button class="btn primary" id="tfAgain">Znovu</button></div></div>`;
    $("#tfAgain").addEventListener("click", () => renderTrueFalse($("#main")));
    return;
  }
  const item = TRUE_FALSE[tf.deck[tf.idx]];
  const cat = CAT_MAP[item.category];
  tf.answered = false;
  area.innerHTML = `
    <div class="quiz-card">
      <div class="flash-meta"><span class="cat-dot" style="background:${cat ? cat.color : '#888'}"></span>
        <span style="color:var(--text-dim);font-size:12px">${cat ? escapeHtml(cat.label) : ""}</span></div>
      <div class="tf-statement">„${escapeHtml(item.statement)}"</div>
      <div class="tf-buttons">
        <button class="btn good" id="tfTrue">✓ Pravda</button>
        <button class="btn bad" id="tfFalse">✗ Nepravda</button>
      </div>
      <div class="feedback" id="tfFb"></div>
      <div class="quiz-actions"><button class="btn primary" id="tfNext" disabled>Další ▸</button></div>
    </div>`;
  $("#tfTrue").addEventListener("click", () => tfAnswer(true));
  $("#tfFalse").addEventListener("click", () => tfAnswer(false));
  $("#tfNext").addEventListener("click", () => { tf.idx++; renderTfQuestion(); });
}
function tfAnswer(choice) {
  if (tf.answered) return;
  tf.answered = true;
  const item = TRUE_FALSE[tf.deck[tf.idx]];
  const isCorrect = choice === item.isTrue;
  tf.total++; if (isCorrect) tf.correct++;
  markPracticed();
  $("#tfTrue").disabled = true; $("#tfFalse").disabled = true;
  const fb = $("#tfFb");
  fb.className = "feedback show " + (isCorrect ? "ok" : "no");
  fb.innerHTML = `<div class="fb-title">${isCorrect ? "✓ Správně!" : "✗ Špatně"} — tvrzení je ${item.isTrue ? "PRAVDIVÉ" : "NEPRAVDIVÉ"}</div>
    <div class="fb-text">${escapeHtml(item.explanation)}</div>`;
  $("#tfNext").disabled = false;
  $("#tfScore").textContent = `${tf.idx + 1}/${tf.deck.length} · skóre ${tf.correct}/${tf.total}`;
}

/* ============================================================
   PSANÁ ODPOVĚĎ
   ============================================================ */
let written = { deck: [], idx: 0, revealed: false, cat: "all" };

function renderWritten(main) {
  if (written.cat === "all" && currentCategory !== "all") written.cat = currentCategory;
  written.deck = shuffle(QUESTIONS.filter(q => written.cat === "all" || q.category === written.cat).map(q => q.id));
  written.idx = 0; written.revealed = false;
  main.innerHTML = `
    <div class="view-head"><h1>Psaná odpověď</h1>
      <p>Napiš odpověď vlastními slovy, pak porovnej se vzorovou a ohodnoť se.</p></div>
    <div class="quiz-wrap">
      <div class="flash-toolbar"><select id="wrCat"></select><div class="spacer"></div>
        <span class="count-tag" id="wrProg"></span></div>
      <div id="wrArea"></div>
    </div>`;
  const sel = $("#wrCat", main);
  sel.innerHTML = `<option value="all">Všechny kategorie</option>` +
    CATEGORIES.map(c => `<option value="${c.key}">${escapeHtml(c.label)}</option>`).join("");
  sel.value = written.cat;
  sel.addEventListener("change", e => { written.cat = e.target.value; renderWritten(main); });
  renderWrQuestion();
}
function renderWrQuestion() {
  const area = $("#wrArea");
  if (!area) return;
  if (written.idx >= written.deck.length) {
    area.innerHTML = `<div class="result-card"><div class="big" style="font-size:40px">✅</div>
      <div class="result-sub">Prošel jsi všechny otázky v této sadě.</div>
      <div style="margin-top:18px"><button class="btn primary" id="wrAgain">Znovu zamíchat</button></div></div>`;
    $("#wrAgain").addEventListener("click", () => renderWritten($("#main")));
    return;
  }
  $("#wrProg").textContent = `${written.idx + 1}/${written.deck.length}`;
  const q = QUESTIONS.find(x => x.id === written.deck[written.idx]);
  const cat = CAT_MAP[q.category];
  written.revealed = false;
  area.innerHTML = `
    <div class="quiz-card">
      <div class="flash-meta"><span class="cat-dot" style="background:${cat.color}"></span>
        <span style="color:var(--text-dim);font-size:12px">${escapeHtml(cat.label)}</span>
        <span class="badge diff-${q.difficulty}" style="margin-left:auto">${q.difficulty}</span></div>
      <div class="quiz-q">${escapeHtml(q.question)}</div>
      <textarea class="written-answer-box" id="wrInput" placeholder="Napiš svoji odpověď…"></textarea>
      <div class="quiz-actions" style="justify-content:flex-start">
        <button class="btn primary" id="wrReveal">Zobrazit vzorovou odpověď</button>
      </div>
      <div class="model-answer" id="wrModel">
        <div class="ma-label">Vzorová odpověď</div>
        <div class="answer-text">${escapeHtml(q.answer)}</div>
        ${q.codeExample ? '<pre class="code">' + escapeHtml(q.codeExample) + "</pre>" : ""}
        ${q.commonMistakes ? '<div class="mistake-box"><b>Časté chyby:</b> ' + escapeHtml(q.commonMistakes) + "</div>" : ""}
        <div class="ma-label" style="margin-top:16px">Jak ti to šlo?</div>
        <div class="self-grade">
          <button class="btn good" data-grade="know">Uměl jsem</button>
          <button class="btn warn" data-grade="repeat">Skoro</button>
          <button class="btn bad" data-grade="dont">Neuměl jsem</button>
        </div>
      </div>
    </div>`;
  $("#wrReveal").addEventListener("click", () => {
    written.revealed = true;
    $("#wrModel").classList.add("show");
    $("#wrReveal").disabled = true;
  });
  area.querySelectorAll("[data-grade]").forEach(b =>
    b.addEventListener("click", () => {
      const g = b.dataset.grade;
      setStatus(q.id, g);
      if (g === "dont") store.wrong[q.id] = true; else delete store.wrong[q.id];
      saveStore(); markPracticed();
      toast("Uloženo: " + statusLabel(g));
      written.idx++; renderWrQuestion();
    }));
}

/* ============================================================
   SLABÁ MÍSTA
   ============================================================ */
function weakQuestions() {
  return QUESTIONS.filter(q =>
    store.status[q.id] === "dont" || store.status[q.id] === "repeat" || store.wrong[q.id]);
}
function renderWeak(main) {
  const list = weakQuestions();
  main.innerHTML = `
    <div class="view-head"><h1>Slabá místa</h1>
      <p>Otázky označené „neumím" / „opakovat" nebo na které jsi v testu odpověděl špatně.</p></div>`;
  if (!list.length) {
    main.innerHTML += `<div class="empty"><div class="big">🌟</div>Zatím nemáš žádná slabá místa.<br>
      Označ otázky v přehledu nebo si udělej test.</div>`;
    return;
  }
  const bar = el("div", "quick-actions");
  bar.innerHTML = `<button class="quick-btn" data-w="flash">▤ Procvičit jako flashcards</button>
    <button class="quick-btn" data-w="abcd">▦ ABCD jen ze slabých</button>
    <span class="count-tag" style="align-self:center">${list.length} otázek</span>`;
  main.appendChild(bar);
  bar.querySelector('[data-w="flash"]').addEventListener("click", () => {
    flash = { deck: [], idx: 0, flipped: false, onlyDont: true, cat: "all" };
    renderMode("flashcards");
  });
  bar.querySelector('[data-w="abcd"]').addEventListener("click", () => startWeakAbcd(list));

  const wrap = el("div");
  const prevSearch = searchTerm; searchTerm = "";
  list.forEach(q => wrap.appendChild(buildQuestionCard(q)));
  searchTerm = prevSearch;
  main.appendChild(wrap);
}
function startWeakAbcd(list) {
  renderAbcd($("#main"));
  abcd.cat = "all";
  abcd.deck = shuffle(list.map(q => q.id));
  abcd.idx = 0; abcdSession = { answered: 0, correct: 0 };
  const sel = $("#abcdCat"); if (sel) sel.style.display = "none";
  renderAbcdQuestion();
}

/* ============================================================
   NÁHODNÝ TEST
   ============================================================ */
let exam = { count: 10, cat: "all", mode: "mix", queue: [], idx: 0, correct: 0, total: 0, mistakes: [], answered: false };

function renderExam(main) {
  main.innerHTML = `
    <div class="view-head"><h1>Náhodný test</h1>
      <p>Nastav si test podle počtu otázek, kategorie a režimu.</p></div>
    <div class="setup-card">
      <div class="setup-row"><label>Počet otázek</label>
        <div class="opt-row" id="exCount">
          ${[5,10,15,20,30].map(n => `<button class="opt-chip ${n===exam.count?'active':''}" data-n="${n}">${n}</button>`).join("")}
        </div></div>
      <div class="setup-row"><label>Kategorie</label>
        <select id="exCat"><option value="all">Všechny kategorie</option>
          ${CATEGORIES.map(c => `<option value="${c.key}">${escapeHtml(c.label)}</option>`).join("")}</select></div>
      <div class="setup-row"><label>Režim</label>
        <div class="opt-row" id="exMode">
          <button class="opt-chip ${exam.mode==='abcd'?'active':''}" data-m="abcd">ABCD</button>
          <button class="opt-chip ${exam.mode==='truefalse'?'active':''}" data-m="truefalse">Pravda/Nepravda</button>
          <button class="opt-chip ${exam.mode==='mix'?'active':''}" data-m="mix">Mix</button>
          <button class="opt-chip ${exam.mode==='written'?'active':''}" data-m="written">Psaná odpověď</button>
        </div></div>
      <button class="btn primary" id="exStart" style="margin-top:6px">Spustit test ▸</button>
    </div>`;
  $("#exCat", main).value = exam.cat;
  main.querySelectorAll("#exCount .opt-chip").forEach(b => b.addEventListener("click", () => {
    exam.count = +b.dataset.n;
    main.querySelectorAll("#exCount .opt-chip").forEach(x => x.classList.toggle("active", x === b));
  }));
  main.querySelectorAll("#exMode .opt-chip").forEach(b => b.addEventListener("click", () => {
    exam.mode = b.dataset.m;
    main.querySelectorAll("#exMode .opt-chip").forEach(x => x.classList.toggle("active", x === b));
  }));
  $("#exCat", main).addEventListener("change", e => exam.cat = e.target.value);
  $("#exStart", main).addEventListener("click", startExam);
}

function startExam() {
  const pool = QUESTIONS.filter(q => exam.cat === "all" || q.category === exam.cat);
  const tfPool = TRUE_FALSE.filter(t => exam.cat === "all" || t.category === exam.cat);
  let items = [];
  if (exam.mode === "abcd" || exam.mode === "written") {
    items = sample(pool, exam.count).map(q => ({ kind: exam.mode, q }));
  } else if (exam.mode === "truefalse") {
    items = sample(tfPool, Math.min(exam.count, tfPool.length)).map(t => ({ kind: "tf", item: t }));
  } else { // mix
    const half = Math.ceil(exam.count / 2);
    const a = sample(pool, half).map(q => ({ kind: "abcd", q }));
    const t = sample(tfPool, Math.min(exam.count - half, tfPool.length)).map(x => ({ kind: "tf", item: x }));
    items = shuffle(a.concat(t));
  }
  exam.queue = items;
  exam.idx = 0; exam.correct = 0; exam.total = 0; exam.mistakes = [];
  renderExamQuestion();
}

function renderExamQuestion() {
  const main = $("#main");
  if (exam.idx >= exam.queue.length) return renderExamResult();
  exam.answered = false;
  const item = exam.queue[exam.idx];
  main.innerHTML = `
    <div class="view-head"><h1>Náhodný test</h1>
      <p>Otázka ${exam.idx + 1} z ${exam.queue.length}</p></div>
    <div class="quiz-wrap">
      <div class="quiz-progress-bar"><div style="width:${exam.idx / exam.queue.length * 100}%"></div></div>
      <div id="exArea"></div>
    </div>`;
  if (item.kind === "tf") renderExamTf(item.item);
  else if (item.kind === "written") renderExamWritten(item.q);
  else renderExamAbcd(item.q);
}

function examNextBtn() {
  return `<div class="quiz-actions"><button class="btn primary" id="exNext" disabled>${exam.idx + 1 >= exam.queue.length ? "Dokončit test" : "Další ▸"}</button></div>`;
}
function bindExNext() {
  $("#exNext").addEventListener("click", () => { exam.idx++; renderExamQuestion(); });
}

function renderExamAbcd(q) {
  const { options, correct } = getQuizOptions(q);
  const cat = CAT_MAP[q.category];
  $("#exArea").innerHTML = `
    <div class="quiz-card">
      <div class="flash-meta"><span class="cat-dot" style="background:${cat.color}"></span>
        <span style="color:var(--text-dim);font-size:12px">${escapeHtml(cat.label)}</span></div>
      <div class="quiz-q">${escapeHtml(q.question)}</div>
      <div class="options" id="exOpts"></div>
      <div class="feedback" id="exFb"></div>${examNextBtn()}</div>`;
  const keys = ["A", "B", "C", "D", "E"];
  options.forEach((opt, i) => {
    const b = el("button", "option");
    b.innerHTML = `<span class="key">${keys[i]}</span><span>${escapeHtml(opt)}</span>`;
    b.addEventListener("click", () => {
      if (exam.answered) return; exam.answered = true;
      const ok = i === correct;
      exam.total++; if (ok) exam.correct++; else exam.mistakes.push({ q: q.question, a: q.answer });
      recordAnswer(q, ok);
      document.querySelectorAll("#exOpts .option").forEach((o, j) => {
        o.disabled = true;
        if (j === correct) o.classList.add("correct");
        if (j === i && !ok) o.classList.add("wrong");
      });
      const fb = $("#exFb"); fb.className = "feedback show " + (ok ? "ok" : "no");
      fb.innerHTML = `<div class="fb-title">${ok ? "✓ Správně" : "✗ Špatně"}</div><div class="fb-text">${escapeHtml(q.answer)}</div>`;
      $("#exNext").disabled = false;
    });
    $("#exOpts").appendChild(b);
  });
  bindExNext();
}

function renderExamTf(item) {
  const cat = CAT_MAP[item.category];
  $("#exArea").innerHTML = `
    <div class="quiz-card">
      <div class="flash-meta"><span class="cat-dot" style="background:${cat ? cat.color : '#888'}"></span>
        <span style="color:var(--text-dim);font-size:12px">${cat ? escapeHtml(cat.label) : ""}</span></div>
      <div class="tf-statement">„${escapeHtml(item.statement)}"</div>
      <div class="tf-buttons"><button class="btn good" id="exTrue">✓ Pravda</button>
        <button class="btn bad" id="exFalse">✗ Nepravda</button></div>
      <div class="feedback" id="exFb"></div>${examNextBtn()}</div>`;
  const answer = (choice) => {
    if (exam.answered) return; exam.answered = true;
    const ok = choice === item.isTrue;
    exam.total++; if (ok) exam.correct++; else exam.mistakes.push({ q: item.statement, a: (item.isTrue ? "PRAVDA. " : "NEPRAVDA. ") + item.explanation });
    markPracticed();
    $("#exTrue").disabled = true; $("#exFalse").disabled = true;
    const fb = $("#exFb"); fb.className = "feedback show " + (ok ? "ok" : "no");
    fb.innerHTML = `<div class="fb-title">${ok ? "✓ Správně" : "✗ Špatně"} — ${item.isTrue ? "PRAVDA" : "NEPRAVDA"}</div><div class="fb-text">${escapeHtml(item.explanation)}</div>`;
    $("#exNext").disabled = false;
  };
  $("#exTrue").addEventListener("click", () => answer(true));
  $("#exFalse").addEventListener("click", () => answer(false));
  bindExNext();
}

function renderExamWritten(q) {
  const cat = CAT_MAP[q.category];
  $("#exArea").innerHTML = `
    <div class="quiz-card">
      <div class="flash-meta"><span class="cat-dot" style="background:${cat.color}"></span>
        <span style="color:var(--text-dim);font-size:12px">${escapeHtml(cat.label)}</span></div>
      <div class="quiz-q">${escapeHtml(q.question)}</div>
      <textarea class="written-answer-box" id="exInput" placeholder="Napiš svoji odpověď…"></textarea>
      <div class="quiz-actions" style="justify-content:flex-start"><button class="btn primary" id="exReveal">Zobrazit vzorovou odpověď</button></div>
      <div class="model-answer" id="exModel"><div class="ma-label">Vzorová odpověď</div>
        <div class="answer-text">${escapeHtml(q.answer)}</div>
        ${q.codeExample ? '<pre class="code">' + escapeHtml(q.codeExample) + "</pre>" : ""}
        <div class="ma-label" style="margin-top:16px">Jak ti to šlo?</div>
        <div class="self-grade">
          <button class="btn good" data-g="know">Uměl jsem</button>
          <button class="btn warn" data-g="repeat">Skoro</button>
          <button class="btn bad" data-g="dont">Neuměl jsem</button>
        </div></div>
    </div>`;
  $("#exReveal").addEventListener("click", () => { $("#exModel").classList.add("show"); $("#exReveal").disabled = true; });
  $("#exArea").querySelectorAll("[data-g]").forEach(b => b.addEventListener("click", () => {
    if (exam.answered) return; exam.answered = true;
    const g = b.dataset.g;
    const ok = g === "know";
    exam.total++; if (ok) exam.correct++; else exam.mistakes.push({ q: q.question, a: q.answer });
    setStatus(q.id, g);
    if (g === "dont") { store.wrong[q.id] = true; saveStore(); }
    markPracticed();
    exam.idx++; renderExamQuestion();
  }));
}

function renderExamResult() {
  const main = $("#main");
  const p = exam.total ? Math.round(exam.correct / exam.total * 100) : 0;
  let html = `
    <div class="view-head"><h1>Výsledek testu</h1></div>
    <div class="result-card">
      <div class="result-score ${p>=70?'good':p>=40?'mid':'bad'}">${p} %</div>
      <div class="result-sub">${exam.correct} z ${exam.total} správně</div>
      <div style="margin-top:18px;display:flex;gap:10px;justify-content:center;flex-wrap:wrap">
        <button class="btn primary" id="exRestart">Nový test</button>
        <button class="btn" id="exToWeak">Procvičit chyby</button>
      </div>
    </div>`;
  if (exam.mistakes.length) {
    html += `<div class="view-head" style="margin:24px 0 12px"><h1 style="font-size:17px">Chyby (${exam.mistakes.length})</h1></div>
      <div class="mistakes-list">` +
      exam.mistakes.map(m => `<div class="mistake-item"><div class="mi-q">${escapeHtml(m.q)}</div>
        <div class="mi-a"><b>Správně:</b> ${escapeHtml(m.a)}</div></div>`).join("") + `</div>`;
  } else if (exam.total) {
    html += `<div class="empty"><div class="big">🏆</div>Bez jediné chyby. Skvělé!</div>`;
  }
  main.innerHTML = html;
  $("#exRestart").addEventListener("click", () => renderExam(main));
  const w = $("#exToWeak"); if (w) w.addEventListener("click", () => renderMode("weak"));
}

/* ============================================================
   STATISTIKY
   ============================================================ */
function renderStats(main) {
  const c = progressCounts();
  const acc = store.stats.total ? Math.round(store.stats.correct / store.stats.total * 100) : null;
  const weakCat = weakestCategory();
  const last = store.lastPracticed
    ? new Date(store.lastPracticed).toLocaleString("cs-CZ", { day: "numeric", month: "numeric", year: "numeric", hour: "2-digit", minute: "2-digit" })
    : "zatím nikdy";

  main.innerHTML = `
    <div class="view-head"><h1>Statistiky</h1><p>Přehled tvého pokroku a výsledků testů.</p></div>
    <div class="dash-grid">
      <div class="stat-card"><div class="label">Otázek celkem</div><div class="value accent">${c.total}</div></div>
      <div class="stat-card"><div class="label">Naučeno</div><div class="value good">${c.know}</div><div class="sub">${pct(c.know,c.total).toFixed(0)} %</div></div>
      <div class="stat-card"><div class="label">Nenaučeno</div><div class="value bad">${c.total - c.know}</div><div class="sub">neumím/opakovat/neoznačeno</div></div>
      <div class="stat-card"><div class="label">Úspěšnost testů</div><div class="value ${acc==null?'':acc>=70?'good':acc>=40?'warn':'bad'}">${acc==null?'—':acc+' %'}</div><div class="sub">${store.stats.total} odpovědí</div></div>
      <div class="stat-card"><div class="label">Nejslabší kategorie</div><div class="value warn" style="font-size:17px;line-height:1.3">${weakCat?escapeHtml(CAT_MAP[weakCat].label):'—'}</div></div>
      <div class="stat-card"><div class="label">Poslední procvičování</div><div class="value" style="font-size:15px;line-height:1.4;margin-top:10px">${last}</div></div>
    </div>

    <div class="stats-bars">
      <h3 style="font-size:15px;margin-bottom:16px">Naučenost podle kategorií</h3>
      <div id="statKnow"></div>
    </div>
    <div class="stats-bars">
      <h3 style="font-size:15px;margin-bottom:16px">Úspěšnost testů podle kategorií</h3>
      <div id="statAcc"></div>
    </div>`;

  const knowWrap = $("#statKnow", main);
  CATEGORIES.forEach(cat => {
    const qs = QUESTIONS.filter(q => q.category === cat.key);
    const cc = progressCounts(qs);
    const p = Math.round(pct(cc.know, cc.total));
    knowWrap.appendChild(statBar(cat, p, `${cc.know}/${cc.total}`, cat.color));
  });

  const accWrap = $("#statAcc", main);
  let any = false;
  CATEGORIES.forEach(cat => {
    const st = store.stats.byCat[cat.key];
    if (!st || !st.total) return;
    any = true;
    const p = Math.round(st.correct / st.total * 100);
    accWrap.appendChild(statBar(cat, p, `${st.correct}/${st.total}`, p >= 70 ? "var(--good)" : p >= 40 ? "var(--warn)" : "var(--bad)"));
  });
  if (!any) accWrap.innerHTML = `<div style="color:var(--text-mute);font-size:13px">Zatím žádné testové odpovědi. Udělej si ABCD test nebo náhodný test.</div>`;
}
function statBar(cat, percent, valText, color) {
  const row = el("div", "statbar-row");
  row.innerHTML = `<span class="sb-name" title="${escapeHtml(cat.label)}">${escapeHtml(cat.label)}</span>
    <span class="statbar-track"><span class="statbar-fill" style="width:${percent}%;background:${color}"></span></span>
    <span class="sb-val">${percent}% · ${valText}</span>`;
  return row;
}

/* ============================================================
   SIDEBAR / kategorie / vyhledávání
   ============================================================ */
function buildCategorySidebar() {
  const wrap = $("#categoryList");
  wrap.innerHTML = "";
  const allBtn = el("button", "cat-item" + (currentCategory === "all" ? " active" : ""));
  allBtn.innerHTML = `<span class="cat-dot" style="background:linear-gradient(135deg,#4c8dff,#36c98a)"></span>
    <span class="cat-name">Všechny kategorie</span><span class="cat-count">${QUESTIONS.length}</span>`;
  allBtn.dataset.cat = "all";
  wrap.appendChild(allBtn);
  CATEGORIES.forEach(cat => {
    const n = QUESTIONS.filter(q => q.category === cat.key).length;
    const b = el("button", "cat-item" + (currentCategory === cat.key ? " active" : ""));
    b.innerHTML = `<span class="cat-dot" style="background:${cat.color}"></span>
      <span class="cat-name" title="${escapeHtml(cat.label)}">${escapeHtml(cat.label)}</span><span class="cat-count">${n}</span>`;
    b.dataset.cat = cat.key;
    wrap.appendChild(b);
  });
  wrap.querySelectorAll(".cat-item").forEach(b => b.addEventListener("click", () => {
    currentCategory = b.dataset.cat;
    syncCategoryUI();
    if (currentMode !== "overview" && currentMode !== "flashcards" && currentMode !== "written") {
      renderMode("overview");
    } else {
      renderMode(currentMode);
    }
  }));
}
function syncCategoryUI() {
  document.querySelectorAll(".cat-item").forEach(b =>
    b.classList.toggle("active", b.dataset.cat === currentCategory));
}

function closeSidebar() {
  $("#sidebar").classList.remove("open");
}

/* ============================================================
   INIT
   ============================================================ */
function init() {
  buildCategorySidebar();
  updateMiniBar();

  document.querySelectorAll(".mode-btn").forEach(b =>
    b.addEventListener("click", () => renderMode(b.dataset.mode)));

  // vyhledávání
  let searchT = null;
  $("#globalSearch").addEventListener("input", e => {
    searchTerm = e.target.value;
    clearTimeout(searchT);
    searchT = setTimeout(() => {
      if (searchTerm && currentMode !== "overview") {
        renderMode("overview");
      } else if (currentMode === "overview") {
        renderOverviewList();
      }
    }, 180);
  });

  // mobilní menu
  $("#menuToggle").addEventListener("click", () => $("#sidebar").classList.toggle("open"));
  $("#sidebarOverlay").addEventListener("click", closeSidebar);

  // reset
  $("#resetProgress").addEventListener("click", () => {
    if (confirm("Opravdu vynulovat veškerý pokrok (naučené otázky i statistiky testů)?")) {
      store = defaultStore();
      saveStore();
      updateMiniBar();
      renderMode("dashboard");
      toast("Pokrok byl vynulován");
    }
  });

  // klávesové zkratky pro flashcards
  document.addEventListener("keydown", e => {
    if (currentMode !== "flashcards") return;
    if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA" || e.target.tagName === "SELECT") return;
    if (e.key === "ArrowRight") flashGo(1);
    else if (e.key === "ArrowLeft") flashGo(-1);
    else if (e.key === " ") { e.preventDefault(); const c = $("#theCard"); if (c) c.click(); }
  });

  renderMode("dashboard");
}

document.addEventListener("DOMContentLoaded", init);
