// if-else else-if Lader
let marks = 99;
if (marks >= 90) {
  console.log("A Grade");
} else if (marks >= 80) {
  console.log("B Grade");
} else if (marks >= 70) {
  console.log("C Grade");
} else {
  console.log("You need to improve your studies");
}

// Nested if-else
let age = 20;
let hasValidIDCard = true;
let hasDrivingLicense = true;

if (age >= 18) {
  if (hasValidIDCard & hasDrivingLicense) {
    console.log("You are now eligible to drive");
  } else {
    console.log("You need Valid ID Card and Licence for eligiblity");
  }
} else {
  console.log("You're not allowed to drive till 18");
}

// Short Syntax
if (age >= 18) console.log("You'r not a kid anymore");
else console.log("You're a Kid");

// Ternory Operator
let isLoggedIn = true;
let message = isLoggedIn ? "Welcome back" : "Please log in";
console.log(message);
