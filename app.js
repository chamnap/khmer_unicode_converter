#!/usr/bin/env node

var program        = require('commander');
var khmerConverter = require('./index.js');

program
  .version('0.1.0')
  .option('-f --font <font>', 'Font', /^(limon|abc)$/i, 'limon')
  .parse(process.argv);

var string = program.args[0];
if (!string) {
  throw new Error('You must provide the input string');
}

var result = khmerConverter[program.font](string);
console.log(result);