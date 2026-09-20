// Primitive Data Types
// 1- Null
// 2- Number
// 3- String
// 4- Symbol
// 5- Boolean
// 6- BigInt
// 7- Undefined


// 1- Number: Interger or Decimal values
const age = 20
const price = 4499.99
// IMP: JavaScript ma normal numbers ke liyia seprate "int" aur "float" type nhi hota.

// 2- String: Texual Data
const userName = "Arslan"
const userEmail = "imArslan7061@gmail.com"

// 3- Boolean: Sirf 2 values True ya False
const isUserLoggedIn = true
const isAdmin = false

// 4- Undefined: Varaible declare but value assing nhi hui.
let user_name;
console.log(user_name) // Undefined

// 5- Null: Intentially Set krna ka kuch bhi nhi null
const selectedPackage = null

// Null & Undefined difference
// undefined 👉 value assign nahi hui
// null      👉 intentionally no value

// 6- BigInt: Bohot large Integers ke lia
const hugeNumber = 12223223456789876543234567876543212345678n;
const monthlyRevenue = BigInt(10000000000000000000000000000000000000000000000000000);

// 7- Symbol: Unique Identifier create karne ke liye use hota hai.
const id = Symbol("id");


// Typeof operator
console.log(typeof userName)
console.log(typeof age)
console.log(typeof isAdmin)
console.log(typeof undefined)
console.log(typeof null)

// IMP : null primitive value hi hai, lekin typeof null "object" return karta hai.
// Job mein: API/form/database data handle karte waqt type samajhna important hota hai—especially jab "500" string aaye instead of 500 number.

// Quick Knowledge Check
// =====================
// 1- "25" aur 25 ka data type kya hoga?                  Ans: String and number
// 2- undefined aur null mein basic difference kya hai?   Ans: Undefined: Varaible exist but value no assinged
// 3- Output kya hoga?                                          Null: Explicitly saying not value null nothing
// 👉 let user;
// 👉 console.log(typeof user);                          Ans: Undefined
// 4- typeof null kya return karta hai?                  Ans: Objeect 