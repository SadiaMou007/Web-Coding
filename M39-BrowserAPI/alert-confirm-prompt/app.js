const pid = document.getElementById("p");
const pid2 = document.getElementById("p2");
// alert
const loadalert = () => {
  alert("I'm an Alert msg..");
};
// confirm
function loadconfirm() {
  const response = confirm("Are You Sure?");
  response
    ? (pid.innerText = "User confirm yes")
    : (pid.innerText = "User confirm No");
}
// prompt
const loadprompt = () => {
  const response = prompt("Enter Your Name");
  response
    ? (pid2.innerText = response)
    : (pid2.innerText = "No Name given by user");
  console.log(response);
};
