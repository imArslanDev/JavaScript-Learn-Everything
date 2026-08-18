// Q-1 Ans
// let numberInp = Number(prompt("Enter a number"));
// let sum = 0;
// for (let i = 1; i <= numberInp; i++) {
// //   console.log(`${i} + ${sum}`);
//   sum += i;
// //   console.log(sum);
// }
// console.log(sum);

// Q-2 Ans
// let m = Number(prompt("Enter Starting Number:"));
// let n = Number(prompt("Enter Ending Number: "));
// let sum = 0;

// for (let i = m; i <= n; i++) {
//   sum += i;
//   console.log(sum);
// }

// Q-3 Ans
// let n = Number(prompt("Enter Any Number: "));
// for (let i = 1; i <= n; i++) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
// }

// Q-4 Ans
// let computerNumber = 20;
// let totalGuessAttempts = 10;
// let attempsUsed;
// let guessNumber;
// while (guessNumber !== computerNumber) {
//   if (totalGuessAttempts >= 0) {
//     guessNumber = Number(prompt("Guess the correct Number"));
//   }
//   if (isNaN(guessNumber)) alert("Please add a Valid Number");
//   if (totalGuessAttempts >= 0) {
//     attempsUsed = totalGuessAttempts--;
//   }
//   if (guessNumber < computerNumber) {
//     alert("Your guess is low");
//   } else if (guessNumber > computerNumber) {
//     alert("Your guess is high");
//   }
//   if (guessNumber === computerNumber) {
//     alert(`
//         Congratulations you guessed the correct number: ${guessNumber} in ${attempsUsed} attemps
//         Total Attepts remaining: ${totalGuessAttempts}
//         `);
//   }
// }

// Q-5 Ans
// let totalPasswordAttempts = 0;
// let correctPassword = "Arslan";
// let userPassAttempt;
// while (userPassAttempt !== correctPassword && totalPasswordAttempts < 5) {
//   userPassAttempt = prompt("Guess the correct password");
//   totalPasswordAttempts++;
//   if (userPassAttempt === correctPassword) {
//     alert("Congratulations... Your password is correct");
//   }
//   userPassAttempt !== correctPassword && totalPasswordAttempts == 5
//     ? alert("Your Attempts are over please refresh the page to try again")
//     : userPassAttempt !== correctPassword
//       ? alert("You password is wrong . Please try again")
//       : "";
// }

// Q-6 Ans
// let userInpNum = Number(prompt("Enter a number"));
// let factorial = 1;
// for (let i = 1; i <= userInpNum; i++) {
//   factorial *= i;
// }
// console.log(`Factorial of ${userInpNum} is: ${factorial}`);

// Q-7 Ans
// for (let i = 1; i <= 5; i++) {
//   let str = "";
//   for (let a = 1; a <= i; a++) {
//     str += a;
//   }
//   console.log(str);
// }

// Q-8 Ans
// let askUser;
// let playAgain;

// do {
//   askUser = prompt(`
//       You wake up in a dark forest...
//       Do you go "Left" or "Right" ?
//       `);
//   if (askUser === "Left") {
//     let ask = prompt(`
//         You walk into a swamp...
//         You see something shiny in the mud.
//         Do you pick it up? (Yes or No)`);
//     if (ask !== "Yes" && ask !== "No") {
//       alert(`Please Type between "Yes" or "No" only`);
//       ask = prompt("Do you pick it up? (Yes or No)");
//     }
//     if (ask === "Yes") alert(`You're teleported to Safe place. You Win!`);
//     if (ask === "No") alert("You sink slowly into the mud. Game over");
//   } else if (askUser === "Right") {
//     let ask = prompt(`
//         You find a cave...
//         Do you enter the cave? (Yes or No)`);
//     if (ask !== "Yes" && ask !== "No") {
//       alert(`Please Type between "Yes" or "No" only`);
//       ask = prompt("Do you pick it up? (Yes or No)");
//     }
//     if (ask === "Yes")
//       alert(`A dragon wakes up and chases you away. You Lose!`);
//     if (ask === "No")
//       alert("You transported into a peaceful night under the stars. You Win!");
//   }
//   playAgain = prompt("Do you want to play again?");
// } while (playAgain !== "No");
