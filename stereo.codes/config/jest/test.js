const chalk = require('chalk');

const now = new Date(Date.now()).toISOString();
console.log(chalk.blue(now));
