function factorial(number) {
  let result = 1;
  while (number >= 1) {
    result = result * number;
    number--;
  }
  return result;
}
const number1 = 5;
console.log(factorial(number1));
