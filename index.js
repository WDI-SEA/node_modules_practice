const myModule = require('./myModule.js')

console.log("connected")

myModule.favoriteFood()

const oneLinerJoke = require('one-liner-joke');


var getRandomJoke = oneLinerJoke.getRandomJoke({'exclude_tags':['dirty','racist','marriage']})
console.log(getRandomJoke)