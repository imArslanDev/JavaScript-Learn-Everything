// Spread Operator

// This will happen BCZ Strings are also iterable like Arrays
const newArray = [..."Apple"] // Output: ["A", "p", "p", "l", "e"]
// console.log(newArray);

// Note: kisi bhi object ma same key 2 bar nhi askti sirf 1 hi bar add hoti ha
// same key agr ap dubara add kroga to hasmehsa last wali key ko prefer krega Keep
// in mind or last wali pehle wali ko over write kregi.

const obj = {
  key1: "Val 1",
  key2: "Val 2",
  key3: "Val 3",
  key1: "Val 10000", // This will owerwrite Val 1 with Val 10000
};
// console.log(obj);

// Spread Operator in Objects
const obj1 = {
  key1: "Value1",
  key2: "Value2",
  key3: "Value3",
};

const obj2 = {
  key3: "Last Value3",
  key4: "Value4",
};


const newObj1 = {...obj1}
obj1["unique key"] = "Unique Value"
console.log("Obj1:", obj1)

// Cloning obj1 & obj2 in the newObj Object
const newObj = {
  newObj1,
  ...obj2,
  key5: "Value5",
  key6: "Value6",
};
console.log("New Object with containing cloned Objects:", newObj);
// obj1["unique key"] = "Unique Value"
// console.log("Obj1:", obj1)


// The Way we have spreading Strings in Arrays we can do the same in the Objects as well
const createNewObjWithString = { ..."Apple" }; 
// Expected Output: {
//  '0': 'A',
//  '1': 'p',
//  '2': 'p', 
//  '3': 'l',
//  '4': 'e' 
// }

const createNewObjWithArray = { ...["Item1", "Item2", "Item3"] };
console.log(createNewObjWithArray)
console.log(createNewObjWithArray[0])
//  // Expected Output: { '0': 'Item1', '1': 'Item2', '2': 'Item3' }
 
// console.log(createNewObjWithString);
// console.log(createNewObjWithArray);