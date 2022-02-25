function loadUserData() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => getInfo(data));
}
function getInfo(values) {
  const usersId = document.getElementById("users");

  for (const i of values) {
    console.log(i);
    const li = document.createElement("li");
    li.classList.add(
      "bg-info",
      "p-2",
      "bg-opacity-50",
      "col-lg-4",
      "g-2",
      "rounded"
    );
    li.innerHTML = `
      Name: ${i.name} <br>
      Email: ${i.email}
        `;
    usersId.appendChild(li);
  }
}
