// How to Iterate Objects
const person = {
    myName: "Arslan",
    myAge: 20,
    "my hobbies": ["Read", "Eat", "Code", "Sleep"]
}
console.log("Object.values", Object.values(person))
console.log("Object.keys", Object.keys(person))

// for(let value of  Object.values(person)) {
//     console.log(value)
// }

// using for in loop: for in loop directly apko object keys provide kr deta ha.
// for(let key in person) {
//     console.log("Keys From Person Object: ", key)
// }

// using Object.keys / Object.values
console.log("Iterating Over Object Keys:", Object.keys(person))
console.log("Iterating Over Object Values:", Object.values(person))

// Using for of loop: Objects pr directly run krne pr err dega so first you 
// need to covert into iterables
for(let key of Object.keys(person)) {
    console.log(person[key])
}
