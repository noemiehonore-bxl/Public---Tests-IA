import { ASSESSMENT_AREAS, CYFUN_FUNCTIONS, MATURITY_LEVELS, ROADMAP_STEPS } from './gameData.js';

const app = typeof document === 'undefined' ? null : document.querySelector('#app');

export function getMaturityLevel(score) {
  const boundedScore = Math.max(1, Math.min(5, Math.round(score)));
  return MATURITY_LEVELS.find((level) => level.level === boundedScore);
}

export function calculateAverageMaturity(scores) {
  const values = Object.values(scores).map(Number).filter((value) => Number.isFinite(value));
  if (!values.length) return 1;
  return Number((values.reduce((total, value) => total + value, 0) / values.length).toFixed(1));
}

export function getPriorityAreas(scores) {
  return ASSESSMENT_AREAS
    .map((area) => ({ ...area, score: Number(scores[area.id] ?? 1) }))
    .sort((a, b) => a.score - b.score || a.function.localeCompare(b.function))
    .slice(0, 2);
}

const scores = Object.fromEntries(ASSESSMENT_AREAS.map((area) => [area.id, 3]));

function renderFunctionPills() {
  return CYFUN_FUNCTIONS.map((name) => `<span class="pill">${name}</span>`).join('');
}

function renderMaturityScale() {
  return MATURITY_LEVELS.map((level) => `
    <article class="level-card">
      <strong>${level.level}. ${level.name}</strong>
      <p>${level.signal}</p>
    </article>`).join('');
}

function renderArea(area) {
  return `
    <article class="assessment-card" id="${area.id}">
      <div>
        <p class="eyebrow">${area.function}</p>
        <h3>${area.title}</h3>
        <p class="board-question">${area.boardQuestion}</p>
      </div>
      <label>Current maturity
        <select data-score="${area.id}" aria-label="${area.function} maturity score">
          ${MATURITY_LEVELS.map((level) => `<option value="${level.level}" ${scores[area.id] === level.level ? 'selected' : ''}>${level.level} - ${level.name}</option>`).join('')}
        </select>
      </label>
      <div class="two-column">
        <div><h4>Evidence to request</h4><ul>${area.evidence.map((item) => `<li>${item}</li>`).join('')}</ul></div>
        <div><h4>What good looks like</h4><ul>${area.indicators.map((item) => `<li>${item}</li>`).join('')}</ul></div>
      </div>
    </article>`;
}

function renderResults() {
  const average = calculateAverageMaturity(scores);
  const level = getMaturityLevel(average);
  const priorities = getPriorityAreas(scores);
  return `
    <div class="result-number">${average}</div>
    <h3>${level.name} maturity</h3>
    <p>${level.signal}</p>
    <h4>First executive priorities</h4>
    <ol>${priorities.map((area) => `<li><strong>${area.function}:</strong> ${area.title} <span>(${area.score}/5)</span></li>`).join('')}</ol>`;
}

function render() {
  app.innerHTML = `
    <section class="hero">
      <p class="eyebrow">CyFun maturity assessment for CISOs</p>
      <h1>Assess CyberFundamentals maturity with evidence, risk, and board-ready priorities.</h1>
      <p class="hero-copy">Use this static guide to structure a CyFun maturity conversation: define scope, inspect evidence across Identify, Protect, Detect, Respond, and Recover, then turn gaps into an executive roadmap.</p>
      <div class="pills">${renderFunctionPills()}</div>
    </section>

    <section class="layout">
      <aside class="panel sticky">
        <h2>How to run the assessment</h2>
        <ol>${ROADMAP_STEPS.map((step) => `<li>${step}</li>`).join('')}</ol>
        <p class="note">This website is an assessment aid, not legal advice. Validate scope, assurance requirements, and evidence expectations against official Belgian CCB / Safeonweb CyFun and NIS2 materials.</p>
      </aside>

      <section class="panel results" aria-live="polite">
        ${renderResults()}
      </section>
    </section>

    <section class="scale">
      <h2>Maturity scale</h2>
      <div class="level-grid">${renderMaturityScale()}</div>
    </section>

    <section class="assessment-grid">
      <h2>CyFun function review</h2>
      ${ASSESSMENT_AREAS.map(renderArea).join('')}
    </section>`;

  bind();
}

function bind() {
  document.querySelectorAll('[data-score]').forEach((select) => {
    select.addEventListener('change', (event) => {
      scores[event.target.dataset.score] = Number(event.target.value);
      document.querySelector('.results').innerHTML = renderResults();
    });
  });
}

if (app) render();
