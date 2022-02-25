function loadDogData() {
  fetch("https://api.thedogapi.com/v1/breeds")
    .then((response) => response.json())
    .then((data) => loaddog(data));
  //or .then(data)=.clg(data)
}

const loaddog = (data) => {
  const dogsC = document.getElementById("dogC");
  for (const dog of data) {
    const div = document.createElement("div");
    div.classList.add("col-lg-4");
    div.innerHTML = `
    ${dog.image.url.result}
    `;
    // dogsC.appendChild(div);
  }
};
