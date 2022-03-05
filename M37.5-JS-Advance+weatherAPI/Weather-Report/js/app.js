const apiKey = `edec4b28919b8b5dcc3a1687ce1b6390`;
const inputId = document.getElementById("input");

const fetchApi = () => {
  const inputValue = inputId.value;
  inputId.value = "";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${apiKey}&units=metric`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => getData(data));
};
const getData = (data) => {
  document.getElementById("name").innerText = data.name;
  document.getElementById("temp").innerText = data.main.temp;
  document.getElementById("type").innerText = data.weather[0].main;
  //   set icon
  const url = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  document.getElementById("icon").setAttribute("src", url);

  console.log(data);
};
