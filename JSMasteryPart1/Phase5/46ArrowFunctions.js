// Arrow Functions
const sayHappyBirthday = () => {
    console.log("Say Happy Birthday")
}

const SumTwoNumbers = (num1, num2) => {
    let sum =  num1 + num2
    return `The Sum of ${num1} + ${num2} is ${sum}`
}

// Agr Function sirf 1 hi Parameter le rha ha to usko aesa bhi likh skte ha withouth Parenthesis () ke.
const isOdd = number => { 
    return number % 2 !== 0 ? "Odd" : "Even"
}

// This kind of Function also known as 1 Liner function
const isEven = (num) => num %2 === 0 ? "Even" : "Odd"
console.log(isEven())

const isActive = (activeStatus) => activeStatus === true ?  "Active" : "Not active"
console.log(isActive(true))