// New Keyword
// Ab smajhte ha New Keyword kr kia rha ha
// 1- Ek Empty Object Create kr rha ha like this = {}
// 2- or us empty Object ko return bhi kr rha ha.
// 3- By Default Proto ke value creatUser function ka prototype ke equal set kr dega.


// Ye CreateUser ki trha ke functions ko Constructor Function kehte ha 
// Because Ye Hamare Liye contstract kr rha ha diffrent Objects ko.

// IMP: Agr Hum Koi Aesa Function Create Kr rhe ha jo ke new keyword
// lagane se hi kam krega to us ke liye 1 Convention ha ke us function
// ke name ko hamesha Capital Letter ka use kr ke hi Start kra ga.

function CreateUser(userName, userAge, userEmail) {
  this.userName = userName
  this.userAge = userAge
  this.userEmail = userEmail
  // Yaha Pr Mujhe Explicitly (reutrn this) likne ki zarorate nhi
  // Ha Becuase New Keyword Ye Kam Automaticaly Krta Ha,
}

// Adding Methods into the Prototype of CreateUser function
CreateUser.prototype.about = function () {
  return `${this.userName} is ${this.userAge} years`;
};

CreateUser.prototype.isEligibleForVote = function () {
  return this.userAge >= 18;
};

// Uper Btai Gai Sare Features Tbhi Kam Krega Jub hum new keyword ka use Krenge.
const user1 = new CreateUser("HM Arslan", 20, "imArslan7061@gmail.com");
const user2 = new CreateUser("Javed Akhtar", 30, "imJaved1080@gmail.com");
const user5 = new CreateUser("Zoha", 20, "zoha@gmail.com")
console.log(user1.about())
console.log(user2)
console.log(user5.isEligibleForVote())