// for loop examples

// Calculates the total price by looping through every item the user added to their cart.
const prices = [10.99, 5.50, 25.00, 34];
let totalPrice = 0;

for(let i=0; i< prices.length; i++) {
  totalPrice += prices[i]
}

console.log(totalPrice)


// Generates the correct number of visual "stars" for a product review based on a rating out of 5.
let rating = 4;
let stars = "";

for (let i = 1; i <= 5; i++) {
  stars += (i <= rating) ? "★" : "☆";
}

console.log(stars)// stars = "★★★★☆"