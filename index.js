const foodArr = require('./myModule.js')
for (let i=0; i<foodArr.length;i++){
    console.log(foodArr[i])
}

const oneLinerJoke = require('one-liner-joke');

const getRandomJoke = oneLinerJoke.getRandomJoke();
console.log(getRandomJoke)
