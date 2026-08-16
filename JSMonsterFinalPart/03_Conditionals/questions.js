// Q-1 Ans
// let userSelectedThemeColor = prompt(
//   "Choose a Theme color (Light, Dark, Green, Blue)",
// );
// let themeColor = "White";
// if (userSelectedThemeColor === "Dark") themeColor = "Black";
// else if (userSelectedThemeColor === "Light") themeColor = "Light";
// else if (userSelectedThemeColor === "Blue") themeColor = "Blue";
// else if (userSelectedThemeColor === "Green") themeColor = "Green";

// if (
//   themeColor !== "Light" &&
//   themeColor !== "Dark" &&
//   themeColor !== "Blue" &&
//   themeColor !== "Green"
// ) {
//   console.log("Not Found");
// } else {
//   console.log(`Selected Theme Color: ${themeColor}`);
// }

// Q-2 Ans
// let userInpNum1 = Number(prompt("1st Number"));
// let userInpNum2 = Number(prompt("2nd Number"));
// let userInpNum3 = Number(prompt("3rd Number"));

// if (userInpNum1 > userInpNum2 && userInpNum1 > userInpNum3) {
//   console.log(`${userInpNum1} is Greatest`);
// } else if (userInpNum2 > userInpNum3) {
//   console.log(`${userInpNum2} is Greatest`);
// } else {
//   console.log(`${userInpNum3} is Greatest`);
// }

// Q-3 Ans
// const userRole = "Admin";
// switch (userRole) {
//   case "Admin":
//     console.log("Full Access");
//     break;
//   case "Editor":
//     console.log("Edit Access");
//     break;
//   case "Viewer":
//     console.log("Read Only");
//     break;
//   default:
//     console.log("No Access");
// }

// Q-4 Ans
// let NumToCheck = 9;
// if (NumToCheck % 3 === 0 && NumToCheck % 5 === 0) console.log("FizzBuzz");
// else if (NumToCheck % 5 === 0) console.log("Buzz");
// else if (NumToCheck % 3 === 0) console.log("Fizz");

// Q-5 Ans
// let Num1 = 10;
// let Num2 = 20;
// let operator = "*";

// switch (operator) {
//   case "+":
//     console.log(Num1 + Num2);
//     break;
//   case "-":
//     console.log(Num1 - Num2);
//     break;
//   case "*":
//     console.log(Num1 * Num2);
//     break;
//   case "/":
//     console.log(Num1 / Num2);
//     break;
//   default:
//     "Invalid Operator";
// }

// Q-6 Ans
// const userAction = Number(
//   prompt(`
//     Choose from these options:
//     1. Check Balance
//     2. Deposit
//     3. Withdraw
//     4. Exit `),
// );
// let accountBalance = 100;
// let res = "";
// if (userAction === 1) {
//   console.log(`Your have $${accountBalance} in your account`);
// } else if (userAction === 2) {
//   let depositAmmount = Number(prompt("Enter your deposit amount"));
//   if (depositAmmount < 1) {
//     console.log("Invalid Ammount Input");
//   } else {
//     accountBalance += depositAmmount;
//   }
//   console.log(
//     `You have deposited $${depositAmmount} and your new balance is $${accountBalance}`,
//   );
// } else if (userAction === 3) {
//   let withdrawAmmount = Number(prompt("Enter your Withdraw amount"));
//   if (withdrawAmmount > accountBalance || withdrawAmmount < 1) {
//     console.log("Invalid Ammount Input");
//   } else {
//     accountBalance -= withdrawAmmount;
//     console.log(
//       `You have Withdraw $${withdrawAmmount} and your remaining balance is $${accountBalance}`,
//     );
//   }
// } else if (userAction === 4) {
//   console.log("Thank You For Using This ATM");
// }
