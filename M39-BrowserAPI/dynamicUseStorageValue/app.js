// 1
const getId = (id) => {
  return document.getElementById(id);
};
// 6 load previous storage if exists
const loadLocalStorage = () => {
  const cart = getCart();
  for (const value in cart) {
    displayProduct(value);
  }
};
// 2 main part
const getItem = () => {
  const textId = getId("input");
  const textValue = textId.value;
  textId.value = "";

  if (isNaN(parseInt(textValue)) == false || !textValue) {
    return;
  } else {
    //main
    displayProduct(textValue); //3
    getCart(); //4
    addToCart(textValue); //5
  }
};

// 3
const displayProduct = (value) => {
  const ul = getId("ul");
  const li = document.createElement("li");
  li.innerText = `${value}`;
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
const addToCart = (value) => {
  const cart = getCart();
  //   cart[value] = 1;
  if (cart[value]) {
    cart[value] = cart[value] + 1;
  } else {
    cart[value] = 1;
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
