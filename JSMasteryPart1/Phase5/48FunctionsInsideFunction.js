// Functions Inside Function

// hum 1 function ke andr multiple functions ko create and use kr skte hain.
const app = () => {

  myFunc();
  function myFunc() {
    console.log("Hello From My Func");
  }

  const addTwoNum = (num1, num2) => {
    let sum = `The Sum of ${num1} + ${num2} is ${num1 + num2}`;
    return sum;
  };

  const mul = (n1, n2) => `The Multiplication of ${n1} x ${n2} is ${n1 * n2}`;
  
  console.log("Inside App");
  console.log(addTwoNum(10, 20));
  console.log(mul(2, 10));
};
app();


// Iska Output ye ho ga: 
// Hello From My Func
// Inside App
// The Sum of 10 + 20 is 30
// The Multiplication of 2 x 10 is 20