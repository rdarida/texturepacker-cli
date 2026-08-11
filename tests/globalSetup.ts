import { existsSync, mkdirSync } from 'node:fs';

import { rimrafSync } from 'rimraf';

import { TEMP_DIR } from './constants';

export function setup(): void {
  if (existsSync(TEMP_DIR)) {
    rimrafSync(TEMP_DIR);
  }

  mkdirSync(TEMP_DIR, { recursive: true });
}

export function teardown(): void {
  rimrafSync(TEMP_DIR);
}
