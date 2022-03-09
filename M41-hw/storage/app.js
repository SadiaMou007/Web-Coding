// 1
const getId = (id) => {
  return document.getElementById(id);
};
// 6 load previous storage if exists
const loadLocalStorage = () => {
  const cart = getCart();
  for (const [key, value] of Object.entries(cart)) {
    displayProduct(key, value);
  }
  /*  for (const value in cart) {
    displayProduct(value, cart.value);
  } */
};
// 2 main part
const getItem = () => {
  const textId = getId("input");
  const textId1 = getId("input1");
  const textValue = textId.value;
  const textValue1 = textId1.value;
  textId.value = "";
  textId1.value = "";

  if (isNaN(parseInt(textValue)) == false || !textValue) {
    return;
  } else {
    //main
    displayProduct(textValue, textValue1); //3
    getCart(); //4
    addToCart(textValue, textValue1); //5
  }
};

// 3
const displayProduct = (value1, value2) => {
  const ul = getId("ul");
  const li = document.createElement("li");
  li.innerText = `${value1} ${value2} `;
  ul.appendChild(li);
};
// 4
const getCart = () => {
  const cart = localStorage.getItem("cart");
  let cartObj;
  cart ? (cartObj = JSON.parse(cart)) : (cartObj = {});

  return cartObj;
};

// 5 save in local storage
const addToCart = (value1, value2) => {
  const cart = getCart();
  //   cart[value] = 1;
  if (cart[value1]) {
    cart[value1] = cart[value1] + parseInt(value2);
  } else {
    cart[value1] = parseInt(value2);
  }
  console.log(cart);

  const cartStringified = JSON.stringify(cart);
  localStorage.setItem("cart", cartStringified);
};

// 7
const placeOrder = () => {
  getId("ul").textContent = "";
  localStorage.removeItem("cart");
};
// default load previous items
loadLocalStorage();
