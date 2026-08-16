// Ternory Example
let res1 = "Return Response 1";
let res2 = "Return Response 2";
let res = "Test";

let finalOutput = res === "Test" ? res1 : res2;
console.log(finalOutput);

// Challenge 1
let UserAge = 20;
let message =
  UserAge >= 18 ? "Eligible For Booking" : "Not Eligible For Booking";
console.log(message);

// Challenge 2
let userName = "";
let password = "";
let accountAccessCheck =
  userName && password
    ? "Login Successfull"
    : "UserName and Password both are required!";
console.log(accountAccessCheck); // Output: Login Successfull

// Nesting in Ternory Operator
let userRole = "Admin";

let accessLevel =
  userRole === "Admin"
    ? "Full Access"
    : userRole === "Sub-Admin"
      ? "Manage Users & Content"
      : userRole === "Editor"
        ? "Edit & Publish Content"
        : userRole === "Customer"
          ? "View Only"
          : "Access Denied";

console.log(accessLevel); // Output: Edit & Publish Content
