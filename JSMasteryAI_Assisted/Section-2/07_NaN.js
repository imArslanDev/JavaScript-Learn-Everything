// Dono outputs **correct ✅**.

// ```js
// "20" + 10   // "2010"
// "20" - 10   // 10
// ```

// Reason bilkul wahi:

// * `+` string ke sath ho to aksar **concatenation**
// * `-` numeric operation karta hai, isliye `"20"` ko number mein coerce karta hai

// Ye coercion wala basic concept clear hai.

// ## Module 2 — Topic 7: `NaN`

// `NaN` ka matlab hai:

// **Not-a-Number**

// Ye tab mil sakta hai jab JavaScript kisi value ko number mein convert/operate karne ki koshish kare aur valid numeric result na mile.

// ```js
// const value = Number("hello");

// console.log(value); // NaN
// ```

// ### Important Point

// Thoda weird behaviour:

// ```js
// typeof NaN
// ```

// Output:

// ```text
// "number"
// ```

// Yani `NaN` technically JavaScript ke `number` type ka special value hai.

// ### `NaN` check kaise karte hain?

// Preferred:

// ```js
// Number.isNaN(value);
// ```

// Example:

// ```js
// const age = Number("abc");

// console.log(Number.isNaN(age)); // true
// ```

// Document bhi `NaN` aur usko check karne ka question specifically include karta hai.

// ### Practical Example — Form Validation

// ```js
// const input = "twenty";
// const age = Number(input);

// if (Number.isNaN(age)) {
//   console.log("Please enter a valid number");
// }
// ```

// Ye forms aur user input validation mein useful hai.

// ### Developer ko kya yaad rakhna hai?

// ```text
// NaN = invalid numeric result
// typeof NaN = "number"
// Number.isNaN(value) = safer check
// ```

// ## Quick Knowledge Check

// 1. `NaN` ka full form kya hai?

// 2. Output kya hoga?

// ```js
// console.log(Number("abc"));
// ```

// 3. `typeof NaN` kya return karega?

// 4. Kisi variable `result` ko check karne ke liye ke wo `NaN` hai ya nahi, preferred code kya hoga?


console.log(typeof NaN)
console.log(Number.isNaN("Arslan"))

let x = Number("50px")
console.log(x)
console.log(Number.isNaN(x))
