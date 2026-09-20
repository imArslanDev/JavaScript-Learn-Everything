// 3 Ways To Declare Varaible in JavaScript
// 1- const
// 2- let
// 3- var

// let   : Jab value future mein change honi ho:
// const : ko declaration ke waqt value dena mandatory hai
// var   : old legacy codebase ma bohot milta hai

// Quick Knowledge Check Questions
// 1- const aur let mein main difference kya hai?
// 2- Ismein error hoga ya nahi?
// 👉 const user = { name: "Ali" };
// 👉 user.name = "Ahmed";
// 3- New project mein generally var ki jagah kya prefer karoge aur kyun?
// 4- Agar shopping cart ki quantity 1 se 2 ho sakti hai, let use karoge ya const?

// ===========================

// Answers:
// 1- let ka through variable ko update kia ja skta ha re assing kia ja skta ha but redeclare nhi kia jaskta
// or const ka case ma variable ko change nhi kr skta re declare nhi kr skta ha agr object ya array assing hua ho to us ka andi wali values ko update change kia ja skta ha.
// 2- nhi error nhi hoga becuase hum user ma assinged object ki propert ko change kr rha ha naki user ma kuch or assing krna ki kossish kr rha ha.
// 3- let or const prefer kra ga becuase unnesasiry erors sa bach jaia code easy to maintain hoga simple pta hoga agr kisi variable ko future ma change hona ha to usko let ki throught or agr koi foix rehen wala ha to usko cosnt ke throgut bnana ha.
// 4- let use kroga