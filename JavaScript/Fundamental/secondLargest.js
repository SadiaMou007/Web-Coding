// using sort function
function secondLargest(numbers) {
  numbers.sort(function (a, b) {
    return a - b;
  });
  return numbers[numbers.length - 2];
}

// using loop
function secondLargest(numbers) {
  max = numbers[0];
  max2 = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max2 = max;
      max = numbers[i];
    } else if (numbers[i] > max2 && numbers[i] != max) max2 = numbers[i];
  }
  return max2;
}
const array1 = [2, 11, 600, 1, 500, 7];
console.log(secondLargest(array1));
