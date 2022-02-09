let cart = [
  { name: "phone 1", price: 30000 },
  { name: "phone 2", price: 40000 },
  { name: "laptop 1", price: 400000 },
  { name: "laptop 2", price: 300000 },
];

function products(product, str) {
  let result = [];
  for (const i of product) {
    if (i.name.includes(str) && i.price < 40000) {
      result.push(i);
    }
  }
  return result;
}

const search = "phone";
// console.log(products(cart, search));
let a = false;
if (!a) {
  console.log(a);
}
