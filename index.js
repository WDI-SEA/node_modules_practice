const favFoods = require("./myModule.js");

let favorites = favFoods.printFavFoods();

for (let i = 0; i < favorites.length; i++)
{
    console.log(favorites[i]);
}


const chalk = require("chalk");

console.log(chalk.green("Cool beans bro"));
console.log(chalk.red("You have a fake error!"));
console.log(chalk.blue("This is the coolest color"));
console.log(chalk.yellow("This is a bright color"));
console.log(chalk.red(`I ${chalk.yellow("am")} ${chalk.green("way")} ${chalk.blue("too")} ${chalk.white("cool")} ${chalk.gray("for")} you`));

