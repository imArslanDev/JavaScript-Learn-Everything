// truthy and falsy
// In JavaScript, values can be classified as truthy or falsy
// based on how they evaluate in a boolean context

// Falsy values:
// false
// ""
// null
// undefined
// 0
// NaN
// In Values ke ilawa Baqi sab values truthy hoti hain.

console.log( Boolean(NaN) ); // Output: false
console.log("NaN Type:", typeof(NaN)) // Output: Number

let check = NaN
if(check) {
    console.log("Ye Nhi Chalega")
}