function arr(values) {
  let sum = 0;
  for (let i = 0; i < values.length; i++) {
    sum += values[i];
  }
  return sum / values.length;
}
const array1 = [4, 2, 4, 3];
console.log(arr(array1).toFixed(1));
