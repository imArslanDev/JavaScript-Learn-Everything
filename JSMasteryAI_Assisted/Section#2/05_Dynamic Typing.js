// Dynamic Typing

// JavaScript ek *Dynamically Typed Language* hai.
// Iska matlab: variable banate waqt humein uska data type explicitly declare nahi karna padta.

// let value = 100;       // Number
// value = "Hello";       // String
// value = true;          // Boolean

// Same variable different time par different type ki value hold kar sakta hai. Document bhi isi behaviour ko explain karta hai.

// Compare conceptually:

// JavaScript:
// let age = 25;

// Kisi statically typed language mein concept:
// int age = 25;
// ```

// JavaScript automatically value ke basis par type determine karti hai.

// ### Practical Example 1 — Form Data

// Frontend form se input aksar string form mein mil sakta hai:

// ```js
// let age = "25";

// console.log(typeof age); // "string"
// ```

// Dekhne mein `25` number lag raha hai, lekin quotes ki wajah se ye **String** hai.

// Ye real development mein bohat important hai.

// ### Practical Example 2 — API Data

// ```js
// let status = "loading";

// status = "success";
// ```

// Variable same type bhi maintain kar sakta hai; dynamic typing ka matlab ye nahi ke type **zaroor** change hogi — sirf JavaScript usko change karne ki permission deti hai.

// ### Important Developer Point

// Ye valid hai:

// ```js
// let userData = "Ali";
// userData = 25;
// ```

// Lekin valid hone ka matlab ye nahi ke ye **good code** hai.

// Real projects mein ek variable ka meaning/type unnecessarily change karna confusing bugs create kar sakta hai.

// Better:

// ```js
// const userName = "Ali";
// const userAge = 25;
// ```

// ### Job mein

// API responses, forms aur database values ke saath kaam karte waqt ye check karna important hota hai ke actual value ka type kya hai.

// ## Quick Knowledge Check

// 1. JavaScript ko **dynamically typed** kyun kehte hain?

// 2. Output kya hoga?

// ```js
// let data = 50;
// data = "50";

// console.log(typeof data);
// ```

// 3. Kya ye JavaScript mein valid hai?

// ```js
// let value = true;
// value = 100;
// ```

// Agar valid hai, phir bhi real project mein unnecessarily types change karna bad practice kyun ho sakta hai?
