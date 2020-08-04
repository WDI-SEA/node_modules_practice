# Creating a New Node And Testing It
CD to your working directory. Then input the following commands into your Terminal.

* npm init
* npm init -y (will set all the defaults)
* code .
* create a index.js
* write console.log()
* type node index.js in your terminal to run the console.log

# Create .gitignore
* make .gitignore and put node_modules/ inside it. Easiest way I think about it ...
* ``echo "node_modules/" >> .gitignore``
* The above will create the .gitignore file and write the text node_modules/ inside the file for you.

## Create myModule.js
You need to create a myModule.js file. This will be where your array of Favorite Foods will be created.

## Add Nutritionize
You should initialize the NPM with this command in your terminal:
``$ npm install nutritionalize``

Then
``var nutri = require('nutritionalize');``

Then insert the restaurant of your choice:
``nutri.getAllFoods().then((data) => {console.log(data);});``
