// =========================================
// Call, Apply & Bind Methods in JavaScript
// =========================================

const userOne = {
  userName: "Alice Jhon",
  age: 30,

  about: function (hobby, favMusician) {
    console.log(
      `User Name: ${this.userName}, Age: ${this.age}, Hobby: ${hobby}, Favorite Musician: ${favMusician}`,
    );
  },
};

const userTwo = {
  userName: "Ali Zafar",
  age: 25,
};

// =====================================================
// Problem:
// userTwo ke paas about() method nahi hai.
// Hum userOne ka about() method userTwo ke liye use karna chahte hain
// bina method copy kiye.
// =====================================================

// =====================================================
// 1. call() Method
// =====================================================

// call() method function ko immediately execute karta hai.
// Pehla argument `this` ki value set karta hai.
// Baaki arguments normal comma-separated pass hote hain.

// userOne.about.call(userTwo, "Gardening", "Atif Aslam");

// Output:
// User Name: Ali Zafar, Age: 25, Hobby: Gardening, Favorite Musician: Atif Aslam

// Yahan:
// - this => userTwo
// - "Gardening" => hobby
// - "Atif Aslam" => favMusician

const custDetails = {
  customerName: "Asif Jamil",
  age: 30,
  customerHistory: function (attachedSince, mostLikedServices) {
     console.log(
      `${this.customerName} is our Most Valuable Customer Since: ${attachedSince} and Mostly Purchase ${mostLikedServices} Services`,
    );
  }
} 

let customerInfo = {
  customerName: "Jami",
  age: 40  
}

// custDetails.customerHistory.call(customerInfo, "5 Years", "Web Development")

// Agar call() me object pass na karein:
// userOne.about.call();

// Output:
// User Name: undefined, Age: undefined, Hobby: undefined, Favorite Musician: undefined

// Why? BCZ hmne na hi this set kya or nahi Method ma puchse gaye Parameters pass kia
// userOne.about.call(userOne, "Reading", "Ali Zafar" )
// Now: User Name: undefined, Age: undefined, Hobby: undefined, Favorite Musician: undefined


// Important Rule:
// call() ka pehla argument hamesha object hota hai
// jise `this` refer karega.

// =====================================================
// Separate Function Example
// =====================================================

function about(hobby, favMusician) {
  console.log(
    `Name: ${this.userName}, Age: ${this.age}, Hobby: ${hobby}, Favorite Musician: ${favMusician}`,
  );
}

const user1 = {
  userName: "Bilal Ahmad",
  age: 30,
};

const user2 = {
  userName: "Saim Ali",
  age: 25,
};


// call() examples:
// about.call(user1, "Cycling", "Arslan")
// about.call(user2, "Coding", "Atif Aslam");


// =====================================================
// 2. apply() Method
// =====================================================

// apply() bhi call() ki tarah hota hai.
// Difference sirf itna hai:
// - call() => arguments comma-separated leta hai
// - apply() => arguments ek array me leta hai

// about.apply(user1, ["Teaching", "Rahat Fateh Ali Khan"]);
// about.apply(user2, ["Cricket", "Nusrat Fateh Ali Khan"]);

// =====================================================
// 3. bind() Method
// =====================================================

// bind() function ko immediately execute nahi karta.
// Ye ek naya function return karta hai
// jisme `this` permanently bind ho jata hai.

// Example:
const newFunc = about.bind(user1);
const newFunc2 = about.bind(user2)

// Ab jab bhi newFunc chalega,
// `this` hamesha user1 ko refer karega.

// newFunc("Coding", "Ali Zafar");
// newFunc2("Cycling", " Arslan");

// =====================================================
// bind() with Predefined Arguments
// =====================================================

// bind() me arguments bhi pehle se set kar sakte hain.

const newFunc3 = about.bind(
  user2,
  "Book Reading",
  "Attaullah Khan Esa Khelvi"
);

// Ab arguments already bind ho chuke hain.
// newFunc3();

// Output:
// Name: Saim Ali, Age: 25, Hobby: Book Reading,
// Favorite Musician: Attaullah Khan Esa Khelvi

// =====================================================
// Quick Summary
// =====================================================

// call()
// -> Function ko immediately execute karta hai
// -> Arguments comma-separated leta hai

// apply()
// -> Function ko immediately execute karta hai
// -> Arguments array me leta hai

// bind()
// -> Function ko immediately execute nahi karta
// -> Naya function return karta hai
// -> `this` ko permanently bind kar deta hai
// - Optional arguments bhi pehle se set kar sakte hain

// // Practice
// const userInfo = {
//   userName: "Arslan",
//   userAge: 20,
//   info: function(hobby) {
//     return `User Name: ${this.userName}. \nUser Age: ${this.userAge}. \nUser Hobby: ${hobby}`
//   }
// }

// const userInfo2 = {
//   userName: "Ali",
//   userAge: 42
// }

// const userInfo3 = {
//   userName: "Atfi",
//   userAge: 40
// }


// let callMethodResult = userInfo.info.call(userInfo, "Content Creation")
// let applyMethodResult = userInfo.info.apply(userInfo2, ["Gardening"])
// let bindMethodResult = userInfo.info.bind(userInfo3, "Painting")

// console.log(callMethodResult)
// console.log(applyMethodResult)
// console.log(bindMethodResult())