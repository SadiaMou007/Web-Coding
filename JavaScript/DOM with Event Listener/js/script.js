// Method 2: calling a function
function makeRed() {
  document.body.style.backgroundColor = "red";
}

// USING ID
// method 3: get element by id
const blueBtn = document.getElementById("btn-3");
// just write the name of function without()
blueBtn.onclick = makeBlue;
function makeBlue() {
  document.body.style.backgroundColor = "lightblue";
}

// method 4: shortcut of method 3, using anonymous function

const greenBtn = document.getElementById("btn-4");
greenBtn.onclick = function () {
  document.body.style.backgroundColor = "green";
};

// ADD EVENT LISTENER
//method 5: using id and add event listener

const goldenRod = document.getElementById("btn-5");
goldenRod.addEventListener("click", makeGoldenRod);
function makeGoldenRod() {
  document.body.style.backgroundColor = "goldenrod";
}

// method 6: using id, event listener(shortcut of method 5)
const hotPink = document.getElementById("btn-6");
hotPink.addEventListener("click", function () {
  document.body.style.backgroundColor = "hotpink";
});

// method 7: most shortcut method
document.getElementById("btn-7").addEventListener("click", function () {
  document.body.style.backgroundColor = "lightgreen";
});

// practice using function
function adP() {
  const pid = document.getElementById("addFunctionEvent");
  pid.innerText = "paragraph text added by js function";
}
// practice shortcut
document
  .getElementById("eventListenerBtn")
  .addEventListener("click", function () {
    const p2id = document.getElementById("addEventListener");
    p2id.innerText = "paragraph text added by js event listener";
  });
