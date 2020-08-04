console.log('Levin!');

const faveFoods = require("./res.js");
const oneLinerJoke = require('one-liner-joke');
const getRandomJoke = oneLinerJoke.getRandomJoke();
for (let i = 0; i < faveFoods.length; i++) {
    console.log(faveFoods[i])
}
console.log(getRandomJoke);