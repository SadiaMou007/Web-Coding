const user = {
  name: "sadia",
  id: 007,
};
const stringify = JSON.stringify(user);
console.log(stringify);
const obj = JSON.parse(stringify);
