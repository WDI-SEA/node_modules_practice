


const myModule = require('./myModules.js')


const faveMeals = (meals) => {
    for(let i=0;i<meals.length;i++) {
        console.log(meals[i])
    }
}
faveMeals(myModule.favoriteFoods)


//I installed gitsnap, which supposedly takes a 
//selfie on each commit. So we shall see if one ends up in my gitsnap folder!
//**After commiting and pushing, I am not seeing anything in the gitsnap folder */

//Second attempt. I installed chalk-animation.
//It creates an animated text in the style of your choice. 
//I LOVE IT!


const chalkAnimation = require('chalk-animation');
 
chalkAnimation.rainbow('Show me the rainbow');