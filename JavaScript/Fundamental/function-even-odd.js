function evenOdd(number) {
  if (number % 2 == 0) {
    return "even number";
  }
  return "odd number";
}
const numbers = [2, 3, 4, 5, 6, 7];
for (var i = 0; i < numbers.length; i++) {
  console.log(numbers[i], " is ", evenOdd(numbers[i]));
}
