// obj destructuring
const { p1, p2 } = {
  p1: "ABC",
  p2: "DEF",
};
// console.log("Obj Output ", p1, p2);

// array destructuring
const [a, b] = ["ABC", "DEF"];
// console.log("array output ", a, b);

// nested obj chaining
const obj1 = {
  name: {
    fname: "Sadia",
    lname: {
      formal: "Mou",
      petN: "Tuplus",
    },
  },
};
console.log(obj1.nameeee?.lname);
