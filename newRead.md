# NODE APP INSTRUCTIONS

1. Add a .gitignore and place your module folder and any local file in there so it doesn't push to github.
2. Created a directory where I initialized node:
```javascript
npm init -y
```
this uses default options which you can then change later in your package.json.
3. Created two JS files, one to reference in my index locally, and one that references said file.
4. When I get a third party module, you do so like this:
```javascript
npm install chalk
```
in this instance I used chalk, which just gives nice colors to text in your console/terminal!
5. To use chalk, it was quite easy, it created a variable for the console log, and for chalk, then you can log anything using:
```javascript
const chalk = require('chalk');

const log = console.log;

log(chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));

log(chalk.green(
    'I am a green line ' +
    chalk.blue.underline.bold('with a blue substring') +
    ' that becomes green again!'
));

log(`
CPU: ${chalk.red('90%')}`);
```
6. To check and make sure my node is working, I can use either:
```javascript
nodemon
or
node index.js
```
nodemon will constantly update my console, where as I have to run node index.js every time to check and make sure it works.

7. You can check all this out at my git hub repo:
[This is my Repo](https://github.com/kinawy/node_modules_practice)