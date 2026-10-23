// Introduction to Prototype (__proto__)
const obj1 = {
  key1: "Value 1",
  key2: "Value 2",
};


// Goal:
// Hum chahte hain:
// Agar koi property obj2 me na mile,
// to JavaScript automatically obj1 me search kare.


// Object.create()
// Object.create(obj1)

// Ye:
// 1. Ek naya empty object create karta hai
// 2. obj1 ko us object ka prototype set karta hai

const obj2 = Object.create(obj1);

// Prototype Check
console.log(" Object 2 ka Proto:", obj2.__proto__);


// Important Concept:
// obj2 ka prototype => obj1

// Isliye:
// Agar koi property obj2 me exist nahi karti,
// to JavaScript prototype chain me search karega.

// Example:
console.log(obj2.key1);

// Output:
// Value 1

// Step-by-step:
// 1. JS obj2 me key1 search karega
// 2. key1 nahi mili
// 3. JS obj2 ke prototype (obj1) me check karega
// 4. key1 mil gayi -> "Value 1"


// Adding Own Property
obj2.key4 = "Value 4";

console.log(obj2.key4);

// Output:
// Value 4

// key4 directly obj2 ke andar store hui hai,
// isliye prototype me search nahi hoga.


// Prototype Representation
// Browser DevTools me prototype:
// [[Prototype]]

// Kabhi:
// __proto__

// Dono prototype reference ko represent karte hain.
// Important Note


// JavaScript me:
// __proto__
// aur
// prototype

// dono same cheez nahi hain.
// __proto__
// -> kisi object ka hidden prototype reference hota hai

// prototype
// -> functions ke saath related property hoti hai

// prototype property ko
// aage detail me padhenge.


// Comparing Objects


console.log(obj1 === obj2);

// Output:
// false

// Kyunki:
// obj1 aur obj2 dono different objects hain.

// obj2 sirf obj1 ko
// prototype ke through reference karta hai.


// Key Concept


// Prototype Chain:

// Agar property current object me na mile,
// to JavaScript uske prototype me search karta hai.

// Isi mechanism ko:
// Prototype Chain kehte hain.