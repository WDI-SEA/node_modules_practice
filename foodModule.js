const chalk = require('chalk');

let favFoods = ['Pizza', 'Ribeye', 'Ceviche', 'Wings', 'Orange Chicken'];

module.exports.favFoodList = () => {

    for (i = 0; i < favFoods.length; i++) {
        console.log(favFoods[i]);
    }
};


module.exports.favFoodChalk = () => {

    for (i = 0; i < favFoods.length; i++) {
        console.log(chalk.blue('My Favorite food is: '+favFoods[i]))
    }
}
