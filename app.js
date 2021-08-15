const validator = require('validator')
const chalk = require('chalk')

console.log(validator.isEmail("karan.lakhwani910@gmail.com"));
console.log(chalk.bgYellow("I am Karan"));



console.log(process.argv[2]);




// const add = require("./utils")

// // const name = "Karan"
// console.log(add(5,6));


// const fs = require('fs')

// // fs.writeFileSync(
// //     'notes.txt',
// //     'Hey, I am Karan Lakhwani'
// // )

// fs.appendFileSync(
//     'notes.txt',
//     " Frontend Website Developer"
// )