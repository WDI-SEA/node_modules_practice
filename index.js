const foodModule = require('./foodModule.js');
const chalk = require('chalk');
foodModule.favoriteFoodsLoop();
console.log(chalk.hex('#52a363')(foodModule.favoriteFoods[0]))
console.log(chalk.hex('#EDADAA')(foodModule.favoriteFoods[1]))
console.log(chalk.hex('#8A9A5B')(foodModule.favoriteFoods[2]))
console.log(chalk.hex('#E3FF00')(foodModule.favoriteFoods[3]))
console.log(chalk.hex('#FFA600')(foodModule.favoriteFoods[4]))
console.log(chalk.hex('#DE3163')(foodModule.favoriteFoods[5]))