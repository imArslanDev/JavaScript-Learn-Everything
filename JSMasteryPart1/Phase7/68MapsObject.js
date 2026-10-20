// Maps Object

// 1- map is an iterable
// 2- store data in ordered fashion
// 3- store key value pair (like Object)
// 4- duplicate keys are not allowed objects

// Diffrence B/W maps & objects

// objects can only have string or symbol as key

// in maps you can use anything as key like array, number, string

// This Syntax is also called Object Literal
// Or in Normal Objects ke andr jo Keys hoti ha wo hamesha String ma hoti ha or bohot kam but Symmbol ma ho skti ha
// const person = {
//     userName: "Alice",
//     age: 24,
//     // Try to Pass Integer as Key But Eventualy it will converted to String
//     1: "One"
// }
// console.log(person.userName)
// console.log(person["age"])
// console.log(person[1]) // Still it is a string we have valide it below in by using for in loop

// for(let key in person) {
//     console.log(typeof key)
// }


const person = new Map()
person.set("userName", "Alice")
person.set("age", 24)
person.set(10, "Ten")
person.set([1,2,3,4,5], "Numbers Array")

console.log("Person Ki Value:", person)

// Map ke case ma values ko access krne ke liye ap Dot or Bracket Notation use nhi kr skta.
// console.log(person.userName) // Undefined: Not Allowed
// console.log(person["age"]) // Undefined: Not Allowed

// Jab Dot or Bracket Notation Allow Nhi ha to Values Kaise Access krain?
// Aesa
// console.log(person.get(10))
// console.log(person.get("userName"))
// console.log(person.keys()) // Map Iterator: Gives You All the Keys

// Loop through the keys of the person Map

// for(let key of person.keys()) {
//     console.log(key, typeof key) 
//     // Output:
//     // string
//     // string
//     // number ==> Proves We can Store Number as a Key in the Map
//     // object
// }


// Yaha pr hum direct for of loop lga skta ha but Object ka case ma hum directly nhi lga skte
// hn us ma hum for in loop loga skta ha to get the keys of an Object
// Map value Array ke andr key value pair ki form ma rerender krta ha to is liye mane 
// key or value ko array ma se destrcuture kr lya ha.
// for(let [key, value] of person) {
//     console.log(`Key = ${key} : Value: ${value}`)
// }

// IMP:
// Map ma Ordered Gurenteed ha Yaha Pr Jis Order ma humne add kya ha usi Order ma rhe ga.
// Objects ma Ordered Gurenteed nhi hota


// Ye Syntax Bhi hota ha use jb hum direct values add krta ha.
// Map create krke us ma sb se pehle Parenthesis () 
// Then us ke bad 1 main Array [] jo contain krega other key value paris ko 
// in the form of Array []
const person2 = new Map([
    ["userName", "Jhonson"],
    ["age", 22],
    [100, "Hundred"],
    [{key:"String"}, ["One", "Two", "Three", "Four"]]
])
// console.log(person2)

const uniquePerson1 = {
    id:1,
    userName: "Jason"
}

const uniquePerson2 = {
    id:1,
    userName: "Julie"
}

const uniquePersonExtraInfo = new Map()
uniquePersonExtraInfo.set(uniquePerson1, {age: 28, gender: "Male"})
uniquePersonExtraInfo.set(uniquePerson2, {age: 32, gender: "Female"})

console.log(uniquePersonExtraInfo.get(uniquePerson1).age)
console.log(uniquePersonExtraInfo.get(uniquePerson1).gender)