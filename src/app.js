import { CYFUN_PILLARS, MISSIONS, RANKS } from './gameData.js';

const state = { mission: 0, score: 0, answered: false, log: [], badges: new Set() };
const app = typeof document === 'undefined' ? null : document.querySelector('#app');

export function getRank(score) {
  return RANKS.filter((rank) => score >= rank.min).at(-1);
}

export function scoreAnswer(isCorrect, streak) {
  return isCorrect ? 100 + Math.min(streak, 3) * 20 : -20;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function renderPillars(active) {
  return CYFUN_PILLARS.map((pillar) => `<span class="pill ${pillar === active ? 'active' : ''}">${pillar}</span>`).join('');
}

function renderProgress() {
  const percent = Math.round((state.mission / MISSIONS.length) * 100);
  return `<div class="progress" aria-label="Game progress"><span style="width:${percent}%"></span></div>`;
}

function render() {
  const completed = state.mission >= MISSIONS.length;
  const mission = MISSIONS[state.mission] ?? MISSIONS.at(-1);
  const rank = getRank(state.score);
  app.innerHTML = `
    <section class="hero">
      <p class="eyebrow">Belgium NIS2 / CyFun training game</p>
      <h1>CyFun Quest: Save the Kingdom of Proportional Controls</h1>
      <p>Ten playful missions help young consultants separate sound NIS2 advice from obvious nonsense and tempting almost-truths.</p>
      <div class="scoreboard"><strong>${state.score}</strong> points · <strong>${rank.name}</strong> · Award: ${rank.award}</div>
      ${renderProgress()}
    </section>
    <section class="board">
      <aside>
        <h2>CyFun map</h2>
        <div class="pills">${renderPillars(completed ? '' : mission.pillar)}</div>
        <h3>How to play</h3>
        <ol><li>Read the client scenario.</li><li>Choose the best consulting advice.</li><li>Debrief: what evidence would prove it?</li></ol>
        <h3>Awards cabinet</h3>
        <div class="awards">${RANKS.map((r) => `<span class="award ${state.score >= r.min ? 'won' : ''}">${r.award}</span>`).join('')}</div>
        <p class="note">Learning aid only, not legal advice. Validate client deliverables against official CCB/Safeonweb and CyFun materials.</p>
      </aside>
      <section class="card">${completed ? renderVictory() : renderMission(mission)}</section>
    </section>`;
  bind();
}

function renderMission(mission) {
  return `<p class="mission-count">Mission ${state.mission + 1}/${MISSIONS.length} · ${mission.pillar}</p>
    <h2>${escapeHtml(mission.title)}</h2><p>${escapeHtml(mission.briefing)}</p><p class="joke">${escapeHtml(mission.joke)}</p><h3>${escapeHtml(mission.question)}</h3>
    <div class="answers">${mission.answers.map((answer, i) => `<button class="${answer.type}" data-answer="${i}"><span>${answer.type}</span>${escapeHtml(answer.text)}</button>`).join('')}</div>
    <div id="feedback" aria-live="polite"></div>`;
}

function renderVictory() {
  const rank = getRank(state.score);
  const correct = state.log.filter(Boolean).length;
  const perfect = correct === MISSIONS.length;
  return `<h2>Debrief complete 🎉</h2><p>Your team scored <strong>${state.score}</strong> points, answered <strong>${correct}/${MISSIONS.length}</strong> correctly, and earned <strong>${rank.name}</strong>.</p>
  <p>Award unlocked: <strong>${rank.award}</strong>${perfect ? ' plus the invisible Belgian Compliance Unicorn 🦄.' : '.'}</p><h3>Facilitator challenge</h3><p>Ask each consultant to name one artifact they would request: risk register, access review, supplier assurance, alert evidence, incident report, restore test, or board minutes.</p>
  <button data-restart="true">Play again</button>`;
}

function bind() {
  document.querySelectorAll('[data-answer]').forEach((button) => button.addEventListener('click', () => answer(Number(button.dataset.answer))));
  document.querySelector('[data-restart]')?.addEventListener('click', () => { state.mission = 0; state.score = 0; state.log = []; state.badges.clear(); if (app) render(); });
}

function answer(index) {
  const mission = MISSIONS[state.mission];
  const selected = mission.answers[index];
  const previousCorrect = state.log.slice(-3).filter(Boolean).length;
  const delta = scoreAnswer(selected.correct, previousCorrect);
  state.score = Math.max(0, state.score + delta);
  state.log.push(selected.correct);
  document.querySelector('#feedback').innerHTML = `<p class="${selected.correct ? 'good' : 'bad'}">${escapeHtml(selected.feedback)} (${delta > 0 ? '+' : ''}${delta} points)</p><button data-next="true">${selected.correct ? 'Next mission' : 'Continue anyway'}</button>`;
  document.querySelectorAll('[data-answer]').forEach((button) => (button.disabled = true));
  document.querySelector('[data-next]').addEventListener('click', () => { state.mission += 1; if (app) render(); });
}

if (app) render();
