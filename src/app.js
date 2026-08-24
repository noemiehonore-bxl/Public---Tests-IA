import { CHECKPOINTS, DAILY_PATH, LEVELS, MODULES } from './gameData.js';

const STORAGE_KEY = 'deutsch-neustart-progress';
const app = typeof document === 'undefined' ? null : document.querySelector('#app');

export const state = {
  checkpoint: 0,
  score: 0,
  answers: [],
  completedDays: new Set(loadProgress())
};

export function getLevel(score) {
  return LEVELS.filter((level) => score >= level.min).at(-1);
}

export function scoreAnswer(isCorrect, streak) {
  return isCorrect ? 80 + Math.min(streak, 3) * 15 : 10;
}

export function getCompletionRate(completedDays, totalDays = DAILY_PATH.length) {
  return Math.round((completedDays.size / totalDays) * 100);
}

function loadProgress() {
  if (typeof localStorage === 'undefined') return [];
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '[]');
  } catch {
    return [];
  }
}

function saveProgress() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...state.completedDays]));
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function renderProgressBar(value, label) {
  return `<div class="progress" aria-label="${escapeHtml(label)}"><span style="width:${value}%"></span></div>`;
}

function renderModulePills(activeModule) {
  return MODULES.map((module) => `<span class="pill ${module === activeModule ? 'active' : ''}">${escapeHtml(module)}</span>`).join('');
}

function render() {
  const done = state.checkpoint >= CHECKPOINTS.length;
  const checkpoint = CHECKPOINTS[state.checkpoint] ?? CHECKPOINTS.at(-1);
  const level = getLevel(state.score);
  const correct = state.answers.filter(Boolean).length;
  const completion = getCompletionRate(state.completedDays);

  app.innerHTML = `
    <section class="hero">
      <p class="eyebrow">Allemand · reprise B2 après 17 ans</p>
      <h1>Deutsch Neustart: retrouver ton niveau avec un parcours quotidien</h1>
      <p>Révise la grammaire, la conjugaison, le vocabulaire de la vie courante et l'allemand business avec des micro-objectifs mesurables.</p>
      <div class="scoreboard">
        <strong>${state.score}</strong> points · <strong>${level.name}</strong> · ${correct}/${CHECKPOINTS.length} quiz · ${completion}% du plan hebdo
      </div>
      ${renderProgressBar(done ? 100 : Math.round((state.checkpoint / CHECKPOINTS.length) * 100), 'Progression du diagnostic')}
    </section>
    <section class="dashboard">
      <aside>
        <h2>Tableau de bord</h2>
        <div class="pills">${renderModulePills(done ? '' : checkpoint.module)}</div>
        <p class="note"><strong>Conseil actuel :</strong> ${escapeHtml(level.advice)}</p>
        <h3>Routine recommandée</h3>
        <ol>
          <li>15 min de grammaire active.</li>
          <li>10 min de conjugaison à voix haute.</li>
          <li>15 mots utiles avec phrase exemple.</li>
          <li>10 min business: e-mail, réunion ou pitch.</li>
          <li>2 min pour cocher le jour terminé.</li>
        </ol>
      </aside>
      <section class="card">${done ? renderResult() : renderCheckpoint(checkpoint)}</section>
    </section>
    <section class="path" aria-labelledby="path-title">
      <div class="section-heading">
        <p class="eyebrow">Chemin à suivre</p>
        <h2 id="path-title">Plan de reprise sur 7 jours, à répéter en cycles</h2>
      </div>
      <div class="days">${DAILY_PATH.map(renderDay).join('')}</div>
    </section>`;
  bind();
}

function renderCheckpoint(checkpoint) {
  return `<p class="mission-count">Diagnostic ${state.checkpoint + 1}/${CHECKPOINTS.length} · ${escapeHtml(checkpoint.module)}</p>
    <h2>${escapeHtml(checkpoint.title)}</h2>
    <h3>${escapeHtml(checkpoint.prompt)}</h3>
    <div class="answers">${checkpoint.answers.map((answer, index) => `<button data-answer="${index}"><span>${answer.correct ? 'juste' : 'piège'}</span>${escapeHtml(answer.text)}</button>`).join('')}</div>
    <div id="feedback" aria-live="polite"></div>`;
}

function renderResult() {
  const level = getLevel(state.score);
  return `<h2>Diagnostic terminé 🎯</h2>
    <p>Score: <strong>${state.score}</strong> points. Niveau estimé: <strong>${level.name}</strong>.</p>
    <p>${escapeHtml(level.advice)} Recommence le diagnostic chaque semaine: l'objectif est de répondre plus vite et de produire des phrases plus longues.</p>
    <button data-restart="quiz">Refaire le diagnostic</button>`;
}

function renderDay(day) {
  const completed = state.completedDays.has(day.day);
  return `<article class="day-card ${completed ? 'complete' : ''}">
    <div class="day-top"><span>Jour ${day.day}</span><button data-day="${day.day}">${completed ? '✓ fait' : 'Marquer fait'}</button></div>
    <h3>${escapeHtml(day.theme)}</h3>
    <ul>
      <li><strong>Grammaire :</strong> ${escapeHtml(day.grammar)}</li>
      <li><strong>Conjugaison :</strong> ${escapeHtml(day.conjugation)}</li>
      <li><strong>Vocabulaire :</strong> ${escapeHtml(day.vocabulary)}</li>
      <li><strong>Business :</strong> ${escapeHtml(day.business)}</li>
    </ul>
    <p class="task"><strong>Production :</strong> ${escapeHtml(day.task)}</p>
  </article>`;
}

function bind() {
  document.querySelectorAll('[data-answer]').forEach((button) => button.addEventListener('click', () => answer(Number(button.dataset.answer))));
  document.querySelector('[data-restart]')?.addEventListener('click', () => { state.checkpoint = 0; state.score = 0; state.answers = []; render(); });
  document.querySelectorAll('[data-day]').forEach((button) => button.addEventListener('click', () => toggleDay(Number(button.dataset.day))));
}

function answer(index) {
  const checkpoint = CHECKPOINTS[state.checkpoint];
  const selected = checkpoint.answers[index];
  const streak = state.answers.slice(-3).filter(Boolean).length;
  const delta = scoreAnswer(selected.correct, streak);
  state.score += delta;
  state.answers.push(selected.correct);
  document.querySelector('#feedback').innerHTML = `<p class="${selected.correct ? 'good' : 'bad'}">${escapeHtml(selected.feedback)} (+${delta} points)</p><button data-next="true">Continuer</button>`;
  document.querySelectorAll('[data-answer]').forEach((button) => (button.disabled = true));
  document.querySelector('[data-next]').addEventListener('click', () => { state.checkpoint += 1; render(); });
}

function toggleDay(day) {
  if (state.completedDays.has(day)) state.completedDays.delete(day);
  else state.completedDays.add(day);
  saveProgress();
  render();
}

if (app) render();
