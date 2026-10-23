// =========================================
// Optimizing Memory with Shared Methods
// =========================================

// =====================================================
// Problem with Previous Approach
// =====================================================

// Previous factory function me,
// har new user object ke saath
// methods bhi dobara create ho rahe the.

// Example:
// user.about = function () {}
// user.isEligibleForVote = function () {}

// Agar 1 million users create hon,
// to ye methods bhi 1 million times
// memory me store honge.

// Problem:
// - Extra memory usage
// - Inefficient approach
// - Performance impact

// =====================================================
// Better Solution
// =====================================================

// Methods ko alag object me store karenge
// aur har user object ko sirf un methods ka
// reference denge.

// Isse:
// ✅ Methods sirf ek baar memory me banenge
// ✅ Sare users same methods share karenge
// ✅ Memory efficient approach

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
  const user = {};

  // Properties
  user.userName = userName;
  user.userAge = userAge;
  user.userEmail = userEmail;

  // Shared Method References
  user.about = userMethods.about;
  user.isEligibleForVote = userMethods.isEligibleForVote;

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

console.log(user1.about());
console.log(user2.about());

console.log(user1.isEligibleForVote());

// Output:
// HM Arslan is 20 years old
// Javed Akhtar is 30 years old
// true

// =====================================================
// Important Concept
// =====================================================

// Yahan:
// user.about = userMethods.about

// Iska matlab:
// Method copy nahi ho raha,
// sirf uska reference assign ho raha hai.

// Sare objects same method ko use karte hain.

// =====================================================
// Advantage of This Approach
// =====================================================

// ✅ Better memory optimization
// ✅ Shared methods
// ✅ Faster and cleaner structure
// ✅ Step closer to Prototypes in JavaScript

// =====================================================
// Still Not the Best Solution
// =====================================================

// Abhi bhi hume manually:
// user.about = userMethods.about

// assign karna pad raha hai.

// JavaScript me is problem ko
// automatically solve karne ke liye
// Prototypes use kiye jate hain.