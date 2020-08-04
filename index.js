const myModule = require('./myModule.js')

const printFoods = (foods) => {
    for(let i=0;i<foods.length;i++) {
        console.log(foods[i])
    }
}
printFoods(myModule.favoriteFoods)

// play with npm function. 
// I played with the empty trash one during class so for this, I'm curious to see what this oneliner joke package is all about

// var oneLinerJoke = require('one-liner-joke')
// var getRandomJoke = oneLinerJoke.getRandomJoke();
// var getRandomJoke = oneLinerJoke.getRandomJokeWithTag('doctor', {
//     'exclude_tags': ['racist']
//   });
// console.log(getRandomJoke)