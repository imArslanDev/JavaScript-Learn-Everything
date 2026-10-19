// Parameter Destructuring
const person = {
    personName: "Arslan",
    designation: "Founder"
}

// Without Destructuring
function printDetail(obj) {
    console.log(obj.personName)
    console.log(obj.designation)
}

printDetail(person)

// With Destructuring
function printDetail({personName, designation}) {
    console.log(personName)
    console.log(designation)
}

printDetail(person)


const userInfo = {
    userName: "Hafiz Muhammad Arslan",
    age: 20,
    email: "arslan@imarslansaas.com"
}

function printUserInfo({userName, age, email}) {
    console.log(`${userName} is ${age} year's old Software Engineer for Contact email:${email}`)
}

printUserInfo(userInfo)

// Parameter Destructuring Arrays ka case ma
const userArr = ["Arslan", 24, "Software Engineer"];
// 1- Without Array Destructuring 
function printUserWD(arr) {
    const name = arr[0]
    const age = arr[1]
    const job = arr[2]
    console.log(`Name: ${name}, Age: ${age}, Job: ${job}`)
}

printUserWD(userArr)

// 2. With Array Parameter Destructuring (Direct in parameter list!)
function printUserD([name, age, job]) {
    console.log(`Name: ${name}, Age: ${age}, Job: ${job}`)
}

printUserD(userArr)