function checkPrime(number) {
  let flag = 0;
  for (let i = 2; i <= number / 2; i++) {
    if (number % 2 == 0) flag = 1;
  }
  return flag;
}
const isPrime = checkPrime(24);
if (isPrime == 0) {
  console.log("Prime");
} else console.log("Not-Prime");
