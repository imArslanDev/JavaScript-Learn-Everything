// ==========================================================
// TOPIC: BLOCK SCOPE VS FUNCTION SCOPE IN JAVASCRIPT
// ==========================================================

/*
  CORE RULE:
  - `let` and `const` are **Block-Scoped** (Trapped inside `{}`).
  - `var` is **Function-Scoped** (Ignores `{}` blocks and leaks out, only trapped by functions).
*/


// ==========================================================
// 1. BLOCK SCOPE (`let` & `const`)
// ==========================================================

// Rule: Variables created with let/const inside `{}` cannot be accessed outside.
{
    let firstName = "HM";
}
// console.log(firstName); 
// ❌ ReferenceError: firstName is not defined (Because let is block-scoped)


// ⚠️ COMMON MISTAKE: Illegal `return` Statement
// {
//     let name1 = "Gold";
//     let name2 = "Smith";
//     return name2; // ❌ SyntaxError: Illegal return statement
// }
// NOTE: `return` only works inside a Function, not a plain `{}` block!


// ✅ CORRECT WAY (If you need a value out of a block):
let name2; // Declare variable outside the block
{
    let name1 = "Gold";
    name2 = "Smith"; // Update the outer variable inside the block
}
console.log(name2); // Output: "Smith" (Works perfectly!)


// ==========================================================
// 2. INDEPENDENT BLOCK SCOPES (Variable Shadowing)
// ==========================================================
// Both variables are allowed because they live in completely separate block scopes.

{
    let myName = "Arslan";
    console.log(myName); // "Arslan"
}

{
    let myName = "HM-Arslan";
    console.log(myName); // "HM-Arslan"
}

const myName = "Hafiz Muhammad Arslan";
console.log(myName); // "Hafiz Muhammad Arslan"


// ==========================================================
// 3. FUNCTION SCOPE & LEAKAGE (`var`)
// ==========================================================
// Rule: `var` ignores `{}` block boundaries and loops. It only stops at a Function boundary.

// Scenario A: Deeply Nested Blocks with `var`
{
    {
        {
            {
                var keyWord = "Nested Keyword"; // Ignores all inner block scopes
            }
        }
    }
    console.log(keyWord); // Output: "Nested Keyword" (Leaked into outer block)
}
console.log(keyWord); // Output: "Nested Keyword" (Leaked into global scope too!)


// Scenario B: `var` inside a Function (Properly Contained)
function myApp() {
    if (true) {
        var myNameFromFunc = "Arslan";
        console.log(myNameFromFunc, "True Output");
    }
    console.log(myNameFromFunc, "False Output"); // ✅ Accessible here (Inside the function)
}
myApp();
console.log("MyName:", myNameFromFunc); // ❌ ReferenceError (Cannot access outside the function) ReferenceError: myNameFromFunc is not defined


// ==========================================================
// 4. LOOPS: `var` vs `let` BEHAVIOR
// ==========================================================

// Using `var` in a loop (Leaks outside)
for (var i = 0; i < 10; i++) {
    // loop body
}
console.log("Accessing i outside the loop:", i); 
// Output: 10 (Because `var` ignores loop blocks and leaks out)


// Using `let` in a loop (Safely trapped)
for (let index = 0; index < 20; index++) {
    // loop body
}
// console.log("Accessing index outside the loop:", index); 
// ❌ ReferenceError: index is not defined (Because `let` stays inside the loop block)


// ==========================================================
// 📝 QUICK CHEAT SHEET
// ==========================================================
/*
  | Keyword | Escapes `{}` Blocks? | Escapes Functions? | Scope Type   |
  |---------|----------------------|--------------------|--------------|
  | `let`   | ❌ No                | ❌ No              | Block-Scoped |
  | `const` | ❌ No                | ❌ No              | Block-Scoped |
  | `var`   | ✔️ Yes (Leaks out)   | ❌ No              | Func-Scoped  |
*/