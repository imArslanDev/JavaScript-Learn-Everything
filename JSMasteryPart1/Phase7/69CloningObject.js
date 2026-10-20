// Clone using Object.assign

const obj = {
    key1: "Value 1",
    key2: "Value 2",
}

const obj2 = obj
console.log(obj === obj2) // Output: True
// BCZ both are pointing the same object in the heap memory
// So we have the solution for this called spread Operator for cloning

const cloneObject = {...obj} 

obj.key3 = "Value 3"

console.log(obj === cloneObject) // Output:False
// BCZ Now we have 2 diffrent objects in the Memory with Diffrent Pointers in the Stack
// const cloneObject = {...obj} But this spread method is comparatively new so in the old codebases we may find the Object.assign method

// In the Legacy / old code bases we may find this Object.assing
const legacyCloneMethod = Object.assign({}, obj)

obj.key4 = "Value 4"

console.log(obj)
console.log(legacyCloneMethod)

let personInfo = {
    name: "xst",
    age: 10,
    email: "something@email.com"
}

const originalOBJ = personInfo
const clonedOBJ = {...personInfo}
console.log("Kia Result Bna:", originalOBJ === clonedOBJ) // fasle Botrh are diffrent in Memory


let clonedUsingObjectAssing = Object.assign({}, personInfo)
console.log("Kia Result: ", personInfo === clonedUsingObjectAssing)