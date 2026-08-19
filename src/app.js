import { CYFUN_PILLARS, MISSIONS, RANKS } from './gameData.js';

const state = { mission: 0, score: 0, answered: false, log: [] };
const app = typeof document === 'undefined' ? null : document.querySelector('#app');

export function getRank(score) {
  return RANKS.filter((rank) => score >= rank.min).at(-1);
}

export function scoreAnswer(isCorrect, streak) {
  return isCorrect ? 100 + Math.min(streak, 3) * 20 : -20;
}

function renderPillars(active) {
  return CYFUN_PILLARS.map((pillar) => `<span class="pill ${pillar === active ? 'active' : ''}">${pillar}</span>`).join('');
}

function render() {
  const mission = MISSIONS[state.mission];
  const rank = getRank(state.score);
  const completed = state.mission >= MISSIONS.length;
  app.innerHTML = `
    <section class="hero">
      <p class="eyebrow">Belgium NIS2 / CyFun training game</p>
      <h1>CyFun Quest: Save the Kingdom of Proportional Controls</h1>
      <p>Train junior consultants to connect Belgian NIS2 obligations with CyFun pillars through short missions, jokes, scoring, ranks, and awards.</p>
      <div class="scoreboard"><strong>${state.score}</strong> points · <strong>${rank.name}</strong> · Award: ${rank.award}</div>
    </section>
    <section class="board">
      <aside>
        <h2>CyFun map</h2>
        <div class="pills">${renderPillars(mission?.pillar)}</div>
        <h3>How to play</h3>
        <ol><li>Read the client scenario.</li><li>Pick the best consulting advice.</li><li>Debrief as a team: what evidence would prove it?</li></ol>
        <p class="note">Content is a learning aid, not legal advice. Validate against official CCB/Safeonweb and CyFun materials before client delivery.</p>
      </aside>
      <section class="card">${completed ? renderVictory() : renderMission(mission)}</section>
    </section>`;
  bind();
}

function renderMission(mission) {
  return `<p class="mission-count">Mission ${state.mission + 1}/${MISSIONS.length} · ${mission.pillar}</p>
    <h2>${mission.title}</h2><p>${mission.briefing}</p><p class="joke">${mission.joke}</p><h3>${mission.question}</h3>
    <div class="answers">${mission.answers.map((answer, i) => `<button data-answer="${i}">${answer.text}</button>`).join('')}</div>
    <div id="feedback" aria-live="polite"></div>`;
}

function renderVictory() {
  const rank = getRank(state.score);
  return `<h2>Debrief complete 🎉</h2><p>Your team finished with <strong>${state.score}</strong> points and the rank <strong>${rank.name}</strong>.</p>
  <p>Award unlocked: <strong>${rank.award}</strong>.</p><h3>Facilitator challenge</h3><p>Ask each consultant to name one artifact they would request: risk register, incident report template, access review, backup test proof, or board minutes.</p>
  <button data-restart="true">Play again</button>`;
}

function bind() {
  document.querySelectorAll('[data-answer]').forEach((button) => button.addEventListener('click', () => answer(Number(button.dataset.answer))));
  document.querySelector('[data-restart]')?.addEventListener('click', () => { state.mission = 0; state.score = 0; state.log = []; if (app) render(); });
}

function answer(index) {
  const mission = MISSIONS[state.mission];
  const selected = mission.answers[index];
  const previousCorrect = state.log.slice(-3).filter(Boolean).length;
  const delta = scoreAnswer(selected.correct, previousCorrect);
  state.score = Math.max(0, state.score + delta);
  state.log.push(selected.correct);
  document.querySelector('#feedback').innerHTML = `<p class="${selected.correct ? 'good' : 'bad'}">${selected.feedback} (${delta > 0 ? '+' : ''}${delta} points)</p><button data-next="true">${selected.correct ? 'Next mission' : 'Continue anyway'}</button>`;
  document.querySelectorAll('[data-answer]').forEach((b) => (b.disabled = true));
  document.querySelector('[data-next]').addEventListener('click', () => { state.mission += 1; if (app) render(); });
}

if (app) render();
