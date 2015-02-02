#!/usr/bin/env node

var greet = require('greet');
var parseArgs = require('minimist');

argv = parseArgs(process.argv.slice(2));
console.log(greet(argv._, argv.drunk));
