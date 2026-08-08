// console use to Print the output
// console.log("hello")

// Example of Single line comment 

/*
Example of 
Multiline
Commentye
*/

let age = 20
console.log(age)

let userName = "Muhammad Arslan"
userName = "HM-Arslan"
console.log(userName)

// Variable Declaration
// let a;
// let b;
// let c;

// Variable Initializaion
// a = 10;
// b = 20;
// c = 30;

// Declaration + Initializaion
// let a = 10;
// let b = 20;
// let c = 30;

// Declaration of 3 Variables at one (Not Recommended)
// let a,b,c;
// a = 10;
// b = 20;
// c = 30;

// Print output
// console.log(a,b,c)
// console.log(a)
// console.log(b)
// console.log(c)

// This is not Allowed in let & const 
// let a = 1;
// let a = 10;

// Allowed in var
// let a = 1;
// let a = 10;

// let & const are Block Scoped

{
    let uName = "Arslan"
    let uAge = 20
    console.log(uName + " " + uAge)
}
// console.log(uName + " " + uAge) // Not Accessable outside the Block


{
    var uCountry = "Pakistan";
    var uCity = "Lahore"
    console.log(uCountry + " " + uCity, " : Inside the Block")
}

console.log(uCountry + " " + uCity, " : Outside the Block") // Accessable


// Constants
const pi = 3.14
const directions = 4
const OOP  = "Object Oriented Programming"

const finalScore = 10
// finalScore = 20 // Not Allowed: Assignment to constant variable.

let futureVal;
console.log(futureVal) // Initialized But Undefined

// Variable can be written like following ways
// let name;
// let name1;
// let name_;
// let name$;
// let $name;
// let full_name;

let product1Price = 300;
let product2Price = 200
let totalPrice = product1Price + product2Price
console.log(totalPrice)

// Taking Input using BOM (Browser Object Model)
// let firstName = prompt("Enter your first name")
// let lastName = prompt("Enter your last name")
// let fullName = firstName + " " + lastName
// console.log(fullName)

// Data Types
let str = "This is a String"
let num = 100
const symbolA = Symbol("id");
const symbolB = Symbol("id");
console.log(symbolA === symbolB)
let isLoggedIn = true
let bigInteger = BigInt(12000000000000000000000000000000000000000000000000000000)
let temp = null
let currentSessionScore = undefined
let arr = ['Apple', 120, true, undefined, null]
let obj = {uName: "Arslan", uAge: 20}

let numOne = "20"  + 2 // Concat and return 202
let numTwo = "20" - 2 // Subtract and return 18
console.log(typeof(numOne), ": " ,numOne)
console.log(typeof(numTwo), ": " ,numTwo)
console.log(typeof("Str")) // String
console.log(typeof(20)) // Number
console.log(typeof(null)) // Object
console.log(typeof(undefined)) // Undefined
console.log(typeof(bigInteger)) // bigint

// Variales Naming Conventions
// camelCase
// let userName = "XYZ"

// Snake_Case
// let user_name = "XYZ"

// PascalCase
// let UserName = "XYZ"