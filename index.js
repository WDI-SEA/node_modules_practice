const myModule = require('./module.js');
const chalk = require('chalk');
const myFoods = myModule.myFoods;
console.log(myFoods)

for (i=0; i<myFoods.length; i++) {
    if (i % 2 === 0) {
        console.log(chalk.redBright(myFoods[i]));
    } else {
        console.log(chalk.bold.bgGreen.magenta(myFoods[i]));
    }
};

