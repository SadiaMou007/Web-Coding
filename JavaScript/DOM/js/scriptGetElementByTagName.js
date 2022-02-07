console.log("GET ELEMENT BY TAG NAME: ");
let blogTitles = document.getElementsByTagName("h3");
// for all h3
console.log(blogTitles);
// get element using loop
for (const h3 of blogTitles) {
  console.log(h3);
}
// get inner text
for (const h3 of blogTitles) {
  console.log(h3.innerText);
}
const blogP = document.getElementsByTagName("p");
console.log(blogP);
for (const p of blogP) {
  console.log(p.innerText);
}
