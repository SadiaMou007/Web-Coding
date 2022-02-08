// 1. add eevent listener for button
document.getElementById("submitTextBtn").addEventListener("click", function () {
  //

  //

  //2. get the text area using id
  const newText = document.getElementById("newComment");
  const name = document.getElementById("name");

  //3. create paragraph or h3
  const p = document.createElement("p");
  const h3 = document.createElement("h3");

  //4. set inner value of paragraph by text area text
  p.innerText = newText.value;
  h3.innerText = name.value;

  //5. append the new paragraph and h3 as child of commentbox id
  document.getElementById("comment").appendChild(h3);
  document.getElementById("comment").appendChild(p);
  // clear the value
  newText.value = "";
  name.value = "";
});
