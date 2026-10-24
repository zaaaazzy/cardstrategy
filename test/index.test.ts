import { test } from 'node:test';
import assert from 'node:assert/strict';
import { projectName } from '../src/index.js';

test('Projektname ist gesetzt', () => {
  assert.equal(projectName, 'cardstrategy');
});
