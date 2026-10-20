// some() Method
const myArray = ["Hello", "Cat", "Dog", "Lion", "zebra", "Horse"];

// Ok i want to check is it any element who is start with small letter ?
let isCapitalized = myArray.some((item) => item[0].toLowerCase() === item[0]);
console.log(isCapitalized);

// some() method myArray pr loop krega or check krega ke sare array ke elements ma sa
// kya koi 1 bhi condion ko satisfy krte ha if yes to true return krega or agr array ma
// sa koi 1 bhi element condition ko satisfy nhi krta hua to false return krega.
// IMP: some() method boolean return krega.

// Real World Scenario
let products = [
  { productId: 120, productName: "Laptop", price: 70000 },
  { productId: 340, productName: "Mobile", price: 20000 },
  { productId: 410, productName: "Tablet", price: 30000 },
  { productId: 520, productName: "Monitor", price: 15000 },
  { productId: 640, productName: "Keyboard", price: 5000 },
];

// Check if there is an product who's price is greater then 10K
let checkProductsPrice = products.some((product) => product.price >= 10000);

if (checkProductsPrice) {
  console.log(`Yes Products Price Range is ${checkProductsPrice} 10K`);
} else {
  console.log(`Sorry Products Not Found`);
}