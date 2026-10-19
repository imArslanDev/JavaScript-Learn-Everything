// Reduce Method

const numbersArray = [3, 6, 7, 1, 2, 8, 9, 10, 4, 6];
let sum = numbersArray.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
}, 0)
console.log(sum) // Output: 56

// How it works
// accumulator, currentValue,   return
// 3               6               9
// 9               7               16
// 16              1               17
// 17              2               19
// 19              8               27
// 27              9               36
// 36              10              46
// 46              4               50
// 50              6               56


// reduce() method total values ko reduce krke 1 value return kr rha ha current above example 
// ma 56 return kr rha ha which is the sum of all the numbersArray 

const UserCart = [
    {productID: 1, productName: "Laptop", price: 50000},
    {productID: 2, productName: "Mobile", price: 20000},
    {productID: 3, productName: "Headphones", price: 5000},
    {productID: 4, productName: "Keyboard", price: 2000},
    {productID: 5, productName: "Mouse", price: 1000},   
]

let CartTotal  = 0
for (const item of UserCart) {
    CartTotal += item.price
}
console.log(CartTotal)

// Now Calculating ToalCart Using reduc Method
let reducedTotal = UserCart.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.price
}, 0) // Here this 0 is the inital value of accumulator if pass then it takes the value from the array and start from there but if we pass 0 then it start from 0 and add the price of first item to it and so on.
console.log(reducedTotal)

// ℹ️ Jab Initial Value Set krta ha to kia hota ha?
// Jab aap reduce ke andar aakhir mein 0 pass karte hain, toh JavaScript ko pata hota hai ke loop shuru hone se pehle:
//  1- accumulator = 0 (number)
//  2- Pehli iteration mein currentValue = 50000 (pehla object)
//  3- Calculation: 0 + 50000 = 50000 (Pehli dafa hi number ban gaya, sab kuch smoothly chal pada).

// ℹ️ Jab Inital Value Set na krain then: 
// Jab aap aakhir se 0 hata dete hain, toh JavaScript ka rule yeh hai ke woh array ki pehli item ({productID: 1, productName: "Laptop", price: 50000}) ko accumulator bana deta hai!

// Ab dekhein pehli iteration mein kya hota hai:
//  1- accumulator = {productID: 1, productName: "Laptop", price: 50000} (Poora object!)
//  2- currentValue = {productID: 2, productName: "Mobile", price: 20000} (Doosra object)
//  3- Code chalta hai: accumulator + currentValue.price
//  Yaani: [Object Object] + 20000

// Result kya aata hai?
// [object Object]20000 (String ban jata hai!)

// Aur jab agli iteration mein accumulator ek string ban chuka hota hai, toh code aage chal kar fat jata hai ya NaN/unexpected output deta hai, kyunki aap objects ke sath numbers add kar rahe hotay hain!