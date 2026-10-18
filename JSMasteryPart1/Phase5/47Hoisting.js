// Hoisting

hello() // Accessable BCZ it is hoisted
function hello() {console.log("Hello World")}

sayNew() // Accessable BCZ it is hoisted
function sayNew() {console.log("Saying New")}


// console.log(greeting) // Cannot access 'greeting' before initialization
let greeting = "Hello World"
console.log(greeting)


console.log(userName) // Cannot access 'userName' before initialization
let userName = "Arslan"