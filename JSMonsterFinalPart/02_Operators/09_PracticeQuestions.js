// Q#1- Get two input form user using prompt and print their possible arithmetic results.
// let num1 = Number(prompt("Enter First Number"));
// let num2 = Number(prompt("Enter Second Number"));

// console.log(`${num1} + ${num2} = ${num1 + num2}`);
// console.log(`${num1} - ${num2} = ${num1 - num2}`);
// console.log(`${num1} * ${num2} = ${num1 * num2}`);
// console.log(`${num1} / ${num2} = ${num1 / num2}`);
// console.log(`${num1} % ${num2} = ${num1 % num2}`);
// console.log(`${num1} ** ${num2} = ${num1 ** num2}`);

// Q#2- Can you chain assignment operators?
// And - Yes
// let a = b = c = d = 20;
// console.log(a, b, c, d); // 20, 20, 20, 20

// Q#3- Get a number using prompt from user and check whether even or odd using ternary operator.
// let userInpNum = Number(prompt("Enter a number: "));
// let checkEvenOrOdd = userInpNum % 2 === 0 ? "Even Number" : "Odd Number";
// console.log(checkEvenOrOdd);

// Q#4-  What is the final value of x?
let x = 5;
x += 3; // 8
x -= 2; // 6
x *= 4; // 24
x /= 6; // 4
x %= 3; // 1
// console.log(x); // 1

// Q#5- Check if a number is within a range between 10 and 20 (inclusive)
let num = 12;
let numOutput = num >= 10 && num <= 20;
// console.log("Number Between 10 & 20:", numOutput);

// Q#6- Write a program to find the largest number between 3 numbers using ternary operator.
let a = 10,
  b = 50,
  c = 20;

let largestNumber =
  a > b ? (a > c ? `a:${a}` : `c:${c}`) : b > c ? `b:${b}` : `c:${c}`;
// console.log("Largest Number:", largestNumber);

// Q#7. Take email and password from user. If both are incorrect or does not match the stored values, display the  message "Invalid email or password." If both match the stored values, display "You are logged in successfully!"
// let userName = "Arslan";
// let password = "@$@3532523";

// let userNameInp = prompt("Enter your name");
// let userPasswordInp = prompt("Enter your password");

// let output =
//   userNameInp === userName && userPasswordInp === password
//     ? "You are logged in successfully!"
//     : "Invalid email or password.";

// console.log(output);

// Q#8- What will be the output of the following JavaScript code?
let A = 5,
  B = 3,
  C = 2;

let result = A++ + --B * C-- - ++A + B-- / --C;
//           5       2   2       7   2       0

// console.log("a:", A); // 7
// console.log("b:", B); // 1
// console.log("c:", C); // 0
// console.log("result:", result); //Infinity

// Q#9- What is the output of console.log(~a) where a = 0
console.log(~a);

// Bitwise Left Shif using Formula
// Left Shift Formula: x << n = x * 2^n
console.log(8 << 2); // 32
console.log(7 << 3); // 56

// Right Shift Formula: x >> n = floor (x / 2^n)
console.log(12 >> 2); // 0

// Left Shift
// 6 << 1
//         MOVE THIS WAY
//               ←

// [0][0][0][0][0][1][1][0]
//               ↓ ↓

// [0][0][0][0][1][1][0][0]

// Right Shift
//               MOVE THIS WAY
//                     →

// [0][0][0][0][0][1][1][0]
//                     ↓ ↓

// [0][0][0][0][0][0][1][1]
