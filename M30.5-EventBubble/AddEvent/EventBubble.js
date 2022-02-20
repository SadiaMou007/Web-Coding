// players id style
const playersId = document.getElementById("players");
playersId.style.margin = "10px";
playersId.style.border = "1px solid #D3D3D3";
playersId.style.borderRadius = "5px";
playersId.style.padding = "8px";
playersId.style.marginTop = "25px";
playersId.style.fontSize = "1.5em";
playersId.style.backgroundColor = "#708090";
playersId.style.color = "white";

// player class styles
function setPlayerStyle(person) {
  person.style.border = "1px solid #D3D3D3";
  person.style.margin = "8px";
  person.style.padding = "8px";
  person.style.backgroundColor = "#483D8B";
  person.style.borderRadius = "5px";
}
// style h4 and p
function setPlayerh4Style() {
  const playerName = document.getElementsByTagName("h4");
  for (const nam of playerName) {
    nam.style.borderLeft = "8px solid #708090";
    nam.style.color = "goldenrod";
    nam.style.paddingLeft = "10px";
  }
}

function setPlayerPStyle() {
  const playerInfo = document.getElementsByTagName("p");
  for (const p of playerInfo) {
    p.style.borderRadius = "15px";
    p.style.padding = "5px";
    p.style.borderLeft = "8px solid goldenrod";
    p.style.color = "white";
  }
}
// btn style
const addBtn = document.getElementById("add-btn");
addBtn.style.fontSize = "1.5em";
addBtn.style.backgroundColor = "#708090";
addBtn.style.color = "white";
addBtn.style.margin = "10px";
addBtn.style.padding = "8px";

// add  event listener using id, for click player
const player = document.getElementsByClassName("player");
for (const person of player) {
  setPlayerStyle(person);
}
// add new player and player event listener using function name of btn
function addPlayer() {
  const playersId = document.getElementById("players");
  const newPlayer = document.createElement("div");
  newPlayer.classList.add("players");
  newPlayer.innerHTML = `
    <h4 class="player-name"> New Player</h4>
    <p>
        Iste similique aperiam a nobis unde quam doloribus provident fugiat
        animi, quae repellendus sequi dicta quia quasi quis itaque vero?
         Blanditiis reprehenderit assumenda amet tempore inventore!
         Temporibus non cupiditate iusto!
    </p>
  `;
  playersId.appendChild(newPlayer);
  setPlayerStyle(newPlayer);
  setPlayerh4Style(newPlayer);
  setPlayerPStyle(newPlayer);
}
// Event bubble for cng bg on click
playersId.addEventListener("click", function (event) {
  // console.log(event.target.tagName.toLowerCase());
  if (event.target.tagName.toLowerCase() == "div") {
    event.target.style.backgroundColor = "green";
  } else {
    event.target.parentNode.style.backgroundColor = "green";
  }
});
