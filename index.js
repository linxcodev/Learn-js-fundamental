/**
 * create function
 * 1.
 */

// function isEven(number) {
//     return number % 2 === 0
// }

/**
 * 2. create function save in variable 
 */

// const isEven = function(number){
//     return number % 2 === 0
// }

/**
 * 3. Arrow function (fiture es6)
 * if params > 1 use ()
 */

// const isEven = (number) => {
    // cek
    // filter
    // etc
//     return number % 2 === 0
// }

// const isEven = number => number % 2 === 0

// console.log(isEven(10), 10)
// console.log(isEven(7), 7)

// create function value array
// const joinArray = arr => arr.join('-')
// console.log(joinArray([1,2,3,4,5,6,7,8,9]))

// function array if value in parameter infinity or not know
// const sumAll = (...number) => console.log(number)
// sumAll(1,2,3,4,5,6,7,8,9)

// 
// const printBiodata = person => console.log(`My name is ${person.name}, i'm ${person.age}`)
// printBiodata(name = 'paijo', age = '20')

/**
 * conditional
 */
// const data = !true
// if (data === true) {
//     console.log('benar')
// } else {
//     console.log('salah')
// }

// conditional else if
// const number = 1
// if (number > 80) {
//     console.log('good')
// } else if (number >= 75 && number <= 80){
//     console.log('not remidi')
// } else {
//     console.log('remidi')
// }

// ternary
const data = true
data === true ? console.log('benar') : console.log('salah')