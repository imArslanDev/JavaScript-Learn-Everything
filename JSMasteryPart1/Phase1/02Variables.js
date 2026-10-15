// "use strict";
// Intro to variables in JavaScript

userKaName = "Arslan King"
console.log(userKaName)

// variables can store some information 
// we can use that information later in the program
// we can change that information whenever we want

// declaring a variable
var myName = "Arslan";

// use the variable
console.log(myName);

// This var here is a keyword to declare a variable.
// These Keywords are already defined in Programming Languages
// Variables names are case sensitive

// changing the variable value
myName = "imArslan";

// Altought it is not recommnded and not even allowed in other keyewords like let, const but in var we can redeclare the variable
var myName = "Mir Hadi";
console.log(myName);

// agr hum variables ko withouth (var) bhi declare krne ki koshsih kre to wo ho ji ga but is ki waja se bohot issues create ho skte ha so is ko avoid krna chahiye or if we want to restrict ke without var vairable declare na ho to hum strict mode use kr skte ha.

// These variables are cause error in strict mode
// firstName = "Bilal"
// console.log(firstName);


// Revision Practice

// Declaring a variable
var userName = "Arslan"
// Now at this point userName = "Arslan"

// Changing Variable
userName = "King"
// Now userName Changes to King


// Here im redeclaring the variable but it is not allowed and not doable  in the let & const case.
var yourCity = "Lahore"
var yourCity = "Karachi"


// randomName = "Ahsan"
// if strict mode is not enabled then varaible randomName declared and usable
// like normal variable but not recommended and create issues in any serious 
// project so we use strict mode to avoid this behaviour. 