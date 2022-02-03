function vowel(pattern) {
  let c = 0;
  for (let i = 0; i < pattern.length; i++) {
    if (
      pattern[i] == "a" ||
      pattern[i] == "e" ||
      pattern[i] == "i" ||
      pattern[i] == "o" ||
      pattern[i] == "u"
    ) {
      c++;
    }
  }
  return c;
}
let s1 = "gafehdosrtU";
s1 = s1.toLocaleLowerCase();

console.log(vowel(s1));
