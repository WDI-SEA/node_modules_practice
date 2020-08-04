const myModule = require('./module.js');
const myFoods = myModule.myFoods;
console.log(myFoods)

for (i=0; i<myFoods.length; i++) {
    console.log(myFoods[i]);
}