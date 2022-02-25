const loadCountry = () => {
  fetch("https://restcountries.com/v3.1/all").then((response) =>
    response.json().then((data) => getCountry(data))
  );
};
const getCountry = (data) => {
  const c = document.getElementById("container");

  for (const country of data) {
    const div1 = document.createElement("div");
    const div = document.createElement("div");
    div1.classList.add("p-2", "bg-light", "col-lg-3");
    div.classList.add("p-2", "bg-white", "text-center");

    div.innerHTML = `
    <h3> ${country.name.common}</h3>
    <p>Capital: ${country.capital}</p>
    <button onclick="loadByName('${country.name.common}')" class="btn btn-info">Details</button>
    `;
    div1.appendChild(div);
    c.appendChild(div1);
    // console.log(country);
  }
};

// load detail dynamic api
const loadByName = (cname) => {
  const url = `https://restcountries.com/v3.1/name/${cname}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => loadDetail(data[0]));
};
const loadDetail = (data) => {
  const detail = document.getElementById("detail");
  detail.innerText = "";
  console.log(data);
  const div = document.createElement("div");
  div.innerHTML = `
  <img height="200px" src="${data.flags.png}"/>
  `;
  detail.appendChild(div);
};
loadCountry();
