// for loop in array
let fruits = ["Apple", "Mango", "Grapes", "Banana"];

let fruitsInCaps = [];
// for (let i = 0; i < fruits.length; i++) {
//   fruitsInCaps.push(fruits[i].toUpperCase());
// }

for(let i=0; i <fruits.length; i++) {
  fruitsInCaps.push(fruits[i].toUpperCase())
}

// Now This fruitsInCaps array filled with Upper Case Fruit Items
console.log("Capital", fruitsInCaps);

// Get Last Property of an Array
console.log("Last Value in fruit array:", fruits[fruits.length - 1]);
console.log("2nd Last Value in fruit array:", fruits[fruits.length - 2]);