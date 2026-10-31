/*
(Theory): Kya hai? Yeh sab se purana tareeqa hai data store karne ka. Pehle yehi use hota tha jab HTML5 nahi tha.

(Lifespan): Yeh temporary ya permanent dono ho sakte hain. Agar aap expiry date set nahi karte to browser band hote hi delete ho jate hain (Session Cookies), lekin agar expires ya max-age set kar dein to lambay arsay tak rehte hain.

(Capacity): Bohot chhota size hota hai—sirf 4KB tak.

(Main Diffrence Server Communication): Local aur Session storage ka data server par nahi jata, lekin Cookies har HTTP request ke sath automatically server ko bheji jati hain. Is liye inka use user authentication (login state) aur tracking ke liye kiya jata hai.

Security: Inme (HttpOnly), (Secure), aur (SameSite) flags hote hain jo security ke liye bohot zaroori hain.
*/

// Practical
// 1. Cookie Set karna (Expiry date ke sath)
// Ye cookie 7 din tak rahegi
document.cookie = "username= Arslan King; expires=" + new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toUTCString() + "; path=/";

// 2. Cookies Read (Get) karna
// Yeh sari cookies ki ek single string return karta hai
let allCookies = document.cookie;
console.log(allCookies); // Output: username=AhmedAli; anotherCookie=value

// 3. Cookie Delete karna (Expiry date past ki set karke)
document.cookie = "username=; expires=Thu, 01 Jan 2020 00:00:00 UTC; path=/;";

// Cookies Real life Use Case: User Authentication (Login Token / Session ID)
// Kyun use karein? Jab aap login karte hain, to server aapko ek token deta hai taake agali baar jab aap koi page kholein to server ko pata ho ke aap login hain. Kyunke server ko ye check karna hota hai, is liye ye data Cookie mein rakha jata hai taake har request ke sath server tak pahunch sake.
// 1. Login ke baad server ya JS cookie set karta hai (jo 1 din tak chale gi)
document.cookie = "authToken=xyz987secureToken; max-age=" + (24 * 60 * 60) + "; path=/";

// 2. Cookies ko parhne ka tareeqa (Kyunke ye aik lambi string hoti hai)
function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

// Check karna ke user logged in hai ya nahi
let token = getCookie("authToken");
if (token) {
    console.log("User logged in hai! Token:", token);
} else {
    console.log("User logged out hai, login page dikhao.");
}