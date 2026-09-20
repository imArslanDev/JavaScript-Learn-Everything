// Varaible ka name meaningful hona chahia taki code readable rha

// Bad Example
const A = 500
const B = "user@email.com"

// Good Example
const productPrice = 400
const userEmail = "user@email.com"

// Naming Rules
// 👉 Letters, digits, _ aur $ allowed hain.
// 👉 Name digit se start nahi ho sakta.
// 👉 Variable names case-sensitive hain.
// 👉 Reserved JavaScript keywords variable names nahi ban sakte.

const user1 = "User One"          // ✅
const $Price = 50                //  ✅
const _profession = "Developer" //   ✅

// const 1user = "User 1" // ❌
// const let = var       //  ❌


// Case Sensitivity
const userAge = 20
const userage = 20
// 🆙 Both are diffrent


// Naming Conventions
// 👉 camelCase
// 👉 snake_case
// 👉 PascalCase
// 👉 kebab-case

// But Mostly camelCase use hota ha.

// Quick Knowledge Check
// 1- Ye valid hai ya invalid? Kyun?                    Ans: Invalid Becuase variable name digit sa start hori ha
// 👉 const 2price = 500;
// 2- Kya userName aur username same variable hain?     Ans: No
// 3- In dono mein better variable name kaunsa hai?     Ans: monthlySalary
// 👉 const x = 2500;
// 👉 const monthlySalary = 2500;
// 4- JavaScript variables ke liye commonly kaunsi naming style use hoti hai?  Ans: camelCase