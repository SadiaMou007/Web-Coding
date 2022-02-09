function check(inputString) {
  let count = 0;
  for (let i = 0; i < inputString.length; i++) {
    if (inputString[i] >= "a" && inputString[i] <= "z") {
      count++;
    } else count--;
  }
  if (count >= 0) {
    return inputString.toLowerCase();
  } else {
    return inputString.toUpperCase();
  }
}
const str1 = "aABCDbcd";
console.log(check(str1));
