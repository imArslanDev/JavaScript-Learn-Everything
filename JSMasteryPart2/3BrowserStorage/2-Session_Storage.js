/*
(Theory):
Kya hai? Yeh bilkul Local Storage jaisa hi hai, farq sirf data ki lifetime ka hai.

(Lifespan): Iska data sirf tab tak rehta hai jab tak wo specific browser tab ya window khuli ho. Jaise hi aap tab ya browser band karenge, session storage ka sara data khud-ba-khud delete ho jata hai.

(Capacity): Lagbhag 5MB.

(Scope): Yeh bhi sirf client-side par rehta hai aur ek tab ka data doosre tab mein share nahi hota (agar aap tab duplicate na karein).
*/


// 1. Data Save (Set) karna
sessionStorage.setItem("sessionToken", "abc123xyz789");

// 2. Data Nikalna (Get) karna
let token = sessionStorage.getItem("sessionToken");
console.log(token); // Output: abc123xyz789

// 3. Specific item delete karna
sessionStorage.removeItem("sessionToken");

// 4. Session storage clear karna
sessionStorage.clear();

// Session Storage Real life Use Case: Multi-Step Form (Flight Booking / Sign-up)
// Kyun use karein? Aap ek lambay form par hain (Step 1: Personal Info, Step 2: Payment). Agar user ne tab band kar diya, to wo form ka adha data khatam ho jana chahiye taake agali baar naya/fresh form khule. Yeh temporary hota hai.

// Step 1 par user ne apna naam likh kar Next dabaya
let fullName = "Arslan King";
sessionStorage.setItem("tempUserName", fullName);

// Step 2 page par ja kar data nikalna
let getUser = sessionStorage.getItem("tempUserName");
console.log("Form ke aglay step ke liye naam:", getUser); 
// Agar tab close kar ke dobara aayein ge to ye khatam ho chuka hoga.