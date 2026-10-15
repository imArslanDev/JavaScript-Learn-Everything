// // type operator

// // data types (Primitive data types):
// // number
// // string
// // boolean
// // undefined
// // null
// // symbol
// // BigInt


// let age = 20
// console.log( typeof age ); // number

// // convert number to string

// // Tricky way
// let ageInStr = age + "";
// console.log( typeof ageInStr ); // string

// // Proper way
// let ageInString = String(age);
// console.log( typeof ageInString ); // string

// // convert string to number=
// // Tricky way
// let  strToNumTricky = +"123";
// console.log( typeof strToNumTricky ); // number

// // Proper way
// let str = "123";
// let strToNum = Number(str);
// console.log( typeof strToNum ); // number


// // Revision Practice
// let num = 100
// console.log(typeof num) // Output: number

// // convert number to string
// let numberToStringTricky = num + "" // Tricky way
// console.log(typeof numberToStringTricky, numberToStringTricky) 

// let numberToStringProper = String(age); // Proper way
// console.log( typeof numberToStringProper, numberToStringProper ); // string

// // convert string to number
// let stringToNumberTricky = +"123"; // Tricky way
// console.log( typeof stringToNumberTricky, stringToNumberTricky); // number


// let stringToNumberProper = Number("120"); // Proper way
// console.log( typeof stringToNumberProper, stringToNumberProper ); // number


// strToNumTricky = +"120"
// console.log(strToNumTricky, typeof(strToNumTricky))

// let numToStrTricky = 120+ ""
// console.log(numToStrTricky, typeof(numToStrTricky))


// Practice
let num = 12456
let numToSTR = num + ""
console.log(numToSTR, typeof numToSTR)

let str = '123456'
let strToNUM = +str
console.log(strToNUM, typeof strToNUM)

let correctNumToStringConversion = String(num)
let correctStringToNumConversion = Number(str)
console.log(correctNumToStringConversion, typeof correctNumToStringConversion)
console.log(correctStringToNumConversion, typeof correctStringToNumConversion)