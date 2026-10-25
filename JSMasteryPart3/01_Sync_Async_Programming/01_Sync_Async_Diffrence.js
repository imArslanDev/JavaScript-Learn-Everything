// Synchronous Programming vs Asynchronous Programming

// Synchronous Programming
// Ye ha Example Synchronous Programming ki jis ma 1 by 1 kam hoga 
// jb tk 1 kam complete nhi hoga tb tk 2 kam start nhi hoga
// Problem: Ye code blocking code hota ha becuase next task current taks ke complete hone ka wait 
// krta ha. like huma Backend sa data fetch krna ha to us ma kuch time lgta ha so ab jb tk data nhi ajyge code age exuection start nhi krega jo ke sahi nhi ha isi liye humne solution dekha in the from Asynchronous Programming.

// IMP: JavaScript By Default 1 Synchronous Programming Language ha or Single Threaded ha.
// console.log("Script Start")

// for(let i=0; i < 1000; i++) {
//     console.log("Inside for loop")
// }

// console.log("Script End")


// Asynchronous Programming
console.log("Script Start")

const consoleMessage = () => console.log("Inside Timeout")

// setTimeout 2 cheezain lega 
// 1- function,
// 2- kitne time ke bad jo function apne pass kya usko run/call krna ha  
setTimeout(consoleMessage, 0);


setTimeout(() => {
    for(let i=0; i < 1000; i++)  console.log("....")
}, 1000 );

const timerID = setTimeout(() => {
   console.log("Im Running inside a timeout function") 
}, 1000);

console.log("setTimeout ID:", timerID)
console.log("Clearing Time Out")
clearTimeout(timerID)
console.log("Script End")