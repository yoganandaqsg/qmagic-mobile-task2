const path = require('path');
require('dotenv').config({
  path: path.resolve(__dirname, `${process.env.ENVIRONMENT || 'local'}.env`),
});

module.exports = {
  default: {
    tags: process.env.npm_config_TAGS || '',
    formatOptions: {
      snippetInterface: 'async-await',
    },
    paths: ['src/test/features/**/*.feature'],
    dryRun: false,
    timeout: 60000,
    require: ['src/test/steps/**/*.steps.ts', 'src/hooks/**/*.ts', 'src/test/support/world.ts'],
    requireModule: ['ts-node/register'],
    format: ['progress-bar'],
    publish: false,
  },
};
