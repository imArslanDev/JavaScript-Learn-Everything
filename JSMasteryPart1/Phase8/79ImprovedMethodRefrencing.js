// =========================================
// Using Prototype with Object.create()
// =========================================

// =====================================================
// Shared Methods Object
// =====================================================

const userMethods = {
  about() {
    return `${this.userName} is ${this.userAge} years old`;
  },

  isEligibleForVote() {
    return this.userAge >= 18;
  },
};

// =====================================================
// Factory Function
// =====================================================

function createUser(userName, userAge, userEmail) {

  // Object.create(userMethods)
  // ek naya object create karta hai
  // jiska prototype => userMethods hota hai

  const user = Object.create(userMethods);

  // Properties
  user.userName = userName;
  user.userAge = userAge;
  user.userEmail = userEmail;

  return user;
}

// =====================================================
// Creating Users
// =====================================================
const user1 = createUser( "HM Arslan", 20, "imArslan7061@gmail.com");
const user2 = createUser( "Javed Akhtar", 30, "imJaved1080@gmail.com");

// =====================================================
// Method Calls
// =====================================================

// console.log(user1);

// console.log(
//   "Calling about() for User1:",
//   user1.about()
// );

// console.log(
//   "Calling about() for User2:",
//   user2.about()
// );

// console.log(
//   "Calling isEligibleForVote() for User1:",
//   user1.isEligibleForVote()
// );

// Output:
// HM Arslan is 20 years old
// Javed Akhtar is 30 years old
// true

// =====================================================
// Important Concept
// =====================================================

// Object.create(userMethods)

// Iska matlab:
// user object ka prototype => userMethods

// Ab:
// Agar koi property ya method
// user object me directly available nahi hoga,
// to JavaScript prototype chain me check karega.

// Example:
// user1.about()

// Step 1:
// JS check karega:
// kya `about` user1 ke andar hai?

// Step 2:
// Nahi mila to JS prototype me check karega
// yani userMethods object me.

// Wahan method mil jayega
// aur function execute ho jayega.

// =====================================================
// Why This Approach is Better
// =====================================================

// Previous Approach:
// user.about = userMethods.about

// Yahan manually methods assign karne padte the.

// New Approach:
// Object.create(userMethods)

// Ab methods automatically prototype se milte hain.

// Benefits:
// ✅ Cleaner code
// ✅ Shared methods
// ✅ Better memory optimization
// ✅ Prototype chain ka use
// ✅ Real JavaScript OOP concept

// =====================================================
// Key Concept
// =====================================================

// Prototype:
// Ek fallback object hota hai
// jahan JavaScript missing properties/methods ko search karta hai.

const methodsObject = {
  about() {
    return `${this.userName} is ${this.userAge} years old`;
  },

  isAllowedToDrive() {
    return this.userAge >= 18;
  },
};

function factoryFunctionCreateUser(userName, userAge, userEmail) {
  const user = Object.create(methodsObject)
  // Properties
  user.userName = userName,
  user.userAge = userAge,
  user.userEmail = userEmail

  return user
}


const userOne = factoryFunctionCreateUser("Arslan King", 20, "imArslan7061@gmail.com")
const userTwo = factoryFunctionCreateUser("Ali Zafar", 40, "imAliZafar@gmail.com")

console.log(userOne);
console.log(userOne.about());
console.log(userOne.isAllowedToDrive());
console.log(userTwo.about());