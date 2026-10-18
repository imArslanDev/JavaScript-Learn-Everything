// Objects

// Objects are also refrence type: It will also save in the memory like arrays.
// All the refrence type will save exactly the same way in the memory

// 1- Arrays are good but not sufficient for real world data
// 2- objects store key value pairs
// 3- objects don't have index

// how to create objects
const person = {
    myName: "Arslan",
    myAge: 20,
    "my hobbies": ["Read", "Eat", "Code", "Sleep"]
}
console.log(person)

// IMP: In the Objects the properties key are by default belongs to string type 
// Proof
for(let key in person){
    console.log(typeof key)
}

// how to access data from objects
// Using Dot Notation
console.log(person.myName)
console.log(person.myAge)

// Using Bracket Notation
console.log(person["my hobbies"])


// how to add key value pair to objects
person.gender = "male"
person["designation"] = "Senior Software Engineer"
person.salary = "200K"
person["Mother Language"] = "Urdu"
console.log(person)


const sampleInfoObject = {
    name: "user name",
    age: "user age",
}

// Adding Key/Value Pairs in Object
sampleInfoObject.email = "user email"
sampleInfoObject["about user"] = "This is about user info"
console.log(sampleInfoObject.age)
console.log(sampleInfoObject["about user"])
console.log(sampleInfoObject)