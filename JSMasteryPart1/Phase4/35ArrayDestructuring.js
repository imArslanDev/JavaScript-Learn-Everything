// Array Destructuring

let myArray = ["This is Value 1", "This is Value 2", "This is Value 3", "This is Value 4"]
// Agr array me 1 hi element ho or destrucuting ma zyada destrucutre krlia to undefined milega.

let val1 = myArray[0]
let val2 = myArray[1]

// console.log("Without using Array Destructing Method")
// console.log(val1)
// console.log(val2)

const myObjsArr = [
  {id: 1, name: "Arslan"},
  {id: 2, name: "Ali"},
  {id: 3, name: "Atif"},
  {id: 4, name: "Asim"},
]

const [firstObj, ...restObjects] = myObjsArr
console.log(firstObj)
console.log(restObjects)


console.log("After using Array Destructing Method")
// const [variable1, variable2, ...restValues] = myArray 
// agr hamare array me bohot sari values ha or un values ko hum as an array get krna chate ha 
// to hum ... spread oprator ka use krke 1 variable bna lega jaise ...restValues ka name se mane bnaya ha and is ma sari remaining values as an array store ho jai gi.

// Now agr mujhe Varible2 ma Value 3 stroe krni ho to ma
// ek extra comma add krduga jiska mtlab 1 value/index ko skip krna ha
// Expected Output 
// This is Value 1
// This is Value 3
// [ 'This is Value 4' ]
const [variable1, , variable2, ...restValues] = myArray  


// These variable1 & variable2 are treeted like a normal 
// varialbe we created with let or const etc
// variable1 = "New Value" // This will throw Assignment to constant variable error
// console.log(variable1)
// console.log(variable2)
// console.log(restValues)


// Revision
console.log("====== Revision ======")
const  users = ["Ali","Hasan", "Hussain", "Arslan", "Ahsan", "Hadi"]
const [user1, user2, user3, ...restUsers] = users
// console.log(user1)
// console.log(user2)
// console.log(user3)
// console.log(restUsers) 


const customerObj = {
  id: 1,
  name: "Gullu Badsha",
  profession: "Entertainer",
  skills: ["Dance", "Singing", "Street Fighting"] 
}

const {id, name: customerName, profession, skills} = customerObj

console.log(id)
console.log(customerName)