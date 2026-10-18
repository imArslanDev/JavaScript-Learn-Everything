// 1. LEXICAL SCOPE & SCOPE CHAIN

let requiredVal = "Presented in Global Scope";

function myApp() {
  let requiredVal = "Presented inside myApp function";

  function myFunc() {
    let requiredVal = "Presented inside myFunc function";

    let myFunc2 = () => {
      // Agar yahan 'requiredVal' comment out hai, toh JS sabse qareeb wale 
      // outer scope (yaani 'myFunc') se value uthayegi.
      // let requiredVal = "Presented inside myFunc2 function";
      console.log(requiredVal); // Output: "Presented inside myFunc function"
    };

    myFunc2();
  }

  myFunc();
  console.log(requiredVal); // Output: "Presented inside myApp function"
}

myApp();



// 2. CONCEPTS REVISION & SUMMARY NOTES

/*
   A. Lexical Scope (The Rule):
   - Iska matlab hai ke kisi bhi function ki "boundary" kahan tak hai, yeh code likhte waqt hi 
     (at the time of writing/defining) decide ho jata hai.
   - Jis function ke andar jo function likha gaya hai, uska lexical parent wahi outer function rahega.

   B. Scope Chain (The Process - "Inside to Outside"):
   - Jab aap kisi variable ko access karte hain, toh JavaScript sabse pehle uske **current/local scope** mein dekhti hai.
   - Agar wahan na mile, toh woh step-by-step aik step bahar (parent scope / lexical environment) move karti hai.
   - Yeh searching tab tak chalti rehti hai jab tak variable mil na jaye, ya phir Global scope tak pahunch kar khatam na ho jaye (aur agar Global mein bhi na ho toh `ReferenceError` milta hai).
   - *Rule:* Scope chain hamesha andar se bahar ki taraf chalti hai (Inside -> Outside). Outer scope kabhi bhi inner scope ke variables ko access nahi kar sakta.

   C. Closures (Bonus Concept):
   - Lexical scope ki wajah se hi closures bante hain. 
   - Jab ek inner function apne outer function ke variables ko "yaad" rakhta hai, bhale hi outer function execute ho kar khatam (destroy) ho chuka ho, toh is mechanism ko Closure kehte hain.
*/

// 3. CLOSURE EXAMPLE

function outer() {
  let count = 0;
  return function inner() {
    count++; // Inner function lexical scope ki wajah se 'count' ko yaad rakhta hai
    console.log(count);
  };
}

const counter = outer();
counter(); // 1
counter(); // 2
counter(); // 3