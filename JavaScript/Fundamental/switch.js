var colors = ["green", "purple", "red", "yellow"];
for (var i = 0; i < colors.length; i++) {
  switch (colors[i]) {
    case "green":
      console.log("color is green");
      break;
    case "red":
      console.log("color is red");
      break;
    case "yellow":
      console.log("color is yellow");
      break;
    default:
      console.log("unknown color");
  }
}
