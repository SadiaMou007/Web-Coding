const loadCountrys = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => displayCountrys(data));
};
const displayCountrys = (data) => {
  //console.log(data);
  const countriesHtml = data.map((country) => getCountryHtml(country));
  //console.log(countriesHtml);
  document.getElementById("countries").innerHTML = countriesHtml.join(" ");
};
const getCountryHtml = (country) => {
  return `
    <div>
    <h4>${country.name.common}</h4>
   </div>
    `;
};

//
loadCountrys();
