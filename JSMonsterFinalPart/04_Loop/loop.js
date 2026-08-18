// for (let i = 1; i <= 10; i++) {
//   console.log(i * 5);
// }

// let i = 1;
// while (i <= 10) {
//   console.log(i * 10);
//   i++;
// }

// let initialVal = 20;
// do {
//   console.log(initialVal);
//   initialVal++;
// } while (initialVal <= 10);
// console.log("Current Val of initialVal:", initialVal); // 21

// let str = "HM Arslan";
// for of: Value deta ha
// for (let char of str) {
//   console.log(char);
// }

// for in: Index deta ha
// for (let charIndex in str) {
//   console.log(charIndex);
// }

// for(let ch in str){
//     console.log(ch)
// }

// challenge1

// for (let i = 0; i <= 100; i++) {
//   if (i % 2 === 0) console.log(i);
// }

let text = "This is a Book";
let vowelCount = 0,
  consonentCount = 0;
for (let letter of text.toLowerCase()) {
  if (
    letter === "a" ||
    letter === "e" ||
    letter === "i" ||
    letter === "o" ||
    letter === "u"
  ) {
    vowelCount++;
  } else if (letter >= "a" && letter <= "z") {
    consonentCount++;
  }
}
console.log("Vowel =", vowelCount);
console.log("Consonent =", consonentCount);
