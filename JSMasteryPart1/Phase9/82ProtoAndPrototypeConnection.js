function createUser(userName, userAge, userEmail) {
  const user = Object.create(createUser.prototype);
  // yaha pr Object.create(createUser.prototype) 1 empty Object create kr rha ha jo ki createUser ka prototype ha
  // function ka prototype object ke sath jis ma humne methods define kiye hua ha.
  // Again Proto and Prototype both are diffrent
  // Proto: Just a refrence kiska jo bhi ap chain create kro ga uska
  // Prototype: Just an Object
  ((user.userName = userName),
    (user.userAge = userAge),
    (user.userEmail = userEmail));
  return user;
}

// Adding Methods into the Prototype of createUser function
createUser.prototype.about = function () {
  return `${this.userName} is ${this.userAge} years`;
};

createUser.prototype.isEligibleForVote = function () {
  return this.userAge >= 18;
};

const user1 = createUser("HM Arslan", 20, "imArslan7061@gmail.com");
const user2 = createUser("Javed Akhtar", 30, "imJaved1080@gmail.com");
console.log(user1);
console.log("Calling about Method For User1:", user1.about());
console.log("Calling about Method For User2:", user2.about());
console.log(
  "Calling isEligibleForVote Method For User1:",
  user1.isEligibleForVote(),
);
