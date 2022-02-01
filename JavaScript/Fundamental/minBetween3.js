function min(v1, v2, v3) {
  let min;
  if (v1 < v2 && v1 < v3) min = v1;
  else if (v2 < v1 && v2 < v3) min = v2;
  else min = v3;

  return min;
}
let a = 5;
let b = 20;
let c = 10;
console.log(min(a, b, c));
