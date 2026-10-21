// =========================================
// Arrow Function Behavior in JavaScript
// =========================================

const user1 = {
  userName: "Bilal Ahmad",
  age: 30,

  // Arrow Function
  aboutWithArrowFunc: (hobby, favMusician) => {
    console.log(this);

    console.log(
      `User Name: ${this.userName}, Age: ${this.age}, Hobby: ${hobby}, Favorite Musician: ${favMusician}`,
    );
  },

  // Regular Function
  aboutWithClassicFunc: function (hobby, favMusician) {
    console.log(this);

    console.log(
      `User Name: ${this.userName}, Age: ${this.age}, Hobby: ${hobby}, Favorite Musician: ${favMusician}`,
    );
  },
};

// =====================================================
// Arrow Function Behavior
// =====================================================

// Arrow functions apna khud ka `this` create nahi karta.
// Ye apne parent (lexical) scope ka `this` use karta ha.

// Is example me:
// aboutWithArrowFunc global scope me define hua hai,
// isliye iska `this` global object ko refer karega.

// Browser:
// this => window object

// Node.js:
// this => global object

// user1.aboutWithArrowFunc.call(user1, "Coding", "Ali Zafar");

// Output:
// User Name: undefined, Age: undefined, Hobby: Coding, Favorite Musician: Ali Zafar

// Important:
// call(), apply(), aur bind()
// arrow functions ka `this` change nahi kar sakte.

// =====================================================
// Regular Function Behavior
// =====================================================

// Regular functions ka `this`
// function call par depend karta hai.

// user1.aboutWithClassicFunc.call(
//   user1,
//   "Coding",
//   "Ali Zafar"
// );

// Output:
// User Name: Bilal Ahmad, Age: 30,
// Hobby: Coding, Favorite Musician: Ali Zafar

// Yahan:
// `this` => user1

// Kyunki function user1 object ke context me call hua hai.

// =====================================================
// Nested Object Example
// =====================================================

// const parentObj = {
//   userName: "Parent Object",

//   childObj: {
//     userName: "Bilal Ahmad",
//     age: 30,

//     aboutWithArrowFunc: (hobby, favMusician) => {
//       console.log(this);

//       console.log(
//         `User Name: ${this.userName}, Age: ${this.age}, Hobby: ${hobby}, Favorite Musician: ${favMusician}`,
//       );
//     },
//   },
// };

// parentObj.childObj.aboutWithArrowFunc(
//   "Coding",
//   "Ali Zafar"
// );

// Output:
// User Name: undefined, Age: undefined ...

// Important:
// Objects khud lexical scope create nahi karte.
// Sirf functions lexical scope create karte hain.

// Isliye arrow function ka `this`
// childObj ya parentObj ko refer nahi karega.

// =====================================================
// Key Difference
// =====================================================

// Arrow Function:
// - Apna `this` nahi hota
// - Parent scope ka `this` inherit karta ha
// - call(), apply(), bind() iska `this` change nahi kar sakte

// Regular Function:
// - Apna `this` hota hai
// - `this` function call ke time decide hota hai
// - call(), apply(), bind() se `this` change kar sakte hain

// =====================================================
// Best Practice
// =====================================================

// Object methods ke liye:
// ✅ Regular Function use karo

// Callbacks aur nested functions ke liye:
// ✅ Arrow Function useful hoti hai

// Avoid:
// ❌ Object methods me arrow functions use karna
// agar `this` object ko refer karna ho.