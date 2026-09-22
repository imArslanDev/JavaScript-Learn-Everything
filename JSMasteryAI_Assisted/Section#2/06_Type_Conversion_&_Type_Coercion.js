// ## Module 2 — Topic 6: Type Conversion & Type Coercion

// Ye topic important hai kyun ke forms/APIs se values aksar expected type mein nahi aati.

// ### Type Conversion

// Jab **developer khud explicitly type change kare**, usko type conversion kehte hain.

// String → Number:

// ```js
// const age = "25";

// const convertedAge = Number(age);

// console.log(typeof convertedAge); // "number"
// ```

// Number → String:

// ```js
// const price = 500;

// const textPrice = String(price);

// console.log(typeof textPrice); // "string"
// ```

// Boolean conversion:

// ```js
// Boolean(1);  // true
// Boolean(0);  // false
// ```

// Document ke questions mein manual string-to-number conversion aur type coercion dono specifically included hain; later Number section `parseInt()` aur `parseFloat()` bhi cover karta hai.

// ### Type Coercion

// Jab JavaScript **automatically type convert kare**, usko coercion kehte hain.

// Example:

// ```js
// console.log("5" + 3);
// ```

// Output:

// ```text
// "53"
// ```

// Yahan `3` string ban gaya aur concatenation hui.

// Lekin:

// ```js
// console.log("5" - 3);
// ```

// Output:

// ```text
// 2
// ```

// Yahan JavaScript `"5"` ko number mein convert kar deti hai.

// Isi wajah se coercion kabhi confusing ho sakti hai.

// ### Practical Example — Form Input

// Suppose form se quantity mili:

// ```js
// const quantity = "3";
// const price = 100;
// ```

// Agar blindly:

// ```js
// console.log(quantity + price); // "3100"
// ```

// Better:

// ```js
// const total = Number(quantity) * price;

// console.log(total); // 300
// ```

// ### Developer ko kya yaad rakhna hai?

// ```text
// Explicit conversion → tum khud type change karo
// Coercion           → JavaScript automatically kare
// ```

// Real projects mein important values ko explicitly convert karna usually clearer hota hai.

// ## Quick Knowledge Check

// 1. Type conversion aur type coercion mein difference kya hai?

// 2. Output kya hoga?

// ```js
// console.log("10" + 5);
// ```

// 3. Output kya hoga?

// ```js
// console.log("10" - 5);
// ```

// 4. Form se `"25"` string mili hai. Isko number banane ka code likho.