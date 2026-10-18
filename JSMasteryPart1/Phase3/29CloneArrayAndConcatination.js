// // How to clone & concatenate Arrays

// Method to check same or seprate
function checkIsSameOrSeprate(arrOne, arrTwo) {
  let res = arrOne === arrTwo ? "Same Arrays" : "Seprate Arrays";
  console.log(res);
}

let arrOneV1 = ["Item1", "Item2"];
let arrTwoV1 = arrOneV1;
// Check:
// checkIsSameOrSeprate(arrOneV1, arrTwoV1);
// Both are same arrays BCZ the pointer
// is targeting to the same id in the heap memory

// Requirment: What if we want to clone to the same array but it will be stored seprately in the memory

// 1- Create completely seprate arrays but
// this is not a practical bcz we are doing it
// manually and what if we have lot more values.
let arrOneV2 = [1, 2, 3, 4, 5];
let arrTwoV2 = [1, 2, 3, 4, 5];
// Check:
// checkIsSameOrSeprate(arrTwoV1, arrTwoV2);

// 2- Clone array using slice method so
// in this way we get seprate arrays in heep
// IMP: (slice method fast ha comparietively baqi methods se)
let arrOneV3 = ["Apple", "Mango", "Orange", "PineApple"];
let arrTwoV3 = arrOneV3.slice(0)

arrOneV3.pop() // Now arrOneV3 will be affected not arrTwoV3
// console.log(arrOneV3, arrTwoV3)

// Check:
// checkIsSameOrSeprate(arrOneV3, arrTwoV3);

// 3- Clone array using concat method.
let arrOneV4 = [1, 2, 3, 4];
let arrTwoV4 = [].concat(arrOneV4);
// checkIsSameOrSeprate(arrOneV4, arrTwoV4);

// 4- Clone array using Spread Operator (Recommended)
let arrOneV5 = [1, 2, 3, 4];
let arrTwoV5 = [...arrOneV5]
// checkIsSameOrSeprate(arrOneV5, arrTwoV5);

// Adding More Items into array
let array1 = [1, 2, 3, 4];

// 1- Using Spread Operator
let array2 = [...array1, 5, 6, 7, 8];

// 2- Using Concat Method
let array3 = [].concat(array1, [5, 6, 7, 8], [9, 10, 11, 12]);
// console.log("Array 3:", array3);

// Now im changing in array1 but this time ye array2 me reflect nhi hoga.
array1.push(50);
console.log("50 is Added in Array 1:", array1);
console.log("But not in Array 2:", array2);

let fruitArr1 = ["Apple", "Mango"];
let fruitArr2 = ["Banana", "Orange"];
// This way we get a brand new array containing the values of arr1 & arr2

let brandNewArray = [...fruitArr1, ...fruitArr2]
console.log("Brand New Array:", brandNewArray);