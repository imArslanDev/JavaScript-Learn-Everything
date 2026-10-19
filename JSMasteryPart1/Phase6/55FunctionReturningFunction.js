// Function Returning Function

function myFunc() {
    return "A"
} // a function can be return anything

const result = myFunc() // myFunc ne jo return kia wo mane result valirable ma store kr lya
console.log(result) // Output: A

// Isi trha ab function se function return kr ke dekhte ha
function myFunc2() {
    function greeting() {
        console.log("Good Morning Sir")
    }
    return greeting
}

const greetingMessage=  myFunc2()
greetingMessage()

// IMP: agr koi function as input leta ha 1 function ko ya return krta ha 1 function ko ya kisi function
// ma ye do no kam 1 sath hota ha to aesa function ko kehta ha Higher Order Function (HOF)