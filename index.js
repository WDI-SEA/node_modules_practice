const myModule = require('./myModules.js')

const faveMeals = (meals) => {
    for(let i=0;i<meals.length;i++) {
        console.log(meals[i])
    }
}
faveMeals(myModule.favoriteFoods)


//I installed gitsnap, which supposedly takes a 
//selfie on each commit. So we shall see if one ends up in my gitsnap folder!