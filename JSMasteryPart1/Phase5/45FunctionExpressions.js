// Examples of Function Declaration

function sayHappyBirthday() {
  console.log("Happy Birthday....")
}
sayHappyBirthday()

function doNothing() {
  console.log("Do Nothing")
}
doNothing()

// Now Function Expression: is ma hum 1 function ko 1 variable ma assign kr deta ha like this.
const findSumOfTwoNumbers = function (num1, num2) {
  return `The Sum of ${num1} + ${num2} is ${num1 + num2}`;
};

console.log(findSumOfTwoNumbers(20, 34));

// That's why i prefer to create functions using Function expressions BCZ in the function declaration
// I face the problem like this where i have already created the function with the name and im not
// getting any errors.
function sayHello() { console.log("Hello") }

function sayHello() { 
  console.log("Hello From Another sayHello Function")
} 
sayHello()