// btn1
const borderbtn = document.getElementById("add-border");
borderbtn.addEventListener("click", function () {
  const friendsId = (document.getElementById("friends").style.border =
    "1px solid gray");
});

// btn2
function cngBg() {
  const friend = document.getElementsByClassName("friend");
  for (const f of friend) {
    f.style.backgroundColor = "lightgreen";
  }
}
// btn3
const addFrd = document.getElementById("add-frd");
addFrd.addEventListener("click", function () {
  const friendsConatiner = document.getElementById("friends");
  //   grid div
  const gridDiv = document.createElement("div");
  gridDiv.classList.add("col-lg-6", "col-sm-12");
  //   child div
  const newDiv = document.createElement("div");
  newDiv.classList.add("friend", "border");

  newDiv.innerHTML = `
            <h3> New Friend</h3>
            <p>Non, animi! Sapiente voluptates vitae labore?</p>
  `;
  //   add to container
  gridDiv.appendChild(newDiv);
  friendsConatiner.appendChild(gridDiv);
});
