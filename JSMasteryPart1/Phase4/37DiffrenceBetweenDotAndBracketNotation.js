// Diffrence Between Dot & Bracket Notations

const person = {
    myName: "Arslan",
    myAge: 20,
    "my hobbies": ["Read", "Eat", "Code", "Sleep"]
}

// 1- Jb Bahir se kisi variable ko as a key add krna ho tb bhi hum Bracket Notation ka use krta ha
// 2- BCZ Dot Notation ka use krne se jo name hum pass krta ha wo usi name ko as a key pass kr deta ha.

// ab ye person object ma "credentialType" ko as an key pas krdega
// person.credentialType = "imArslan7061@gmail.com" // OutPut:  credentialType: 'imArslan7061@gmail.com'

// Correct way to set the exact value "credentialType" as a Key 
// Make Sure: person[credentialType] as it is pass kro strings ma nhi BCZ yaha pr value 
// compute hogi then as a key set hogi object ma 
const credentialType = "Email"
person[credentialType] = "imArslan7061@gmail.com" // OutPut:  email: 'imArslan7061@gmail.com'
console.log(person)

// const userInfo = "This is user info"
// const sampleInfoObject = {
//     name: "user name",
//     age: "user age",
//     userInfo // When key & value both are same then we write 1 time only.
// }

// // Adding Key/Value Pairs in Object
// console.log(sampleInfoObject)