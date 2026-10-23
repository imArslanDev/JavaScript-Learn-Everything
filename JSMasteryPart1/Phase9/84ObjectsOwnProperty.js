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

console.log("User2:", user2)
for(let key in user2) {
  console.log("Key in User 2:", key)
}

// If you want to specifically find the Objects Own Property 
for(let key in user2) {
  if(user2.hasOwnProperty(key)) {
    console.log("User2 Object's Own Property:", key)
  }
}

function CreateCar(make, model, varient) {
  this.make = make
  this.model = model
  this.varient = varient
}

CreateCar.prototype.carInfo = function() {
  return `You have ${this.make}, ${this.model} Model, ${this.varient} Varient`
}

const car1 = new CreateCar("Honda Civic", "2025", "1.8 Oriel Prosmatic")
const car2 = new CreateCar("Toyota Altis", "2022", "1.6 VTS")
const car3 = new CreateCar("Changan Karvan", "2024", "1.2 Automatic")
const car4 = new CreateCar("Suzuki Mehran", "1995", "Manual Transmission")

console.log(car1.carInfo())
console.log(car2.carInfo())
console.log(car3.carInfo())
console.log(car4.carInfo())