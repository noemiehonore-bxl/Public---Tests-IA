import test from 'node:test';
import assert from 'node:assert/strict';
import { ASSESSMENT_AREAS, CYFUN_FUNCTIONS, MATURITY_LEVELS, ROADMAP_STEPS } from '../src/gameData.js';
import { calculateAverageMaturity, getMaturityLevel, getPriorityAreas } from '../src/app.js';

test('assessment content covers every CyFun function with board questions and evidence', () => {
  assert.equal(ASSESSMENT_AREAS.length, CYFUN_FUNCTIONS.length);
  assert.deepEqual(new Set(ASSESSMENT_AREAS.map((area) => area.function)), new Set(CYFUN_FUNCTIONS));
  for (const area of ASSESSMENT_AREAS) {
    assert.ok(area.boardQuestion.includes('?'), area.id);
    assert.ok(area.evidence.length >= 4, area.id);
    assert.ok(area.indicators.length >= 3, area.id);
  }
});

test('maturity helpers summarize scores for CISO prioritisation', () => {
  assert.equal(MATURITY_LEVELS.length, 5);
  assert.equal(getMaturityLevel(4.6).name, 'Optimised');
  assert.equal(calculateAverageMaturity({ identify: 2, protect: 3, detect: 4 }), 3);
  assert.equal(calculateAverageMaturity({}), 1);
  assert.deepEqual(getPriorityAreas({ identify: 4, protect: 1, detect: 2, respond: 5, recover: 3 }).map((area) => area.id), ['protect', 'detect']);
});

test('roadmap provides an executive assessment sequence', () => {
  assert.ok(ROADMAP_STEPS.length >= 5);
  assert.match(ROADMAP_STEPS.at(-1), /leadership/i);
});
