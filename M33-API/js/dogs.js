function loadDogData() {
  fetch("https://api.thedogapi.com/v1/breeds")
    .then((response) => response.json())
    .then((json) => console.log(json));
  //or .then(data)=.clg(data)
}

