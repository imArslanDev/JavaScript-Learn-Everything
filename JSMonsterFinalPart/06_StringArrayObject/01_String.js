// Note: Strings are immutable in JS means you cannot change the original string
// But you can use that string to create new string

// Diff b/w Properties or Methods?
// Properties provide info like str.length provide string length
// Methods perform some task like toUpperCase() will change the text into UPPERCASE

let str = "Hello";
let upperCaseStr = str.toUpperCase(); // Will Not Change Original String
// console.log(str); // Hello
// console.log(upperCaseStr); // HELLO

let firstName = "Hafiz";
let middleName = "Muhammad";
let lastName = "Arslan";

let fullName = firstName + " " + middleName + " " + lastName;
let fullNameStringInterpolation = `${firstName} ${middleName} ${lastName}`; // Prefferd
// console.log(fullName);
// console.log(fullNameStringInterpolation);

// let str = new String("Manas")
// String Constrcutor
let stringConstructor = new String("Arslan");
// console.log(stringConstructor);

// Escape Sequences Characters
let str2 = "Calm \n Down";
// console.log(str2);
let str3 = "Hello\\Bhai";
// console.log(str3.length);
// console.log(str3);

// Index Base Access
let sentence = "Where there is a will there is a way";
// console.log(sentence[0]);
// console.log(sentence[4]); // Negative Index not Supported
// console.log(sentence[10]);

// let changeStr3rdIndexCharc = (sentence[3] = "A");
// console.log(sentence); // Orignal String Remain Same Becuse Strings are Immutable

// Looping on String
let strNew = "";
for (let ch of sentence) {
  strNew += ch + " ";
}
console.log(strNew);

for (let index in sentence) {
  console.log(sentence[index]);
  console.log(typeof index);
}

// String Methods
// let string = "Hello"
// string.toUpperCase()
// string.toLowerCase()
// str.trim();
// firstName.concat(middleName, lastName); // HafizMuhammadArslan

let sentence2 =
  "Once there was a crow he was very thirsty he flew here and there in search of water Words IOS, IOS";
let check = sentence2.includes("was");
console.log(check);
console.log(sentence2.indexOf("w"));
console.log(sentence2.charAt(15));
console.log(sentence2.replace("crow", "Crow"));
console.log(sentence2.replaceAll("IOS", "Apple"));

let username = "im@Arslan";
console.log(username.slice(-9));
console.log(username.slice(2, 5));
console.log(username.substring(1, 5)); // m@Ar

let capitalizedSentence = sentence2
  .split(" ")
  .filter(Boolean)
  .map((item) => item[0].toUpperCase() + item.slice(1))
  .join(" ");
console.log(capitalizedSentence);

let replaceStr = "i am a boy";
console.log(replaceStr.replace("boy", "Boy"));

// Q-1 Solution
// let fullName = prompt("Enter your full name");

// let username =  `@${fullName.trim().replaceAll(" ","")}_${fullName.length}`
// console.log(username)

// question 2

// let str = prompt("Enter any string");
// let ch = prompt("Enter any character");

// let count=0;
// for (let val of str) {
//     if (val.toLowerCase() === ch.toLowerCase()) {
//         count++;
//     }
// }
// for (let index in str) {
//     if (str[index].toLowerCase() === ch.toLowerCase()) {
//         console.log("occurence position = ", index)
//         count++;
//     }
// }
// console.log("Count =", count)

// question 3

// let str = "hello i am a boy alsdjf ldsjflds f"
// console.log(str.split(" ").length)

// let messyStr = "Ma   r   vel";
// let cleanedStr = messyStr.replaceAll(" ", "");
// console.log("Messy String:", messyStr);
// console.log("Cleaned String:", cleanedStr);

// Clean String with loop
// let cleanStr = "";
// for (let i = 0; i < messyStr.length; i++) {
//   if (messyStr[i] !== " ") {
//     cleanStr += messyStr[i];
//   }
// }
// console.log(cleanStr);
