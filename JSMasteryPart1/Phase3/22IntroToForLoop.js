// intro to for loop
// let num = 7
// for (let i = 1; i <= 10; i++) {
//     let table = `${num} X ${i} = ${i * num}`
//     console.log(table)
    
// }
// let i = "outerI" // let is not accessible out side of it's block
// console.log(i)

let tableOf = 12
for (let i = 1; i < tableOf; i++) {
    console.log(`${tableOf} X ${i} = ${tableOf * i}`)
}

// For Interview Prespective 
let val=11 // We can also declare the variable outside of the for loop and it works
for( ; val <= 15; val++) { // becuase here we proivde 3 things after for keywprd in parenthesis 
    // 1- inital value => val
    // 2- condition  ==> val <= 50;
    // 3- processing with value ==>  val++
    console.log(val, "Printing")
}

// let outerVal = "Arslan"
// init = 0
// for( ; init < outerVal.length; init++ ) {
//     console.log(outerVal[init])
// }