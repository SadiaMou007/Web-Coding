const doubleIt = (number) => number * 2;

const arr = [2, 5, 8];
const r = arr.map(doubleIt);
console.log(r);
//or
const r2 = arr.map((x) => x * 2);
console.log(r2);
