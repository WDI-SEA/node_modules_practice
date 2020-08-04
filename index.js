const index = require('./myModule');

console.log(index.myFoodArray);

for (i = 0; i < index.myFoodArray.length; i ++) {
    console.log(index.myFoodArray[i])
};

const chalk = require('chalk');

const log = console.log;

log(chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));

log(chalk.green(
    'I am a green line ' +
    chalk.blue.underline.bold('with a blue substring') +
    ' that becomes green again!'
));

log(`
CPU: ${chalk.red('90%')}`);