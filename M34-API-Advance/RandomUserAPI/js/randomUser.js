const loadUser = () => {
  fetch("https://randomuser.me/api/?results=5")
    .then((response) => response.json())
    .then((data) => geData(data));
};
const geData = (data) => {
  console.log(data);
  console.log(data.results);

  const container = document.getElementById("con");

  for (const info of data.results) {
    const div = document.createElement("div");
    const div1 = document.createElement("div");
    div1.classList.add("col-lg-4", "my-3", "rounded");
    div.classList.add(
      "p-2",
      "bg-info",
      "bg-opacity-10",
      "rounded",
      "text-center"
    );
    div.innerHTML = `
      <p>Name: ${info.name.first} ${info.name.last}</p>
      <p>Phone: ${info.phone}</p>


`;
    div1.appendChild(div);
    container.appendChild(div1);
  }
};
