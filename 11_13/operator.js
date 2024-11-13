var a = 3;
let a1 = "3";
let b = true;
const c = "goorm deep dive!";
let obj1 = { a: 2, b: false, c: "GOORM DEEP DIVE!" };
let obj2 = { x: 5, y: "배고프다" };

console.log(typeof a, typeof b, typeof c, typeof obj1);
console.log(a + b);
console.log(a + c);
console.log(a ** a);
console.log(a === a1);
console.log({ ...obj1, ...obj2 });
console.log("a" in obj1);
console.log("b" in obj2);
