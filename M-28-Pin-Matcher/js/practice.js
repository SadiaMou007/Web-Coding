const calcForm = document.getElementById("keyForm");
const pinForm = document.getElementById("pin-text-field");

function createPin() {
  const pin = Math.round(Math.random() * 10000);
  if ((pin + "").length < 4) {
    createPin();
  } else {
    pinForm.value = pin;
  }
}

document
  .getElementById("pin-generate-btn")
  .addEventListener("click", function () {
    createPin();
  });
document.getElementById("keypad").addEventListener("click", function () {});
document.getElementById("submit-btn").addEventListener("click", function () {});
