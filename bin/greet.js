#!/usr/bin/env node

var greet = require('../src/index.js');
var parseArgs = require('minimist');

argv = parseArgs(process.argv.slice(2));
console.log(greet(argv._, argv.drunk));
