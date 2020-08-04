const myModule = require('./myModule')
console.log(myModule.foodArray())

//experiment One I found with rap freestyle npi
//make variable for required and put freestyle in string

let freestyle = require('freestyle');

// variable for fs to have a .txt with random words and put require
let fs = require('fs')
//dont know exactly what this is just following the example
let s = fs.createReadStream(__dirname + '/crazybars.txt');
freestyle(s, function(r){
    let A = r.couplet();
    let B = r.couplet();
    console.log([A[0], B[0], A[1], B[1], ''].join('\n'));
});


