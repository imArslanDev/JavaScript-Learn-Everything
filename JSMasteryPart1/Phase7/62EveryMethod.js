// every Method
const myArray = ["Hello", "Cat", "Dog", "Lion", "zebra", "Horse"];

// Ok i want to check do all the elements in the myArray starts with Capital Letter?
let isCapitalized = myArray.every((item) => item[0].toUpperCase() === item[0]);
console.log(isCapitalized);

// Boolean ki base pr Check kr skta ho kuch bhi according to requirments.
if (isCapitalized) {
  console.log("All The List Item Start with Capital Alphabets");
} else {
  console.log("All The List Items Not Start with Capital Alphabets");
}

// every method myArray pr loop krega or check krega ke sare array ke elements
// condion ko satisfy krte hoon if all the elements satisfy the condition so true return
// krega wrna false return krega every() method boolean return krta ha.

// How it works?
// every() method each array elements pr check krega ke us eleemnt ki
// first index ka letter capital ha ya small so ye loop end tk sirf tb hi
// chale ga jb all the array elemnts are satisfied with the condition
// agr khi pr bhi condition false hui to ye wahi se return kr jai ga phir last tk nhi chalega.
// so myArray ke case ma output ayega fasle or zebra tk check krne ke baad age proceed nhi krega or return kr jai ga.

// Real World Scenario
let products = [
  { productId: 120, productName: "Laptop", price: 50000 },
  { productId: 340, productName: "Mobile", price: 20000 },
  { productId: 410, productName: "Tablet", price: 30000 },
  { productId: 520, productName: "Monitor", price: 15000 },
  { productId: 640, productName: "Keyboard", price: 5000 },
];

// Check if the price of every product in the array is less then 1 Lakh
let checkProductsPriceRange = products.every(
  (product) => product.price < 100000,
);

if (checkProductsPriceRange) {
  console.log(`Yes Available Products Price Range is Below 1 Lakh`);
} else {
  console.log(`Sorry Products Price Range is Abobe 1 Lakh`);
}

// Checking All ProductID's are type of Number or not?
let checkPrdID = products.every(item => typeof(item.productId) == "number")
console.log(checkPrdID)