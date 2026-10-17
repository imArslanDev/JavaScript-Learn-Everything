// // break keyword
// for (let i = 1; i < 11; i++) {
//     if(i === 6) {
//         console.log("Break")
//         break
//     }
//     console.log(i)
// }
// // Break keyword condition true hone pr execution context ko for loop se bahir jump krwa de ga. 


// // continue keyword
// for(let i = 21; i < 31; i++) {
//     if(i === 26) {
//         console.log("Continue")
//         continue
//     }
//     console.log(i)
// }
// // Continue keyword condition true hone pr just wo specific
// // iteration skip kr ke dubara loop continue krega.


// Revision
let sentence = "Good Morning"
for(let i= 0; i<sentence.length; i++) {
    if(sentence[i] == "M") {
        break
    }
    console.log(sentence[i])
}

// let count = 0
// let value = 20
// for(count; count <= value; count++) {
//     if(count === 18) {
//         continue
//     }
//     console.log(count)
// }

// let detect = "l"
// let name = "Arslan"

// for(let i=0; i < name.length; i++) {
//     if(name[i] === detect) {
//         break
//     }
//     console.log(name[i])
// }