function largeStr(nameArr) {
  let largeName = nameArr[0];
  for (let i = 0; i < nameArr.length; i++) {
    console.log(nameArr[i].length);
    if (nameArr[i].length > largeName.length) {
      largeName = nameArr[i];
    }
  }
  return largeName;
}
let names = ["a", "bee", "abc", "bcde"];
console.log(largeStr(names));
