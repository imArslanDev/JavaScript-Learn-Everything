// =========================================
// Step Towards OOP in JavaScript
// =========================================

// =====================================================
// Simple Object
// =====================================================

const userObj = {
  firstName: "HM",
  lastName: "Arslan",
  email: "imArslan7061@gmail.com",
  address: "House Number, Street Number, State, Pincode",
  age: 20,

  about() {
    return `${this.firstName} is ${this.age} years old`;
  },

  is18() {
    return this.age >= 18;
  },
};

// Method Calls
const userInfo = userObj.about();
const isUserEligibleForVote = userObj.is18();

console.log("User Info:", userInfo);
console.log("Eligible:", isUserEligibleForVote);

// Output:
// User Info: HM is 20 years old
// Eligible: true

// =====================================================
// Problem with Static Objects
// =====================================================

// Ye object ek single user ke liye theek hai.
// Lekin agar hume 100s ya 1000s users create karne ho,
// to har baar manually object banana inefficient hoga.

// Solution:
// Ek function banayenge jo:
// 1. User data receive kare
// 2. Object create kare
// 3. Methods add kare
// 4. Object return kare

// =====================================================
// Factory Function
// =====================================================

function createUser(userName, userAge, userEmail) {
  const user = {};

  // Properties
  user.userName = userName;
  user.userAge = userAge;
  user.userEmail = userEmail;

  // Methods
  user.about = function () {
    return `${this.userName} is ${this.userAge} years old`;
  };

  user.isEligibleForVote = function () {
    return this.userAge >= 18;
  };

  return user;
}

// =====================================================
// Creating Multiple Users
// =====================================================

const user1 = createUser(
  "HM Arslan",
  20,
  "imArslan7061@gmail.com"
);

const user2 = createUser(
  "Javed Akhtar",
  30,
  "imJaved1080@gmail.com"
);

// Method Calls
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

// createUser() ek Factory Function hai.

// Factory Function:
// - Object create karta hai
// - Properties add karta hai
// - Methods add karta hai
// - Object return karta hai

// Is approach se hum easily
// multiple users create kar sakte hain.

// =====================================================
// Drawback of This Approach
// =====================================================

// Har naye object ke saath:
// about() aur isEligibleForVote()
// methods dubara memory me create hote hain.

// Ye memory inefficient hai.

// Isi problem ko solve karne ke liye:
// Prototype aur Classes use ki jati hain.

function createNewStudent(stName, stAge, stCourse, stEnrolmentStatus) {
  const student = {
    stName,
    stAge,
    stCourse,
    stEnrolmentStatus,
    // Methods
    about() {
    return `${this.stName} is Enrolled in ${this.stCourse} Course`;
    },

    isCurrentlyEnrolled() {
      let check = this.stEnrolmentStatus === "Active" ? "Enrolled" : "Not Enrolled"
      return check
    }
  }

  return student

}

const student1 = createNewStudent("Zoha", 22, "Digital Marketing", "Active")
console.log(student1.isCurrentlyEnrolled())
console.log(student1.about())
console.log(student1)