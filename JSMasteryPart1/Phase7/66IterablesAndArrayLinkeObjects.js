// iterables
// jispe hum for of loop laga sakein
// Example: Strings and Arrays are Iterable.

// Test on String ✅
for(let char of "Arslan") {
    console.log(char)
}


// Test on Array✅
for(let item of [1,2,3,4,5]) {
    console.log(item)
}

// Test on Objects ❌
// Output: TypeError: {userName: "Jhon", userAge : 25} is not iterable
// for(let item of {userName: "Jhon", userAge: 25}) {
//     console.log(item) 
// }  


// Array Like Objects
// Jinke Pas Length Property hoti ha.
// Aur Jinko Hum Index se Access kr sakta hain.
// Example: String,
let user = "Jhon"
console.log(user.length) // Have The Length Property✅
console.log(user[1]) // Allow Index Based Access✅