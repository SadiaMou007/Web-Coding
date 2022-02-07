// get attribute
const ul = document.getElementById("ul");
ul.getAttribute("id");
// set attribute
const li = document.getElementById("li");
li.setAttribute("title", "Tooltip added");
// find parent node
console.log(li.parentNode);
// design the parent node
li.parentNode.style.border = "2px solid green";
// find child nodes
const sec2 = document.getElementById("sec2");
console.log(sec2.childNodes);
// sec2.childNodes.style.backgroundColor = " yellow";
