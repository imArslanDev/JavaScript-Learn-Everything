// // Primitive vs Refrance Data Types

// // Primitive Type
// let numOne = 10;
// let numTwo = numOne;
// console.log("Before Increment");
// console.log("numOne value:", numOne); // Output: 10
// console.log("numTwo value:", numTwo); // Output: 10

// numOne++;

// console.log("After Increment");
// console.log("numOne value: ", numOne); // Output: 11
// console.log("numTwo value: ", numTwo); // Output: 10

// // Referance Type:
// let arr1 = [1, 2, 3];
// let arr2 = arr1;

// console.log("Before Pushing 4 to arr1");
// console.log(arr1); // Output: [1,2,3]
// console.log(arr2); // Output: [1,2,3]

// arr1.push(4);

// console.log("After Pushing 4 to arr1");
// console.log(arr1); // Output: [1,2,3,4]
// console.log(arr2); // Output: [1,2,3,4]

let str1 = 10

str1 = 100

let str2 = str1
let str3 = str2

console.log(str1) // Output: 100
console.log(str2) // Output: 100
console.log(str3) // Output: 100
// Why? Becuase Yaha Pr Independent copy update hone ki bad bn rhi ha