// =========================================
// Avoid Common `this` Keyword Mistakes
// =========================================

const user1 = {
  userName: "Bilal Ahmad",
  age: 30,

  about: function (hobby, favMusician) {
    console.log(
      `User Name: ${this.userName}, Age: ${this.age}, Hobby: ${hobby}, Favorite Musician: ${favMusician}`,
    );
  },
};

// =====================================================
// Common Mistake
// =====================================================

// Method ko directly variable me store karna:

// const myFunc = user1.about;
// myFunc();

// Output:
// User Name: undefined, Age: undefined ...

// Problem:
// Jab method ko object se alag karke call karte hain,
// to uska connection object se toot jata hai.

// Is wajah se:
// `this` object ko refer nahi karta
// aur strict mode me `this` undefined ho jata hai.

// =====================================================
// Correct Solution -> bind()
// =====================================================

// bind() method use karo taake `this` permanently object se bind ho jaye.

const myFunc2 = user1.about.bind(
  user1,
  "Coding",
  "Ali Zafar"
);

// Ab:
// - `this` => user1
// - "Coding" => hobby
// - "Ali Zafar" => favMusician

myFunc2();

// Output:
// User Name: Bilal Ahmad, Age: 30,
// Hobby: Coding, Favorite Musician: Ali Zafar