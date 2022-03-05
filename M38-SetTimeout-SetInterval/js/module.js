setTimeout(() => {
  console.log("timeout value");
}, 5000);
// set interval

//
displayId = document.getElementById("sInterval");
let c = 0;
const timeID = setInterval(() => {
  //   console.log(++count);
  displayId.innerText = c;
  ++c;
  if (c == 31) {
    displayId.innerText = "Time Out";
    clearInterval(timeID);
  }
}, 1000);
setInterval();
