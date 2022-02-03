function avg(num) {
  let count = 0;
  let sum = 0;
  for (i = 1; i <= num; i++) {
    if (i % 3 == 0) {
      console.log(i);
      count++;
      sum += i;
    }
  }
  console.log(sum, count);
  return sum / count;
}
const a = 20;
console.log(avg(a));
