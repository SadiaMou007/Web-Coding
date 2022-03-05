const pinText = document.getElementById("pin-text-field");
const keyInput = document.getElementById("keyForm");

function generatePin() {
  let pin = Math.round(Math.random() * 10000);
  pin = pin + "";
  if (pin.length < 4) {
    generatePin();
  } else {
    pinText.value = pin;
  }
}
let valueContainer = "";
function showKeyValue(e) {
  const input = e.target.innerText;
  if (input >= 0) {
    valueContainer += input;
    keyInput.value = valueContainer;
  } else if (input == "C") {
    keyInput.value = "";
    valueContainer = "";
  }
}
// event listener to pin generate
document
  .getElementById("pin-generate-btn")
  .addEventListener("click", function () {
    generatePin();
  });
// event listener to keys
document.getElementById("keypad").addEventListener("click", function (event) {
  showKeyValue(event);
});
// event listener to submit btn
const notMmatch = document.getElementById("not-match");
notMmatch.style.display = "none";
const match = document.getElementById("match");
match.style.display = "none";
document.getElementById("submit-btn").addEventListener("click", function () {
  if (keyInput.value == pinText.value) {
    notMmatch.style.display = "none";
    match.style.display = "block";
  } else {
    notMmatch.style.display = "block";
    match.style.display = "none";
  }
});
