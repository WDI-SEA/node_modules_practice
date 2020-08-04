foods = ["taco", "pizza", "burger"]

module.exports.favFood = () => {
    for(i=0;i<foods.length;i++){
        console.log(foods[i])
    }
}

// module.exports.getRandomJoke = oneLinerJoke.getRandomJoke({
//     'exclude_tags': ['dirty', 'racist', 'marriage']
//   });