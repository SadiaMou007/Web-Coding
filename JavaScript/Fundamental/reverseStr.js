function reverse(text) {
  let newStr = "";
  for (const char of text) {
    newStr = char + newStr;
  }
  return newStr;
}
const str1 = "hi, how are you?";
console.log(reverse(str1));
