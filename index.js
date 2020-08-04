const faker = require("faker");

let randomName = faker.name.findName();
let randomFoodPic = faker.image.food();
let myFavoriteFoods = ["cheese pizza with ranch", "grilled chicken no char", "a nice red steak", "slow cooked beef", "broccoli"];

function sayWhat(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(`${randomName} likes to eat ${arr[i]} and it looks like ${randomFoodPic}`);
    }
}

sayWhat(myFavoriteFoods);

//
// let randomEmail = faker.internet.email();
// let randomCard = faker.helpers.createCard();
//
// console.log(randomCard, randomEmail, randomName);



// console.log(random);