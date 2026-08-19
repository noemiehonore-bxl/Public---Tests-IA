import test from 'node:test';
import assert from 'node:assert/strict';
import { MISSIONS, CYFUN_PILLARS, RANKS } from '../src/gameData.js';
import { getRank, scoreAnswer } from '../src/app.js';

test('missions cover core CyFun learning pillars with a correct answer each', () => {
  assert.equal(MISSIONS.length, 10);
  assert.deepEqual(new Set(MISSIONS.map((mission) => mission.pillar)), new Set(CYFUN_PILLARS));
  for (const mission of MISSIONS) {
    assert.equal(mission.answers.filter((answer) => answer.correct).length, 1, mission.id);
    assert.equal(mission.answers.length, 3);
    assert.deepEqual(new Set(mission.answers.map((answer) => answer.type)), new Set(['right', 'false', 'close']));
    assert.ok(mission.joke.length > 20);
  }
});

test('ranking and scoring reward correct streaks without negative totals requirement', () => {
  assert.equal(getRank(0).name, RANKS[0].name);
  assert.equal(getRank(1100).name, RANKS.at(-1).name);
  assert.equal(scoreAnswer(true, 2), 140);
  assert.equal(scoreAnswer(false, 2), -20);
});
