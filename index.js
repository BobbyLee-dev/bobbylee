#!/usr/bin/env node

const pkgJSON = require('./package.json');
const welcome = require('cli-welcome');
const chalk = require('chalk');
const sym = require('log-symbols');
const log = console.log;

welcome({
  title: pkgJSON.name,
  tagLine: `Hi, nice to meet you!`,
  description: pkgJSON.description,
  version: pkgJSON.version,
  bgColor: `#FADC00`,
  color: `#8A2BE2`,
  bold: true,
  clear: true
})

log(`${chalk.greenBright(`I am a Senior Front End Developer specializing in JavaScript currently focusing on React. I often utilize my favorite CMS ā WordPress ā to build custom themes and plugins that suit specific needs for clients and their content, in my opinion that is the key to building easy to use, maintainable, and scalable projects that perform well over time. Iām based out of San Diego California and work at Rosemont Media.`)}

${sym.success} ${chalk.blue.bold(` https://bobbylee.dev/ `)}

`)