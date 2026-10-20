// find Method
const myArray = ["Hello", "Cat", "Dog", "Lion"]

function isLength3(string) {
    return string.length === 3
}

let res = myArray.find(isLength3)
// find method myArray pr loop krega or check krega ke konse
// element ki length 3 ke equal ha jaise hi usko koi element milega
// jis ki length 3 ho to wo waha sa return kr jai ga and importent thing
// is ye sirf 1 occurance ko return krega jo pehle milgya baqi as it is rhe gi
// or agr koi element condition meet nhi krega to undefined return ho jai ga.
console.log(res) // OutPut: Cat

// Real World Scenario
let products = [
    { productId: 120, productName: "Laptop", price: 50000 },
    { productId: 340, productName: "Mobile", price: 20000 },
    { productId: 410, productName: "Tablet", price: 30000 },
    { productId: 520, productName: "Monitor", price: 15000 },
    { productId: 640, productName: "Keyboard", price: 5000 },
]

// Let suppose mujhe prodiucs ki list ma wo specific product chaiye jis ki ID 410
// So in this case i will prefer to use find method
let findProductWithID  = products.find((item) => item.productId === 520)
console.log(findProductWithID)

let findPrdWithPrice = products.find(item => item.price >= 2000 & item.price <= 5000)
console.log("Find Item With Price:", findPrdWithPrice)