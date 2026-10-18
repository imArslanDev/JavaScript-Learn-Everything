// array methods: push, pop, shift, unshift

let fruits = ["Apple", "Banana", "Mango"];
console.log("Before Push:", fruits)

fruits.push("Strawberry") // Push the item at the end of an Array
console.log("After Push:", fruits)

let removedItemFromArrayEnd = fruits.pop()
// Pop() Method Array ke end se 1 item ko remove krta ha or usko return bhi krta ha

console.log(removedItemFromArrayEnd)

fruits.unshift("Orange") // Add item at the start of an Array
console.log(fruits)

let removeItemFromTheStart = fruits.shift() // shift() array ke start se 1 item ko remove krta ha aur us ko return bhi krta ha
console.log(removeItemFromTheStart)


// let nums = [1,2,3,4,5]
// nums.push(100)
// nums.unshift(10000)
// console.log(nums)
// nums.shift()
// nums.pop()
// console.log(nums)

// Who is faster
// push and pop are reletively fast methods as compared to shift, unshift
// Fast: Becuase push or pop array ke last ma items ko add ya remove kr rhe ha
// Slow: shift, unshift ko array ke sare itmes ko memory ma age shift krna prta ha then koi new item add ya remove krega. 