const foodArr = require("./myModule.js");
const chalk = require("chalk");

for (let i = 0; i < foodArr.length; i++) {
  console.log(chalk.blue.bgRed.bold(foodArr[i]));
}
