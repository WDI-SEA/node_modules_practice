const myModule = require('./myModule.js');
const oneLinerJoke = require('one-liner-joke');


for (let i = 0; i < myModule.foods.length; i++) {
    newFoods = myModule.foods[i];
    console.log(newFoods);
}


let getRandomJoke = oneLinerJoke.getRandomJoke();
console.log(getRandomJoke);
