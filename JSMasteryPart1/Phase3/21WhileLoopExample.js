// while loop example

// let num = 0;
// let total = 0;

// while (num <= 10) {
//   total += num; // total = total + num
//   num++;
// }
// console.log("The total sum from 0 to 10 is: " + total);

// // By Applying Formula
// let number = 10;
// let totalSum = (number * (number + 1)) / 2;
// console.log("By Using Math Formula:", totalSum)


// Revision
console.log("===== Revision =====");

let tableOf = 5
let count = 1
let total = "" 
while (count <= 10) {
  total += `${tableOf} X ${count} = ${tableOf * count}\n`
  count++
}

console.log(total);