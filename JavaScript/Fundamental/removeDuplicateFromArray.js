function rmDuplicate(names) {
  let newArr = [];
  for (let i = 0; i < names.length; i++) {
    if (newArr.indexOf(names[i]) == -1) {
      newArr.push(names[i]);
    }
  }
  return newArr;
}
let frdname = ["aaa", "aaa", "bbb", "ccc", "bbb", "ddd", "aaa", "ddd"];
console.log(rmDuplicate(frdname));
