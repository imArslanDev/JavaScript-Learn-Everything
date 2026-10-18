// use const for creating array
const pi = 3.14
// pi = 12  // Assignment to Constant Error

// So here we are able to push the new item in fruits array even the fruits array is created with const
// Yes this is fine becuase ye array ka method ha jo ke existing array pr operation perform kr rha ha 
// new array create nhi kr rha or reasgin nhi krrha wohi same Heap or pointer address wala concept ha
// or recommended ha ka const ka use kr ke hi arrays ko create krain becuase let ke case ma issue ho skte hain like re-assigning issue.
const fruits = ["Apple", "Mango", "Grapes", "Banana"];
fruits.push("Strawberry" , "Kivi")
fruits.pop()
const slicedFruitArr = fruits.slice(0, 3)
console.log("sliced Array:", slicedFruitArr)
console.log("Original Fruits Array", fruits)

// fruits = ["Apple", "Mango"]; // But ye const ke case ma kro ga to error a jai ga

// Issues with let
let myFruits = ["Apple", "Mango", "Grapes", "Banana"];
myFruits = ["Apple", "Mango"]; // Yha ye re-assign krdega
console.log(myFruits)