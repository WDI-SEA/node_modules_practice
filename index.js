let myModule = require('./myModule.js');
const chalk = require('chalk');

myModule.foodArray();

console.log(chalk.blue('Hello') + ' World' + chalk.red('!'))
console.log(chalk.blue.bgRed.bold('Hello World'))