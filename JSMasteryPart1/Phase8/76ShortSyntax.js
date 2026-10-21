// =========================================
// Short Syntax for Object Methods
// =========================================

const user1 = {
  userName: "Bilal Ahmad",
  age: 30,

  // =========================================
  // Normal Method Syntax
  // =========================================

  userIntro: function (hobby, favMusician) {
    console.log(
      `User Name: ${this.userName}, Age: ${this.age}, Hobby: ${hobby}, Favorite Musician: ${favMusician}`,
    );
  },

  // =========================================
  // Short Syntax Method
  // =========================================

  // function keyword likhne ki zarurat nahi hoti.
  // Ye modern JavaScript ka cleaner syntax hai.

  exampleFunc2() {
    console.log(this);

    // `this` => user1 object
    console.log(this.userName, this.age);
  },
};

// Method Call
user1.exampleFunc2();

// Output:
// { userName: "Bilal Ahmad", age: 30, ... }
// Bilal Ahmad 30

// =====================================================
// Important Concept
// =====================================================

// Dono methods same tarah kaam karte hain:

// 1. Normal Syntax
// userIntro: function () {}

// 2. Short Syntax
// exampleFunc2() {}

// Difference sirf syntax ka hai.
// Behavior dono ka same hota hai.

// =====================================================
// Best Practice
// =====================================================

// Modern JavaScript me object methods ke liye
// short syntax zyada readable aur clean mana jata hai.

const newUserOperationsObject = {
  userName: "Atif",
  age: "30",
  city: "Lahore",
  postCreation(topic) {
    console.log(`${this.userName} Created a New Post on the topic of:${topic}`)
  }
}


const userOne = {
  userName: "Jamal Shah",
  age: 40
}

newUserOperationsObject.postCreation.call(userOne, "Self Awareness")