// while loop

// Print 0 to 9 manually
let i=0
console.log(i)
i++;
console.log(i)
i++;
console.log(i)
i++;
console.log(i)
i++;
console.log(i)
i++;
console.log(i)
i++;
console.log(i)
i++;
console.log(i)
i++;
console.log(i)
i++;
console.log(i)
i++;

// Loops are used to repeat a block of code multiple times until a certain condition is met.
// They help to avoid code duplication and make the code more efficient and easier to maintain.
// DRY Pinciple - Don't Repeat Yourself

// print 0 to 9 using while loop
let num = 0;
while (num < 10) {
    console.log("Number is: ", num);
    num++;
}
console.log(num) // Output: 10

let initialVal = 0
let sentence = "Where there is a will there is a way"
while (initialVal < sentence.length) {
    console.log(sentence[initialVal])
    initialVal++
    
}