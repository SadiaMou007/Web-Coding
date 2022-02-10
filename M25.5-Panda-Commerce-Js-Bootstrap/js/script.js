// target 2: change h3 tag color to lightblue
const h2 = document.getElementsByTagName("h2");
for (const heading of h2) {
  heading.style.color = "lightblue";
}
// target 3: change bags id background to tometo
document.getElementById("bags").style.backgroundColor = "tomato";
// target 4: card cls border radius 30px
const cards = document.getElementsByClassName("card");
for (const card of cards) {
  card.style.borderRadius = "30px";
}
// target 6: button display none if clicked
const bagpagBtns = document.getElementsByClassName("btn-items");
// make btn color extra
for (const btn of bagpagBtns) {
  btn.style.backgroundColor = "goldenrod";
}
// add event listener on bagpack btn
for (const bbtn of bagpagBtns) {
  bbtn.addEventListener("click", function () {
    bbtn.style.display = "none";
  });
}
// make btn color extra
const shoeBtns = document.getElementsByClassName("shoe-btn");
for (const shoeBtn of shoeBtns) {
  shoeBtn.style.backgroundColor = "deeppink";
}
// add event listener on shoes btn
for (const sbtn of shoeBtns) {
  sbtn.addEventListener("click", function () {
    sbtn.style.display = "none";
  });
}

// target 7: email confirm btn
const eBtn = document.getElementById("emailBtn");
const confirmText = document.getElementById("email");
confirmText.addEventListener("keyup", function () {
  if (confirmText.value == "email") {
    eBtn.disabled = false;
  } else {
    eBtn.disabled = true;
  }
});

// target 8: change img on mouseover
const oldImgs = document.getElementsByClassName("mouseOver");
for (const oldImg of oldImgs) {
  oldImg.addEventListener("mouseenter", function () {
    oldImg.src = "images/bags/bag-3.png";
    // mouse leave
    oldImg.addEventListener("mouseleave", function () {
      oldImg.src = "images/bags/bag-2.png";
    });
  });
}
// target 9: add Doubleclick event
const subscribe = document.getElementById("subscribe");
subscribe.style.backgroundColor = "lightblue";
subscribe.addEventListener("dblclick", function () {
  subscribe.style.backgroundColor = "blue";
});
