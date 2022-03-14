const arr1 = [1, 2, 3];
const arr2 = [4, 5];
console.log(...arr1, ...arr2);
// destructure rest properties from obj
const obj1 = undefined;
const obj2 = {
  name: "abc",
  color: "yellow",
  height: 5,
};
const { color } = obj1 || {}; //handle error when obj not found
console.log(color);
const { name, ...rest } = obj1 || {};
console.log(rest);
