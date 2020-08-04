const myModule = require('./myModule.js');
var 
gm = require('gm');

var favoriteFoods = myModule.favoriteFoods();

for (let i = 0; i < favoriteFoods.length; i++) {
        console.log(favoriteFoods[i]);
    }

// console.log the width and height of the image
gm('./welcome2.png')
.size(function (err, size) {
    if (!err)
    console.log(size.width);
    console.log(size.height)
});

// annotate an image
gm('./brandNewImg.jpg')
.stroke("black")
.drawCircle(10, 10, 20, 10)
.font("Helvetica.ttf", 12)
.drawText(30, 20, "Got it!")
.write("./brandNewImg2.png", function (err) {
  if (!err) console.log('done');
});

// creating an image file 
gm(200, 400, "#ddff99f3")// of width 200 and height 400 and color '#ddff99f3'
.drawText(10, 50, "from scratch") //draw text from 10px left and 50px top 'from scratch'
.write("./brandNewImg.jpg", function (err) {
    if (!err) console.log('done');
});