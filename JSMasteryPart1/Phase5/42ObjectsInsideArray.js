// Objects inside array
// Very usefull in real world applications.
const users = [
    {userId: 1, userName:"Arslan", gender: "male"},
    {userId: 2, userName:"Wrick", gender: "male"},
    {userId: 3, userName:"Jason", gender: "male"},
    {userId: 4, userName:"Jhon", gender: "male"}
]

for(let user of users) {
    console.log("Name:", user.userName)
}
