function evenBetween(num1, num2) {
  if (num1 > num2) {
    let a = num1;
    num1 = num2;
    num2 = a;
  }
  if (num1 % 2 != 0) num1++;
  let arr = [];
  for (let i = num1; i <= num2; i += 2) {
    arr.push(i);
  }
  return arr;
}
let num1 = 100;
let num2 = 51;
console.log(evenBetween(num1, num2));
