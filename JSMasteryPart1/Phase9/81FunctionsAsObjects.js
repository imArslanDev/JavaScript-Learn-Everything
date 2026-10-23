// Note: JavaScript ma functions as a function to kam krte ha but sath hi
// wo as Object bhi kam krte ha so in this way functions are the combo function + object.
function hello() {
  console.log("Hello World");
}

// console.log(hello.name); // this name property tells the function name.

// Hum apna khud ka methods or properties ko add kr skta hain functions ma.
hello.greetMessage = "Good Morning Sir Hope You're Doing Great";
hello.about = "I'm a Greeting Function"
// console.log(hello.greetMessage);
// console.log(hello.about);
// function provide more usefull properties

// 1 Loose Term ka use kr rha hu just concept ko smajhne ke liye
// Jb hum fucntion create krthe ha function hume provde kra ha free ka space jis ko bolte ha prototype
hello.prototype; // {} ye 1 free ki sapce ha empty Object ha jis ma hum apni need ke according key value pairs add kr skte ha.

console.log("Hello.Prototype:", hello.prototype); // ye 1 empty object ha jiske andr sirf 1 construcotr property ha or uski value bhi yehi function ha

// Proof 
// 1. Check karein ke prototype ke andar constructor property hai ya nahi
console.log(hello.prototype.constructor);
// Output: [Function: hello] (Yeh wahi function return karega!)

// 2. Sab se bara proof: Kya constructor exactly usi function ke barabar hai?
console.log(hello.prototype.constructor === hello);
// Output: true
// Adding properties into hello function
hello.prototype.userName = "imArslan"
hello.prototype.age = 20
hello.prototype.email = "imArslan7061@gmail.com"
hello.prototype.userHobbies = ["Prayer","Reading", "Exercise", "Eating", "Coding", "Thinking"]
hello.prototype.sayHello = function () {
  console.log("Hello Beautiful Person");
};

console.log("Function Prototype Object:", hello.prototype)

// hello.prototype.sayHello();
// console.log(hello.prototype); // ab is object ma 1 method bhi ha sayHello ka name se.
// console.log(typeof hello) // Function
// hello()// We can use it as normal Function as well

// IMP: Only functions provide prototype property.
const checkProtypeForString = "Name";
const checkProtypeForArray = ["Name"];
const checkProtypeForObject = { user: "CEO" };
// Prototype is not present for all of them including String, Array, Object But only Available for Function

// For String:
if (checkProtypeForString.prototype) {
  console.log("Prototype is Present For String");
} else {
  console.log("Prototype is not Present For String");
}

// For Array:
if (checkProtypeForArray.prototype) {
  console.log("Prototype is Present For Array");
} else {
  console.log("Prototype is not Present For Array");
}

// For Object
if (checkProtypeForObject.prototype) {
  console.log("Prototype is Present For Object");
} else {
  console.log("Prototype is not Present For Object");
}

// For Function:
if (hello.prototype) {
  console.log("Prototype is Present For Function");
} else {
  console.log("Prototype is not Present For Function");
}

// IMP:
// Proto is diffrent Protype is diffrent
// Proto chain create kr rha tha.
// Prototype Simply 1 Object ha jis ma hum key/value pairs add kr skte ha.