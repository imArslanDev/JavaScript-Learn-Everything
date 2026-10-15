// ternory operator
// it is a short form of if...else statement
// syntax: condition ? value1 : value2 // if condition is true, return value1 else return value2
let age = 18;
let canVote = age >= 18 ? "Yes, you can vote." : "No, you cannot vote.";
console.log(canVote); // Output: Yes, you can vote.
// Usefull when you have to assign a value based on a condition
let number = 7;
let type = number % 2 === 0 ? "Even" : "Odd";
console.log(`${number} is an ${type} number`); // Output: 7 is an Odd number.

// Revision
console.log("====== Revision ======");
let dataAvailability = true;
dataAvailability === true
  ? console.log("Data Fetching....")
  : console.log("Data not found");

// Example of Chaning Multiple Conditions in
// Ternory Operator (Not Recommended For Deeply Nesting)
const score = 85;
const result =
  score >= 90
    ? "Excellent"
    : score >= 80
      ? "Ammazing Result"
      : score >= 70
        ? "Good Reuslt"
        : "Can Be Improved";

console.log("===================== Look From Here ========================")

let dataState = "Response"
let checkDataStatus = dataState == "Request" ? "Request Sent To Server Successfully" : dataState == "Response" ? "Server Send The Response Successfully" : "No Status Available"

console.log(checkDataStatus)