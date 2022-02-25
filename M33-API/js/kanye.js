const kanyeQuotes = () => {
  fetch("https://api.kanye.rest")
    .then((response) => response.json())
    .then((data) => Quotes(data));
};

const Quotes = (data) => {
  let con = document.getElementById("quote");
  con.innerText = data.quote;
};
