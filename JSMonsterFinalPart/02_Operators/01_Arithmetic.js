// console.log("5 + 2 = ", 5 + 2)
// console.log("5 - 2 = ", 5 - 2)
// console.log("5 * 2 = ", 5 * 2)
// console.log("10 / 3 = ", 10 / 3)
// console.log("5 % 2 = ", 5 % 2)
// console.log("5 ** 2 = ", 5 ** 2)

// Challenge 1
let perItemPrice = 200;
let productQty = 4;
let totalPriceWithoutDiscount = perItemPrice * productQty;
let discount = totalPriceWithoutDiscount * 0.2;
let discountedPrice = totalPriceWithoutDiscount - discount;

console.log("Discount: ", discount);
console.log("Price Before Discount: ", totalPriceWithoutDiscount);
console.log("Price After Discount: ", discountedPrice);
