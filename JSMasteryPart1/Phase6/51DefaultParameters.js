// Default Parameters

// Before ES6 Approach
function sumOfTwoNumsES5(num1, num2) {
    if(typeof num2 === "undefined") {
        num2 = 0
    }
    return num1 + num2
}

const checkAns = sumOfTwoNumsES5(20)
console.log(checkAns)



// After ES6 Approach
function sumOfTwoNumsES6(num1, num2 = 0) {
    return num1 + num2
}


const userInfo = (userName, userAge=20) => {
    console.log(userName, userAge)
} 

userInfo("Arslan")
userInfo("Arslan", 24)


// const ans = sumOfTwoNumsES6(10)
// console.log(ans)