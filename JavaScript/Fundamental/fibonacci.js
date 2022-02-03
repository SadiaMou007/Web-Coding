function fibonacci(length) {
  if (typeof length != "number" || length < 2) {
    return "invalid input";
  }
  let arrFibo = [0, 1];
  for (let i = 2; i < length; i++) {
    arrFibo[i] = arrFibo[i - 1] + arrFibo[i - 2];
  }
  return arrFibo;
}

let len = 20;
console.log(fibonacci(len));
