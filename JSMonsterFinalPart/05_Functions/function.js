// Function Declaration
function sayHi() {
  console.log("Hi Bro");
}

// Function Expression
let sayHello = function () {
  console.log("Hello Sir How are you?");
};

// Arrow Function
const calculatrSum = (num1, num2) => {
  let total = num1 + num2;
  console.log(total);
};

// Anonymous Funtion
setTimeout(function () {
  console.log("I was Invoked after 1 second");
}, 1000);

// IIFE: Immediately Invoked Function Expression
(async function () {
  console.log("IIFE");
})();

// greet();
// greet2();

// function greet(){
//     console.log("hello")
// }

// let greet2 = () =>{
//     console.log("hello 2")
// }

// Q-1 Solution
function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

let myName = capitalizeFirstLetter("arslan");
console.log(myName);

// Q-2 Solution
// setTimeout(() => {
//   alert("Please login");
// }, 5000);

// Q-3 Solution
let discountPrice = (price, discount) => {
  let discountedAmount = price * (discount / 100);
  console.log("Original Price:", price);
  let finalPrice = price - discountedAmount;
  console.log("Price After Discount:", finalPrice);
  // return finalPrice;
};

discountPrice(500, 10);

// Q-4 Solution
function userNameGenerator(fullName) {
  let userName = `@${fullName}_${Math.floor(Math.random() * 20)}`;
  console.log(userName);
}

userNameGenerator("imArslan");
