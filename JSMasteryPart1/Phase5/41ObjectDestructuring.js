// Object Destructuring
const productDimensions = {
  productName: "Samsung Galaxy S26 Ultra",
  productFeatures: [
    "Snapdragon S1 4Th Gen Processor",
    "More Crystal Clear Display",
    "Privacy Dispaly",
  ],
};

const {productName, productFeatures} = productDimensions
const [processor, dispaly, Privacy] = productDimensions.productFeatures
console.log(processor)
console.log(dispaly)
console.log(Privacy)

// console.log(productName)
// console.log(productFeatures)

const brand = {
  brandName: "imArslan",
  brandOwner: "Hafiz Muhammad Arslan",
  brandFamousFor: "Mens Outfits",
  brandEST: "Jan 2027",
};

const { brandName, brandOwner: Owner, ...restProperties } = brand;
// Now we can use them as a normal variables
// We can also change the default name in this way: brandOwner: Owner,
// Same Thing Apply here: agr const se destructure krege to value change nhi kr skte or let se bnai ga to kr skte ha.
console.log(brandName);
console.log(Owner);
console.log(restProperties); // Contains Object in Key Value Pairs Form containing all the rest values
