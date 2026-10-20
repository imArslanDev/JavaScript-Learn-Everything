// Optional Chaning
const user = {
    userName: "Thomas",
    // address: {StreetNumber: "120HZ"}
}

console.log(user.address) //  undefined Abhi Code Phate ga nhi 
// console.log(user.address.StreetNumber) //But yaha pr code phatega
// becuase hum nested ja rhe ha Like user ke andr address hi nhi mila
// to hum us ke bhi under StreetNumber dhond rhe ha to is lye code break
// hoga or ye err ayega TypeError: Cannot read properties of undefined (reading 'StreetNumber')

// Optional Chaining
// console.log(user.userName.address.streetNumber) // This will crash
console.log(user?.userName?.address?.streetNumber) 
// But with Optional Chanining Your Code can Save from Blast 
// You just simply have undefined if no match or data available