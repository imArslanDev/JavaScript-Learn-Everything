// and && or || operators

// && (and) operator
// && operator ka case me sari conditions true honi chahiye 
// in order to make the overall expression true.
let a = 10;
let b = 5;
let c = 15;
console.log( (a > b) && (c > a) ); // Output: true (both conditions are true)

// || (or) operator
// || operator ka case me agar aik bhi condition true ho to overall expression true ho jata hai
console.log( (a < b) || (c > a) ); // Output: true (one condition is true) 

// 3 More examples of and operator
console.log( (a === 10) && (b === 5) ); // Output: true
console.log( (a === 10) && (b === 10) ); // Output: false
console.log( (c > b) && (a < c) && (b < a) ); // Output: true

// 3 More examples of or operator
console.log( (a === 5) || (b === 5) ); // Output: true
console.log( (a === 5) || (b === 10) ); // Output: false
console.log( (c > a) || (b > c) || (a === 10) ); // Output: true

// IMP: if-else ho ternory operator ho etc concept same rhe ga && || Operators ka.
// Revision
console.log("====== Revision ======");
let serverRunning = true
let dataFetchedSuccessfully = true
if(dataFetchedSuccessfully && serverRunning) {
  console.log("Data Loaded & Rendered Successfully.")
}

let userRole = "guest";
let isOwner = true;

// Logic: If EITHER condition is true, allow the action
let canDeleteThePost = (userRole === "admin" || isOwner) ? "You can Delete Your Post" : "Not Allowed";
console.log(canDeleteThePost)