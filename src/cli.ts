#!/usr/bin/env node
import yargs from 'yargs';

import { pack, unpack } from '.';

yargs
  .scriptName('texture')
  .usage('$0 <cmd> [args]')
  .command(
    'pack [input] [output]',
    'Pack the images into a single texture atlas file',
    yargs => {
      return yargs
        .positional('input', {
          alias: 'i',
          describe: 'The input images files or directory',
          type: 'string'
        })
        .positional('output', {
          alias: 'o',
          describe: 'The output packed file',
          type: 'string'
        })
        .option('quality', {
          alias: 'q',
          describe: 'The packing quality',
          type: 'number',
          default: 75
        });
    },
    argv => {
      console.log(
        pack(),
        `Packing files from ${argv.input} to ${argv.output} with quality ${argv.quality}`
      );
    }
  )
  .command(
    'unpack [input] [output]',
    'Unpack the images from a texture atlas.',
    yargs => {
      return yargs
        .positional('input', {
          alias: 'i',
          describe: 'The texture atlas file to unpack',
          type: 'string'
        })
        .positional('output', {
          alias: 'o',
          describe: 'The output directory to unpack into',
          type: 'string'
        });
    },
    argv => {
      console.log(unpack(), `Unpacking ${argv.input} to ${argv.output}`);
    }
  )
  .demandCommand(1, 'You need to specify a command: pack or unpack')
  .help().argv;
