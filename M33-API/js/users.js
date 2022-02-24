function loadUserData() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => getInfo(data));
}
function getInfo(values) {
  for (const i of values) {
    const usersId = document.getElementById("users");
    console.log(i.name);
    const li = document.createElement("li");
    li.innerHTML = `
       ${i.name}
        `;
    usersId.appendChild(li);
  }
}
