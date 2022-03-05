const increaseBtn = document.getElementById("increase-button");
increaseBtn.addEventListener("click", function () {
  increaseDecrease(true);
});
const decreaseBtn = document.getElementById("decrease-button");
decreaseBtn.addEventListener("click", function () {
  increaseDecrease(false);
});
//is a increase or decrease function 1
function increaseDecrease(isIncrease) {
  const ticketCount = document.getElementById("ticket-number");
  let ticketCountNumber = parseInt(ticketCount.value);
  // const ticketNumber = ticketCountNumber + 1;
  if (isIncrease == true) {
    ticketNumber = ticketCountNumber + 1;
  } else if (isIncrease == false && ticketCountNumber > 0) {
    ticketNumber = ticketCountNumber - 1;
  }
  ticketCount.value = ticketNumber;
  calculateTotal();
}

const increaseBtn2 = document.getElementById("increase-button2");
increaseBtn2.addEventListener("click", function () {
  increaseDecrease2(true);
});
const decreaseBtn2 = document.getElementById("decrease-button2");
decreaseBtn2.addEventListener("click", function () {
  increaseDecrease2(false);
});
//is a increase or decrease function 2
function increaseDecrease2(isIncrease) {
  const ticketCount2 = document.getElementById("ticket-number2");
  let ticketCountNumber2 = parseInt(ticketCount2.value);
  /// const ticketNumber = ticketCountNumber + 1;
  if (isIncrease == true) {
    ticketNumber2 = ticketCountNumber2 + 1;
  } else if (isIncrease == false && ticketCountNumber2 > 0) {
    ticketNumber2 = ticketCountNumber2 - 1;
  }
  ticketCount2.value = ticketNumber2;
  calculateTotal();
}

function calculateTotal() {
  const ticketInput = document.getElementById("ticket-number");
  const ticketTotal = parseInt(ticketInput.value);

  const ticketInput2 = document.getElementById("ticket-number2");
  const ticketTotal2 = parseInt(ticketInput2.value);
  /// Sub Total Calculation area
  const subTotal = ticketTotal * 150 + ticketTotal2 * 100;
  document.getElementById("sub-total").innerText = "$" + subTotal;
  /// Tax calculation area
  const taxAmount = subTotal * 0.1;
  document.getElementById("tax-amount").innerText = "$" + taxAmount;
  /// Grand Total Calculation area
  const grandTotal = subTotal + taxAmount;
  document.getElementById("grand-total").innerText = "$" + grandTotal;
}
