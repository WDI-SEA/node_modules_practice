const favFoods = require('./myModule.js');
const chalk = require('chalk');

for (let i = 0; i < favFoods.length; i++){
    console.log(chalk.red(favFoods[i]));
    
}
