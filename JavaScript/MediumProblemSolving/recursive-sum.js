// normal loop
function sum(number) {
  let sum = 0;
  for (let i = number; i >= 1; i--) {
    sum += i;
  }
  console.log(sum);
}
// sum(10);

// recursion
function recursiveSum(num) {
  if (num == 0) return 0;
  return num + recursiveSum(--num);
}
// console.log(recursiveSum(5));
