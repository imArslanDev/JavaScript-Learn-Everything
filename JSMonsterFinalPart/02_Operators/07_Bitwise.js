// Bitwise And Operator Sign: &
// console.log(5&3);
// console.log(4&7);

// Bitwise Or Operatpr Sign: |
// console.log(8 | 11);
// console.log(26 | 15);

// Bitwise Not Operator Sign: ~
console.log(~3);
console.log(~0);
console.log(~-5);
// =====================================================
let a = 6; // binary: 110
let b = 3; // binary: 011
let c = "6";

// a += b << 1; // Bitwise left shift + assignment (b << 1 = 6)

a = (a + b) << 1;
console.log(a);

let d = a & b; // Bitwise AND → 12 & 3 = 00001100 & 00000011 = 00000000
let e = a | b; // Bitwise OR → 12 | 3 = 00001111 = 15
let f = a ^ b; // Bitwise XOR → 12 ^ 3 = 00001100 ^ 00000011 = 00001111 = 15
let g = ~a; // Bitwise NOT → ~12 = -13

let check = (a == c && d < e) || !(f === e); // Mixed logical, comparison

let result = check ? typeof g : --b; // Ternary + unary + typeof

console.log("a:", a);
console.log("b:", b);
console.log("c:", c);
console.log("d (a & b):", d);
console.log("e (a | b):", e);
console.log("f (a ^ b):", f);
console.log("g (~a):", g);
console.log("check:", check);
console.log("result:", result);

// Video Duration From 3 Hours 49 Min To 4 Hours 20 Min
console.log(2 ** 0);
console.log(2 ** 1);
console.log(2 ** 2);
console.log(2 ** 3);
console.log(2 ** 4);
console.log(2 ** 5);
console.log(2 ** 6);
console.log(2 ** 7);
console.log(2 ** 8);
console.log(2 ** 9);

// Bitwise and & Operator
// console.log(5 & 3); // 1
// console.log(6 & 2); // 2
// console.log(12 & 3); // 0
// console.log(7 & 4); // 4

// Bitwise OR | Operator
// console.log(8 | 11); // 11
// console.log(26 | 15); // 31
// console.log(71 | 30); // 95

// Bitwise Not ~ Operator
console.log(~3); // 4
console.log(~16); // -17
console.log(~318); // 319
console.log(~0); // -1

// Negative Not
// Short Trick Formula: -(x + 1)
console.log(~-7);
console.log(~-18);
console.log(~-33);
