// filter method
const numbersArray = [3, 6, 7, 1, 2, 8, 9, 10, 4, 6];

const isEven = (number) => {
    return number % 2 === 0
}

// filter method me jo callback function hoga chahe uske andr bnay ya bahir bna kr refrence pass krain to wo hamesha boolena return krega.
// Then filter Method hamesha new array return krega jis ma sirf true values hogi.
let filteredEvenNumbers = numbersArray.filter(isEven)
console.log(filteredEvenNumbers)

let filterOddNumbers = numbersArray.filter((num) => {
    return num % 2 !== 0
})
console.log(filterOddNumbers)

let users = [
    {id: 1, userName: "Arslan"},
    {id: 2, userName: "Atif"},
    {id: 3, userName: "Ali"},
    {id: 4, userName: "Asim"},
    {id: 5, userName: "Muneeb"},
    {id: 6, userName: "Saim"},
    {id: 7, userName: "Haidar"},
]

let filteredByFirstCharacter = users.filter((item) => item.userName.startsWith("A"))
console.log(filteredByFirstCharacter)

let userObj = [
    {userId: 1, userName: "Alice"},
    {userId: 2, userName: "Arslan"},
    {userId: 3, userName: "Zoha"}
]


let selectedUser = "Zoha"

let filderSelectedUser = userObj.filter(item => {
    return item.userName == selectedUser
})
console.log(filderSelectedUser)