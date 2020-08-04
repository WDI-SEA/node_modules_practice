const myModule = require('./myModule.js');

let i=0;

for (i=0; i < myModule.favoriteFoods.length; i++) {
  console.log(myModule.favoriteFoods[i]);
}

var nutri = require("nutritionalize");

nutri.getAllFoodsFromRestaurant("Subway").then((data) => {
  console.log(data);
});
