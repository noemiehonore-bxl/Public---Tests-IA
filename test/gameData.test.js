import test from 'node:test';
import assert from 'node:assert/strict';
import { CHECKPOINTS, DAILY_PATH, LEVELS, MODULES } from '../src/gameData.js';
import { getCompletionRate, getLevel, scoreAnswer } from '../src/app.js';

test('checkpoints cover the German restart modules with one correct answer each', () => {
  assert.equal(CHECKPOINTS.length, 5);
  assert.deepEqual(new Set(CHECKPOINTS.map((checkpoint) => checkpoint.module)), new Set(MODULES));
  for (const checkpoint of CHECKPOINTS) {
    assert.equal(checkpoint.answers.filter((answer) => answer.correct).length, 1, checkpoint.id);
    assert.equal(checkpoint.answers.length, 3);
    assert.ok(checkpoint.answers.every((answer) => answer.feedback.length > 20));
  }
});

test('daily path provides a complete weekly learning routine', () => {
  assert.equal(DAILY_PATH.length, 7);
  for (const day of DAILY_PATH) {
    assert.ok(day.grammar);
    assert.ok(day.conjugation);
    assert.ok(day.vocabulary);
    assert.ok(day.business);
    assert.ok(day.task);
  }
});

test('level, scoring, and completion helpers support progress tracking', () => {
  assert.equal(getLevel(0).name, LEVELS[0].name);
  assert.equal(getLevel(900).name, LEVELS.at(-1).name);
  assert.equal(scoreAnswer(true, 2), 110);
  assert.equal(scoreAnswer(false, 2), 10);
  assert.equal(getCompletionRate(new Set([1, 2, 3]), 6), 50);
});
