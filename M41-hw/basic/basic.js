// set timeout
setTimeout(() => {
  console.log("timeout value");
}, 5000);
// 2
let num1 = prompt("give a number");
num1 = parseInt(num1);
alert(num1 + 200);
//3
const c = confirm("see location?");
if (c) {
  console.log(location.href);
}
