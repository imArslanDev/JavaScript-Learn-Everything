let username = "";
let password = "";

let result =
  username && password ? "sucessfull login" : "invalid username or password";
console.log(result);

// Short-circuiting
console.log("" || undefined || false || true || null);

// If all true then return the last one if even one false then this will return false
console.log("A" && 23 && 35 && "B" && "C" && false && "D");
// let result = "alpha" ?? "mkl";
// console.log(result);

// Nullish Coalescing Operator
// Return krega Right Hand value only when the Left Hand value is null or undefined
let accType = undefined ?? "Default"; // false
console.log(accType);

accType = undefined ?? "Default"; //  Default
console.log(accType);

accType = null ?? "Default"; //  Default
console.log(accType);

let TrueOrFalse = 0 ? true : false;
console.log(TrueOrFalse);

// Practical use case of Nullish Coalescing Operator
// If API Rich Compenent Have Some issue then DISPLAY FallBack_Data
// IMP: ?? Work only with Null or undefined
let API_Data = undefined;
let FallBack_Data = "Fall Back Data";

let displayData = API_Data ?? FallBack_Data;
console.log(displayData);
