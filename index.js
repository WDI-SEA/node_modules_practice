const myModule = require('./module.js')

const food = myModule.favoriteFood()

for (let i = 0; i < food.length; i++) {
    console.log(food[i]);
}

/*----------npm--------*/

const superheroes = require('superheroes')
console.log('My Super Hero: ' + superheroes.random())