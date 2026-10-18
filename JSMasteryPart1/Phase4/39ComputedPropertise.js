// Computed Properties
const key1 = "userName";
const key2 = "userAge";

const val1 = "Arslan";
const val2 = 20;

// Method 1:
const personObject = {
[key1] : val1,
[key2] : val2
}

// Method: 2
const obj = {}
obj[key1] = val1
obj[key2] = val2


// Both Contains Computed Properties as key/value pairs
console.log("Method 1 Output:", personObject)
console.log("Method 2 Output:", obj)


let userName = "Muhammad Arslan"
let userAge = 20
let userEmail = "imarslan7061@gmail.com"

// Method: 3
const userObj = {
  userName,
  userAge,
  userEmail
}

console.log("Method 3 Output:", userObj)

let userObjKey = "userName"
let userObjVal = "Arslan"
const userObj2 = {
  [userObjKey] : userObjVal
}
console.log(userObj2)