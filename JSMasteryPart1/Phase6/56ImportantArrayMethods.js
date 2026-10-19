// Important Array Methods
const numbersArray = [1, 2, 3, 4, 5];

function multiplyBy2(number, index, arr) {
  console.log(`index is ${index}`);
  console.log(`${number} x 2 = ${number * 2}`);
  console.log(arr);
}

// for (let i = 0; i < numbersArray.length; i++) {
//   multiplyBy2(numbersArray[i], i, numbersArray);
// }

numbersArray.forEach(multiplyBy2);
// forEach ke pass 3 cheese hoti ha item, index, array
// forEach ma hum callBack pass krte ha current case ma humne multiplyBy2
// function pass kia or further multiplyBy2 wala function 3 arguments pass krne tha number, index, arr
// joke forEach ke pass default hote ha is liye humne just multiplyBy2 pass kia as a refrence in the forEach callBack
// or forEach na automatically value ko pass krdia or expected output mil gya.

// By defining callBack inside forEach
numbersArray.forEach((item, index, array) => {
  console.log(`index is ${index}`);
  console.log(`${item} x 2 = ${item * 2}`);
  console.log(array);
});

// Diffrence ye ha ki uper hm na function bahir create kia ha and then foreach ko pas krida or yaha foreach ke andr likha ha work same hi kra ga

// Perhaps forEach accept 3 arguments which is item, index & array but it is not compulsary for you to pass all of them
// you can pass only 1 as well totally upto you and your use case.

numbersArray.forEach((item) => {
  console.log(`2 x ${item} = ${item * 2}`);
});

const users = [
    {userName: "Alice", age: 30},
    {userName: "Jhonson", age: 35},
    {userName: "Jason", age: 40},
    {userName: "Roger", age: 25},
]

users.forEach(user => console.log(user.userName))