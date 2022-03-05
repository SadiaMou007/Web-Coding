onClick("eightGB", "memory-cost", 0);
onClick("sixteenGB", "memory-cost", 200);
onClick("ssd1", "storage-cost", 0);
onClick("ssd2", "storage-cost", 300);
onClick("ssd3", "storage-cost", 500);

function onClick(Id, priceId, price) {
  document.getElementById(Id).addEventListener("click", function () {
    addPrice(priceId, price);
  });
}
function addPrice(priceId, price) {
  const id = document.getElementById(priceId);
  id.innerText = price;
  updateTotal();
}
function updateTotal() {
  const bestPrice = findIdValue("best-price");
  const memoryCost = findIdValue("memory-cost");
  const storageCost = findIdValue("storage-cost");
  totalPrice = document.getElementById("total-price");
  totalPrice.innerText = bestPrice + memoryCost + storageCost;
}
function findIdValue(pId) {
  idValue = parseFloat(document.getElementById(pId).innerText);
  return idValue;
}
// discount
const code = "sadia";
document.getElementById("apply-btn").addEventListener("click", function () {
  const totalPrice = document.getElementById("total-price");
  const inputValue = document.getElementById("promo-input");

  if (inputValue.value == code) {
    const totalPrice = document.getElementById("total-price");
    const value = parseFloat(totalPrice.innerText);
    let discount = value * 0.1;
    discount = value - discount;
    totalPrice.innerText = discount;
    document.getElementById("promo-input").style.display = "none";
    document.getElementById("applied-text").innerText = "Cupon Applied";
  } else {
    document.getElementById("applied-text").innerText = "Couldn't Apply Cupon";
  }
  inputValue.value = "";
});
