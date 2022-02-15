let cart = [
  { name: "phone", price: 1000, quantity: 2 },
  { name: "shirt", price: 100, quantity: 5 },
  { name: "jacket", price: 50, quantity: 3 },
];
function price(shoppingCart) {
  let total = 0;
  for (let i = 0; i < shoppingCart.length; i++) {
    total += shoppingCart[i].price * shoppingCart[i].quantity;
  }
  return total;
}
console.log(price(cart));
