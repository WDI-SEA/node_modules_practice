const chalk = require('chalk')
const favoriteFoods = require('./modules/favoriteFood')

favoriteFoods.foods.forEach(eachFood => {
    console.log(chalk.white.bgRed(eachFood))
})