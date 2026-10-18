// while loops in arrays
const fruits = ["Apple", "Mango", "Grapes", "Banana"];

let i = 0
let caps = []
while (i < fruits.length) {
    caps.push(fruits[i].toUpperCase())
    i++
}
console.log(caps)