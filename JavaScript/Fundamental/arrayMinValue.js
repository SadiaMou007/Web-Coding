function minArray(value) {
  let min = value[0];
  for (let i = 1; i < value.length; i++) {
    if (value[i] < min) min = value[i];
  }
  return min;
}
arr1 = [5, 9, 7, 2, 6];
console.log(minArray(arr1));
