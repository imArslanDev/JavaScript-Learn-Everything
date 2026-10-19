// ==========================================================
// TOPIC: JAVASCRIPT CALLBACK FUNCTIONS (MASTER NOTES)
// ==========================================================

/*
  1. What is a Callback Function?
  Aik aisa function jo hum kisi doosray function ko as an argument pass karte hain, 
  taake woh doosra function apna kaam karne ke baad isko run (call) kar sake.

  Real-life Analogy:
  Aapne restaurant ko order diya aur apna phone number (callback function) de diya 
  ke "Jab order tayar ho jaye, toh is number par call kar dena." 
  Restaurant apna kaam karta hai, aur jab kaam ho jata hai toh aapke callback ko call kar deta hai!
*/


// ==========================================================
// 2. BASIC CALLBACK (Passing Function Reference)
// ==========================================================

function doHomework(callbackFunction) {
    console.log("📚 Student homework kar raha hai...");
    
    // Homework hone ke baad callback ko chala diya
    callbackFunction(); 
}

function showNotification() {
    console.log("🔔 Notification: Homework mukammal ho gaya, ab khelne ja sakte hain!");
}

// Passing as Reference (Bina brackets '()' ke naam bhejna)
doHomework(showNotification);
// ==========================================================
// 3. THE GOLDEN RULE: Reference vs Execution
// ==========================================================
//  1 - Function Reference (`myFunc`): Sirf pata (address) dena. JavaScript isko baad ke liye rokk leti hai.
//  2 - Function Execution (`myFunc()`): Isko foran (immediately) chala dena.



// ==========================================================
// 4. PASSING ARGUMENTS TO CALLBACKS (The Arrow Function Wrapper)
// ==========================================================
// Agar aapko callback mein parameters dene hon, toh seedha brackets nahi laga sakte 
// warna wo fori chal jayega. Iske liye hum Arrow Function ka "wrapper" use karte hain:

function checkNumbers(callBack) {
    console.log("🔍 Checking numbers process started...");
    callBack(); // Yahan wrapper function execute hoga aur andar wala function chalega
}

function addTwoNum(num1, num2) {
    let sum = num1 + num2;
    console.log("The Sum is:", sum);
}

// Sahi Tareeqa: Arrow function wrapper use karna taake arguments pass ho sakein bina turant chalaye
checkNumbers(() => addTwoNum(10, 20));



// ==========================================================
// 5. UNDERSTANDING ADVANCED CASES (e.g. acceptAndCallFunction)
// ==========================================================
// Agar aap aisa function likhte hain jo function return kare:
function acceptAndCallFunction(callBack) {
    return (() => callBack);
}

// Yahan Add2Num(20, 90) foran execute ho jayega (prints 110), 
// aur uska result undefined return hoga.
acceptAndCallFunction(addTwoNum(20, 90));



// ==========================================================
// 📝 SUMMARY CHEAT SHEET
// ==========================================================
/*
  | Concept | Syntax Example | Real-life Meaning |
  | :--- | :--- | :--- |
  | **Callback as Reference** | `myFunction` (No brackets) | Dost ko remote dena (woh apni marzi se chalayega). |
  | **Callback with Args** | `() => myFunction(10, 20)` | Aik pouch mein arguments band karke dena taake waqt par chale. |
*/