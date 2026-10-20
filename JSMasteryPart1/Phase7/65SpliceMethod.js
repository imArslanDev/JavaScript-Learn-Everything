// splice Method
// start, delete, insert

//IMP: splice Method Actual Array ko Change/Mutate krega.

const myArray = ["Item1", "Item2", "Item3", "Item4", "Item5"];
// let deletedItems = myArray.splice(1, 3, "Ye Add Kia" );
// console.log(myArray)
// console.log(deletedItems)


//  Delete Array Element/Elements
// myArray.splice(2, 1); // Is kab Matlab Start from 2nd Index and delete 1 item only
// console.log(myArray);

// Insert/Add Array Element/Elements
// myArray.splice(2, 0, "Add 3", "Add 4", "Add 5"); // Start from 2nd index, do not delete anything & add
// console.log(myArray);

// Add + Deleting Elements
// myArray.splice(2, 3, "Item3");
// console.log(myArray);

// This will also return the deleted elements
let deletedElements = myArray.splice(1, 2);
console.log("Deleted Elementes", deletedElements);
console.log("Original Array:", myArray);

// IMP: It just Return Deleted Items Not Return The Inserted Itmes Seprately.
let insertedElements = myArray.splice(2, 0, "Inerted Item 1", "Inerted Item 2", "Inerted Item 3")
console.log("Inerted Items", insertedElements)
console.log(myArray)