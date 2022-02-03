function positive(numbers) {
  let pArray = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] >= 0) pArray.push(numbers[i]);
    else break;
  }
  return pArray;
}
const mainArray = [0, 6, 9, 0, 3, 0, -2, 7, 3];
console.log(positive(mainArray));
