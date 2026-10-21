// ==========================================================
// MASTER NOTES: THE 'THIS' KEYWORD, STRICT MODE & ENVIRONMENTS
// ==========================================================
// "use strict"

function myFunc() {
    // 1️⃣ STRICT MODE TRICK
    // "use strict"; // Agar yeh uncomment kar dein, toh niche 'this' undefined ho jayega.

    console.log(this);
}
// myFunc()
// ----------------------------------------------------------
// 📌 1. The Global Call: myFunc()
// ----------------------------------------------------------
/*
  Jab aap function ko bina kisi object ke seedha call karte hain (jaise myFunc()),
  toh 'this' keyword **Global Object** ko point karta hai.
  
  - Browser mein Global Object = `window` hota hai.
  - Iska nuqsan: Ghalati se global variable banne ka khatra hota hai.
  
  💡 The Solution (Strict Mode):
  Code ke andar shuru mein `"use strict"` likhne se JavaScript secure ho jata hai. 
  Ab agar function global context mein call ho, toh `this` ki value `window` 
  nahi balkay **`undefined`** ho jati hai, taake aapko foran ghalti pata chal jaye.
*/


// ----------------------------------------------------------
// 📌 2. Explicit Method Call: window.myFunc()
// ----------------------------------------------------------
/*
  Jab aap `window.myFunc()` likhte hain, toh aap explicitly bata rahe hain 
  ke yeh function `window` object ka method hai. 
  Is case mein 'this' 100% `window` object ko hi refer karega.

  What is the `window` object?
  Browser ka apna "Main Boss" object jo browser window ko represent karta hai.
  Isi ke andar built-in methods hotay hain jaise: alert(), prompt(), console.log() etc.
*/


// ----------------------------------------------------------
// 📌 3. Browser vs Node.js Environment (The Big Difference)
// ----------------------------------------------------------
/*
  JavaScript kis environment mein chal rahi hai, yeh sabse ahem hai:
  
  1. Browser Environment:
     - Global object ka naam **`window`** hota hai.
     - Aap `window.myFunc()` likhenge toh bilkul theek chalega.

  2. Node.js Environment (Terminal):
     - Node.js mein `window` object **exist hi nahi karta**.
     - Node.js ka global object **`global`** hota hai.
     
  ⚠️ Yahi wajah hai ke agar aap Node.js mein `window.myFunc()` likhenge, 
     toh error aayega: "ReferenceError: window is not defined". 
     Node mein chalane ke liye `global.myFunc()` likhna padega.
*/

let MyName = "Arslan"

// console.log(window.MyName)
console.log(global.MyName) // Output: Undefined
/*

📝 Master Notes: Browser vs Node.js Global Scope & `global.MyName` Confusion

1. The Core Misconception (Why `global.MyName` gave `undefined`)

Jab hum Node.js mein top-level par `let MyName = "Arslan"` likhte hain aur `global.MyName` print karwate hain, toh output `undefined` aata hai. Iski waja yeh hai ke:

  1- Node.js ki File = Private Module:** Node.js mein har `.js` file apne aap mein ek isolated "Module" hoti hai.
  2- Is module ke andar banaya gaya variable (`let`/`const`) usi file ke andar qaid rehta hai; woh Node.js ke asal `global` object ke andar automatic shift **nahi** hota.

2. Browser vs Node.js Environment Difference

1- Browser Environment:
i-  Top-level global scope aur browser ka `window` object aapas mein closely connected hotay hain.
ii- Wahan global variables aksar `window` object ka hissa ban jatay hain.


2- Node.js Environment:
i-  Node.js mein `window` object exist hi nahi karta (wahan `global` hota hai).
ii- Aur `let` ya `const` se banaye gaye variables **kabhi bhi** `global` object mein automatically add nahi hotay.


3. The Correct Way in Node.js (How to make it truly global)

Agar aap Node.js mein sach mein kisi variable ko `global` object ka hissa banana chahte hain, toh usay explicitely `global` ke sath attach karna padta hai:

*/
// Sahi tareeqa:
global.MyName = "Arslan";

console.log(global.MyName); // Output: "Arslan" ✅
console.log(MyName);        // Output: "Arslan" ✅