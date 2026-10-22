// New Keyword
function CreateUser(userName, userAge, userEmail) {
  this.userName = userName
  this.userAge = userAge
  this.userEmail = userEmail
}

CreateUser.prototype.about = function () {
  return `${this.userName} is ${this.userAge} years`;
};

CreateUser.prototype.isEligibleForVote = function () {
  return this.userAge >= 18;
};

CreateUser.prototype.userPhone = 12343923783

const user1 = new CreateUser("HM Arslan", 20, "imArslan7061@gmail.com");
const user2 = new CreateUser("Javed Akhtar", 30, "imJaved1080@gmail.com");
// console.log(user1.about())
// console.log(user2)

// Checking Keys in Object
// But this way it will list the Properties included Prototype Properties as well

console.log(user2)
for(let key in user2) {
  console.log(key)
}

// If you want to specifically find the Objects Own Property 
for(let key in user1) {
  if(user1.hasOwnProperty(key)) {
    console.log("Own Property:", key)
  }
}