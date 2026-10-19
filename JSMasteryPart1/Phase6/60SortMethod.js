// Sort Method
// ASCII TABLE
// char : ascii value

// Numbers Code
// '0' : 48
// '1' : 49
// '2' : 50
// '3' : 51
// '4' : 52
// '5' : 53
// '6' : 54
// '7' : 55
// '8' : 56
// '9' : 57

// Special Characters Code
// ':` : 58
// ';' : 59
// '<' : 60
// '=' : 61
// '>' : 62
// '?' : 63
// '@' : 64

// Brackets and Symbols Code
// '[' : 91
// '\' : 92
// ']' : 93
// '^' : 94
// '_' : 95
// '`' : 96

// Capital Alphabets Code
// 'A' : 65
// 'B' : 66
// 'C' : 67
// 'D' : 68
// 'E' : 69
// 'F' : 70
// 'G' : 71
// 'H' : 72
// 'I' : 73
// 'J' : 74
// 'K' : 75
// 'L' : 76
// 'M' : 77
// 'N' : 78
// 'O' : 79
// 'P' : 80
// 'Q' : 81
// 'R' : 82
// 'S' : 83
// 'T' : 84
// 'U' : 85
// 'V' : 86
// 'W' : 87
// 'X' : 88
// 'Y' : 89
// 'Z' : 90

// Small Alphabets Code
// 'a' : 97
// 'b' : 98
// 'c' : 99
// 'd' : 100
// 'e' : 101
// 'f' : 102
// 'g' : 103
// 'h' : 104
// 'i' : 105
// 'j' : 106
// 'k' : 107
// 'l' : 108
// 'm' : 109
// 'n' : 110
// 'o' : 111
// 'p' : 112
// 'q' : 113
// 'r' : 114
// 's' : 115
// 't' : 116
// 'u' : 117
// 'v' : 118
// 'w' : 119
// 'x' : 120
// 'y' : 121
// 'z' : 122

// let numbersArray = [5, 9, 1200, 400, 3000, 2000, 1000];
// console.log(numbersArray.sort())
// IMP: Map, Filter, Reduce Methods gives us new Array But sort method not gives us new array it mutate (change) the original array
// Now This sort method is sorting the numbers as string because sort method by default sort 
// the elements as string and in string 1 comes before 2 and 2 comes before 3 and so on.
// So we need to pass a compare function to sort method to sort the numbers in ascending order.


// BreakDown of numberArray in Sort Method
let numbersArray = [5, 9, 1200, 400, 3000, 2000, 1000];
// Predict The Output: 
// console.log("Output:", numbersArray.sort())
// Output: first wo sb elemnts a jai ga jin ka ASCII code sb se kam ha like numbersArray ma 1 ka code sb se kam ha which is 48 
// so jitne bhi elements jo ka 1 sa start ho rhe ha wo pehle a jai ga  like 1000, 12000
// then jitne bhi elements jo ka 2 sa start ho rhe ha wo a jai ga like 2000
// then jitne bhi elements jo ka 3 sa start ho rhe ha wo a jai ga like 3000
// then jitne bhi elements jo ka 4 sa start ho rhe ha wo a jai ga like 400
// then jitne bhi elements jo ka 5 sa start ho rhe ha wo a jai ga like 5
// then jitne bhi elements jo ka 9 sa start ho rhe ha wo a jai ga like 9
// so is triqe se sort method numbers ko sort karta ha as string ke hisab se na ke as number ke hisab se is liye 1000, 1200, 2000, 3000, 400, 5, 9 a jai ga output ma

// Numbers Code
// '0' : 48
// '1' : 49
// '2' : 50
// '3' : 51
// '4' : 52
// '5' : 53
// '6' : 54
// '7' : 55
// '8' : 56
// '9' : 57

let users = [
    "eve",
    "frank",
    "Bob",
    "charlie",
    "Alice",
    "adam",
    "David",
    "Harry",
    "Grace",
    "George",
]

// console.log("Before Sort:", users)
users.sort()
// console.log("After Sort:", users) //Sorted Alphabetically 
// Sort method Capital Alphabets ko small alphabets se pehle sort karta ha because capital alphabets ka ASCII code small alphabets se kam ha like 'A' ka code 65 ha aur 'a' ka code 97 ha is liye capital alphabets pehle a jai ga phir small alphabets a jai ga output ma


// Solution: Compare Function For Sorting Numbers in Ascending  OR Descending Order
// Ascending Order
numbersArray.sort((a, b) => a - b)
// console.log(numbersArray) // Now The Original Array is changed because sort method mutate the original array Output: [5, 9, 400, 1000, 1200, 2000, 3000]

// Descending Order
numbersArray.sort((a, b) => b - a)
// console.log(numbersArray) // Output: [3000, 2000, 1200, 1000, 400, 9, 5]

// Precise Breakdown How Sort Method Works With Compare Function
// Compare Function For Ascending Order
// a - b : If the result is negative then a will be sorted before b
// a - b : If the result is positive then b will be sorted before a
// a - b : If the result is 0 then no changes will be made to the original order of the elements

// Compare Function For Descending Order
// b - a : If the result is negative then b will be sorted before a
// b - a : If the result is positive then a will be sorted before b
// b - a : If the result is 0 then no changes will be made to the original order of the elements

// Why This Compare Function Works Like This?
// Because Sort Method Sorts The Elements Based On The Return Value Of The Compare Function
// If The Return Value Is Negative Then Sort Method Sorts a Before b
// If The Return Value Is Positive Then Sort Method Sorts b Before a
// If The Return Value Is 0 Then Sort Method Does Not Change The Original Order Of The Elements


// Real World Usecase Scenario of Sort Method
// So Web Need to Displat the Producsts Price in LowToHigh & HighToLow Order
let products = [
    { productId: 1, productName: "Laptop", price: 50000 },
    { productId: 2, productName: "Mobile", price: 20000 },
    { productId: 3, productName: "Tablet", price: 30000 },
    { productId: 4, productName: "Monitor", price: 15000 },
    { productId: 5, productName: "Keyboard", price: 5000 },
]

// Low To High Price
// products.sort((a, b) => a.price - b.price)
// console.log("Low To High Price:", products)

// High To Low Price
// products.sort((a, b) => b.price - a.price)
// console.log("High To Low Price:", products)


// Ab Mera kam to ho rha ha buut 1 Problem ha ka sort method original array ko change kar deta ha to is 
// liye agar mujhe original array ko change nahi karna to ma usko clone kr lu ga.
// const lowToHigh = products.slice(0).sort((a, b) => {
//     return a.price - b.price
// }) 
// console.log(lowToHigh)

// const highToLow = products.slice(0).sort((a, b) => {
//     return b.price - a.price
// })
// console.log(highToLow)

const lowToHighPrice = [...products].sort((a, b ) => a.price - b.price)
console.log("Low To Hight Price:", lowToHighPrice)

const highToLowPrice = [...products].sort((a, b ) => b.price - a.price)
console.log("High To Low Price:", highToLowPrice)
console.log("Original Array:", products)