const text = document.getElementById("del-text");
document.getElementById("del-btn").addEventListener("click", function () {
  const text = document.getElementById("del-text");
  const delP = document.getElementById("delP");
  if (text.value == "delete") {
    delP.style.display = "none";
  }
});
text.addEventListener("focus", function () {
  text.style.borderColor = "red";
});
text.addEventListener("blur", function () {
  text.style.borderColor = "white";
});
