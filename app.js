// ============================================================
//  app.js — logika aplikacji Księga Zagadek
// ============================================================

let currentDiff = 'easy';
let currentIdx  = 0;
let solved = {
  easy:   new Set(),
  medium: new Set(),
  hard:   new Set()
};

// ─── Particles ───────────────────────────────────────────────
function createParticles() {
  const container = document.getElementById('particles');
  for (let i = 0; i < 18; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.style.left              = Math.random() * 100 + '%';
    p.style.animationDuration = (8 + Math.random() * 12) + 's';
    p.style.animationDelay    = (Math.random() * 10) + 's';
    p.style.width  = p.style.height = (1 + Math.random() * 2) + 'px';
    container.appendChild(p);
  }
}

// ─── Difficulty selection ────────────────────────────────────
function selectDifficulty(diff) {
  currentDiff = diff;
  document.querySelectorAll('.diff-btn').forEach(b => b.classList.remove('active'));
  document.querySelector('.diff-btn.' + diff).classList.add('active');
  renderRiddleList();
}

// ─── Home: render riddle list ────────────────────────────────
function renderRiddleList() {
  const riddles = riddlesData[currentDiff];
  let html = '<div class="riddle-list">';

  riddles.forEach((r, i) => {
    const isSolved = solved[currentDiff].has(i);
    html += `
      <div class="riddle-card${isSolved ? ' solved' : ''}" onclick="openRiddle(${i})">
        <span class="riddle-num">0${i + 1}</span>
        <div class="riddle-preview">
          <strong>${r.title}</strong>
          <span>${r.text.substring(0, 65)}…</span>
        </div>
        ${isSolved
          ? '<span class="solved-badge">✓ Rozwiązana</span>'
          : '<span class="riddle-arrow">›</span>'
        }
      </div>`;
  });

  html += '</div>';
  document.getElementById('riddle-list-container').innerHTML = html;
}

// ─── Open riddle page ────────────────────────────────────────
function openRiddle(idx) {
  currentIdx = idx;
  renderRiddlePage();
  document.getElementById('page-home').classList.remove('active');
  document.getElementById('page-riddle').classList.add('active');
  window.scrollTo(0, 0);
}

// ─── Render riddle page content ──────────────────────────────
function renderRiddlePage() {
  const riddles    = riddlesData[currentDiff];
  const r          = riddles[currentIdx];
  const letters    = ['A', 'B', 'C', 'D'];
  const diffLabels = { easy: 'LVL.1', medium: 'LVL.2', hard: 'LVL.3' };
  const diffClass  = { easy: 'badge-easy', medium: 'badge-medium', hard: 'badge-hard' };

  // Header
  document.getElementById('riddle-num-label').textContent =
    `TASK_${String(currentIdx + 1).padStart(2,'0')} OF ${riddles.length}`;

  const badge = document.getElementById('difficulty-badge');
  badge.textContent = diffLabels[currentDiff];
  badge.className   = 'difficulty-badge ' + diffClass[currentDiff];

  // Text
  document.getElementById('riddle-text').textContent = r.text;

  // Answers
  let answersHtml = '';
  r.answers.forEach((a, i) => {
    answersHtml += `
      <button class="answer-btn" onclick="checkAnswer(${i})" id="ans-${i}">
        <span class="answer-letter">${letters[i]}</span>${a}
      </button>`;
  });
  document.getElementById('answers-grid').innerHTML = answersHtml;

  // Hint & success reset
  const hintBox = document.getElementById('hint-box');
  hintBox.textContent = '🕯️ ' + r.hint;
  hintBox.classList.remove('show');
  document.getElementById('success-msg').classList.remove('show');

  // Nav
  document.getElementById('progress-text').textContent =
    `${currentIdx + 1} / ${riddles.length}`;
  document.getElementById('prev-btn').disabled = currentIdx === 0;
  document.getElementById('next-btn').disabled = currentIdx === riddles.length - 1;

  // Mark already-solved
  if (solved[currentDiff].has(currentIdx)) {
    markSolved();
  }
}

// ─── Check answer ────────────────────────────────────────────
function checkAnswer(idx) {
  const r    = riddlesData[currentDiff][currentIdx];
  const btns = document.querySelectorAll('.answer-btn');

  btns.forEach(b => (b.disabled = true));

  if (idx === r.correct) {
    btns[idx].classList.add('correct');
    solved[currentDiff].add(currentIdx);

    document.getElementById('success-text').textContent = r.success;
    setTimeout(() => {
      document.getElementById('success-msg').classList.add('show');
    }, 300);
  } else {
    btns[idx].classList.add('wrong');
    btns[r.correct].classList.add('correct');

    setTimeout(() => {
      btns[idx].classList.remove('wrong');
      btns.forEach(b => (b.disabled = false));
    }, 900);
  }
}

// ─── Mark riddle as already solved ───────────────────────────
function markSolved() {
  const r    = riddlesData[currentDiff][currentIdx];
  const btns = document.querySelectorAll('.answer-btn');

  btns.forEach((b, i) => {
    b.disabled = true;
    if (i === r.correct) b.classList.add('correct');
  });

  document.getElementById('success-text').textContent = r.success;
  document.getElementById('success-msg').classList.add('show');
}

// ─── Toggle hint ─────────────────────────────────────────────
function showHint() {
  document.getElementById('hint-box').classList.toggle('show');
}

// ─── Navigate between riddles ────────────────────────────────
function navigate(dir) {
  currentIdx += dir;
  renderRiddlePage();
  window.scrollTo(0, 0);
}

// ─── Back to home ────────────────────────────────────────────
function goHome() {
  document.getElementById('page-riddle').classList.remove('active');
  document.getElementById('page-home').classList.add('active');
  renderRiddleList();
}

// ─── Init ────────────────────────────────────────────────────
createParticles();
selectDifficulty('easy');
