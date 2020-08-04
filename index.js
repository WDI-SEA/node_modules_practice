const myModule = require('./myModules.js')

const faveMeals = (meals) => {
    for(let i=0;i<meals.length;i++) {
        console.log(meals[i])
    }
}
faveMeals(myModule.favoriteFoods)