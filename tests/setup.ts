import { existsSync, mkdirSync } from 'fs';
import { rimrafSync } from 'rimraf';
// import { execSync } from 'child_process';

import { TEMP_DIR } from './constants';

export default function globalSetup(): void {
  if (existsSync(TEMP_DIR)) {
    rimrafSync(TEMP_DIR);
  }

  mkdirSync(TEMP_DIR, { recursive: true });
}
