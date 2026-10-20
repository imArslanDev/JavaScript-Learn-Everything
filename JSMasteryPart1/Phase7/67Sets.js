// Sets
// 1- Sets are iterable
// 2- Store Data
// 3- Sets Also Have its Own Methods
// 4- No Index-Based Access
// 5- Order is Not Gurrenteed
// 6- IMP Diffrence: Unique Items Only (no duplicates allowed)

// Set kese Banai?
// Ye Iterable Accept krta ha
// const numbers = new Set([1,2,3,4])

// Ye Dublicates Allow nhi krta to is liye unhe ignore krke just uniqe values hi store krega.
const numbers = new Set([1,2,3,3,3,3,4,5,4,5,4,5,4,3,2,1])
console.log(numbers) //  Set(5) { 1, 2, 3, 4, 5 }

// Iterable so we can loop: 
// numbers.forEach(element => {
//   console.log(element)
// });
// console.log(numbers[0]) // Output: Undefined BCZ Index Based Access Allow nhi ha.


// Ye Bhi use krne ka triqa ha Initializing Empty set then add the values
const listing = new Set();

// Yaha pr Item1 2 times repeat ho rha ha but ye 
// ignore kr dia jaiga or just 1 hi bar add hoga
listing.add("Apple")
listing.add("Item 1");
listing.add("Item 1");
listing.add("Item 2");
listing.add("Item 3");
listing.add("Item 4");
console.log("Size: ", listing.size)
listing.delete("Item 1")
console.log("After Delete:", listing)

const iterator = listing.entries()
for (const entry of iterator) {
  console.log(entry); 
}


// listing.clear()
// console.log("After Clear: ",listing)
// Ab Yaha pr ye ["Item1", "Item2"] Array add ho jai ga Because JS ma do no martaba 1
// new array create hua memory ma or do no martaba usko new address assign hua memoery ma
listing.add(["ItemOne", "ItemTwo"]);
listing.add(["ItemThree", "ItemFour"]);

// But Yaha jb hum items array ko multiple times pass krne ki kossih krega to wo add nhi hoga
// BCZ items name sa array meomry ma already avaialbe ha
let items = ["Item 1", "Item 2"]
listing.add(items);
listing.add(items);

console.log(listing);

// Check for any value is available in the set or not?
let checkValueAvailability = listing.has("Item 4")
console.log(checkValueAvailability) // Return Boolena: true/false

// Valide Is Iterable or Not:✅
for (let item of listing) {
  console.log(item);
}

// When to use Set()
// Jb hume make sure krna ha ka hamare pass unique values honi chaiye
// or same value dubara nhi a skti.
const myArray = [1, 2, 3, 4, 4, 4, 4, 5, 6, 6, 6, 6, 7, 8];
// Now I want unique eleemnts from this myArray
const uniqueEelements = new Set(myArray);
console.log(uniqueEelements);
// console.log(uniqueEelements.length) // Output: undefined length Property is not Supported with Set()
// // But What if i need to find the length of a set then use this trick
// let length = 0
// for(let item of uniqueEelements) { 
//     length++
// }

// console.log("Length:", length)

// Check Does it Change The Original Array?
// No Original Array Apni Original Condition ma rhe ga.
// console.log("Original Array:", myArray)


const tags = ["javascript", "react", "javascript", "node", "react"];
const uniqueTags = new Set(tags)
console.log("Tags: ", tags)
console.log("Unique Tags: ", uniqueTags)