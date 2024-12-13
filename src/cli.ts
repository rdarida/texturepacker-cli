#!/usr/bin/env node
import { pack, unpack } from '.';

(() => {
  [pack(), unpack()].forEach(v => console.log(v));
})();
