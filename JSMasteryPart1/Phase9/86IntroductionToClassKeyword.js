// Introduction To Class Keyword In JavaScript
// Classes are fake in JavaScript, they are just syntactical sugar over the existing prototype-based inheritance and constructor functions. They provide a more familiar and cleaner syntax for creating objects and handling inheritance, but under the hood, they work the same way as constructor functions and prototypes.

// Behind The Scene Kam aisa hi ho rha hota ha jaise humne CreateUser function banaya tha aur uske prototype me methods add kiye the, waise hi classes bhi internally constructor functions aur prototypes ka use karti hain.

function CreateUser(userName, userAge, userEmail) {
  this.userName = userName;
  this.userAge = userAge;
  this.userEmail = userEmail;
}

CreateUser.prototype.about = function () {
  return `${this.userName} is ${this.userAge} years`;
};

CreateUser.prototype.isEligibleForVote = function () {
  return this.userAge >= 18;
};

const user1 = new CreateUser("HM Arslan", 20, "imArslan7061@gmail.com");
const user2 = new CreateUser("Javed Akhtar", 30, "imJaved1080@gmail.com");

// Abhi ma Ye Sara Kam Jo Uper CreatUser function bna kr maine kya ha wo same kam ma ab class keyword ka use kr ke kr skta hu, class ke andar ma constructor method ka use krunga jo ke CreateUser function ki trha kaam krega aur uske andar ma properties set krunga, or class ke andar ma methods bhi define kr skta hu jo ke CreateUser function ke prototype me add kiye gaye methods ki trha kaam krenge.

class CreateUserViaClass {
  // constructor() {} // Ye Constructor hmare liye Object create krega.
  // or Iska Syntax aesa hota ha.
  constructor(name, age, email) {
    console.log("Constructor is called") 
    // constroctor tbhi call hoga jb new keyword use kr ke Object create kra ga.
    // or jitni bar hum new object create kra ga utni ha bar constroctor function call hoga 
    this.name = name;
    this.age = age;
    this.email = email;
    // Point 1: Maze Ki Bat constructor khud object return kr dega mujhe krne ki zarorat nhi
  }
  // Point 2: Uper wali Example ma mujhe Construcor Function sa bahir
  // Prototype ma methods set krna pr rhe the but yaha pr ma direct ye kam kr skta hu.
  // This is how easily i can define methods here.   
  about() {
    return `${this.name} is ${this.age} years`;
  }

  isEligibleForVote() {
    return this.age >= 18;
  }

  jobRole(role) {
    return role
  }
}

// But this is also Possible
CreateUserViaClass.prototype.bahirWalaMethod = function() {
  console.log(`${this.name} Ye Method Bahir sa aya ha`)
}


// new keyword must ha yha pr is ke bagair hum object create nhi kr skta
let userOne = new CreateUserViaClass("Arslan", 20, "imArslan7061@gmail.com")
let userTwo = new CreateUserViaClass("HMArslan", 24, "imArslan700@gmail.com")
console.log(userTwo.about())
// Check The Prototype of UserOne
console.log(Object.getPrototypeOf(userOne))
// Mujhe Automatricaly UserOne ke Prototype ka andr sabhi method or constructor mil jai ga.
console.log(userOne.jobRole("Senior Software Engineer"))
userOne.bahirWalaMethod()


class NewUsers {
  constructor(userName, userProfession) {
    this.userName = userName
    this.userProfession = userProfession
  }

  userInfo() {
    return  `User ${this.userName} is ${this.userProfession} By Profession`
  }
}

const newUserOne = new NewUsers("Zoha Saif", "Doctor")
console.log(newUserOne.userInfo())