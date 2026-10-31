/*
(Theory):
Kya hai? Local Storage web storage ka ek hissa hai jo aapko browser mein key-value pairs ki shakal mein data store karne ki ijazat deta hai.

(Lifespan): Iska data permanent hota hai. Browser band karne, tab close karne, ya computer restart karne ke baad bhi data khatam nahi hota, jab tak aap ya JavaScript code khud ise manually delete na karein.

(Capacity): Lagbhag 5MB to 10MB tak ka data store kar sakta hai jo cookies se kaafi zyada hai.

Scope: Yeh data specific domain (website) ke liye hota hai aur client-side (browser) par hi rehta hai, server par automatically nahi jata.
*/

// (Practical)
// 1. Data Save (Set) karna
localStorage.setItem("userIntrest", "Tech")
localStorage.setItem("webActivity", "Youtube + AI LLM's")


let userInfo = {
    userName: "Arslan",
    userAge: 20,
    userEmail: "imArslan7061@gmail.com"
}

// Object ya Array ko save karne ke liye JSON.stringify use karte hain

// Object Example
localStorage.setItem("userInfo", JSON.stringify(userInfo)) 
// Array Example
localStorage.setItem("fruits", JSON.stringify(["Apple", "Orange", "Grapes"]))


// 2. Data Nikalna (Get) karna
let getUserData = JSON.parse(localStorage.getItem("userInfo"))
console.log(getUserData)

let getFruits = JSON.parse(localStorage.getItem("fruits"))
console.log(getFruits)

// Object ko wapas object form mein lane ke liye JSON.parse use karte hain
// let storedUser = JSON.parse(localStorage.getItem("userData"));
// console.log(storedUser.username); // Output: ali123

// 3. Specific item delete karna
localStorage.removeItem("fuits")

// 4. Sara data clear karna
// localStorage.clear();


// Local Storage Real life Use Case: Dark Mode / Theme Preference
// Kyun use karein? Kyunke agar user ne ek dafa website par Dark Mode select kar liya, to wo chahega ke jab wo kal ya ek mahine baad bhi aaye, website dark mode mein hi khule. Yeh data permanent hona chahiye.

// User ne Dark Mode on kiya, humne save kar liya
function enableDarkMode() {
    localStorage.setItem("theme", "dark");
    document.body.style.backgroundColor = "#333";
    document.body.style.color = "#fff";
}

// Jab user dobara website khole, check karo ke pehle kya save tha
window.onload = function() {
    let savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.style.backgroundColor = "#333";
        document.body.style.color = "#fff";
    }
};