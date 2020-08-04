const myModule = require('./module.js')

const food = myModule.favoriteFood()

for (let i = 0; i < food.length; i++) {
    console.log(food[i]);
}