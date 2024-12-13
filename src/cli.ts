#!/usr/bin/env node
import { pack, unpack } from '.';

(() => {
  console.log(pack());
  console.log(unpack());
})();
