// let keyword
// declaring variables with let


// Remeber this redeclaration problem in var keyword?
var user1 = "New User"
var user1 = "Another User"

// let keyword solve this problem
// We cannot redeclare variables that declare with let keyword
let myAge = 20
// let myAge = 30; // This will cause an error: Identifier 'myAge' has already been declared
// We cannot redeclare the variable but sure we can reassing the value in the same variable
// These are 2 diffrent things redeclaration is the rocess of defining the variable while reassinging is the process to change or update the value of the already declared varialbe.
// Example:
// myAge = 30; // We can reassigning the value here.

// block scope vs function scope (covered in great detail later)

// Revision Practice
let newUser = "Asim Kamal"
// let newUser = "New User" // Redeclaration is not allowed in let keyword
newUser = "Hamza Abbasi" // Reassigning is allowed here