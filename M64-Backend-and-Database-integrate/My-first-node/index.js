const express = require("express"); //1
const app = express(); //2
const port = process.env.PORT || 5000; //3

const cors = require("cors");
app.use(cors());
app.use(express.json());

const users = [
  { id: 1, name: "abc", email: "a@gmail.com" },
  { id: 2, name: "def", email: "b@gmail.com" },
  { id: 3, name: "ghi", email: "c@gmail.com" },
];
//4
//ex1: send normal string
app.get("/", (req, res) => {
  res.send("hello homepage response");
});
//ex2: send data ex3.2 search query
app.get("/users", (req, res) => {
  if (req.query.name) {
    const search = req.query.name.toLowerCase();
    const matched = users.filter((u) => u.name.toLowerCase().includes(search));
    res.send(matched);
  } else {
    res.send(users);
  }
});

//ex3: send dynamic route  data
app.get("/user/:id", (req, res) => {
  console.log(req.params);
  const id = req.params.id; //dynamic id
  const user = users.find((u) => u.id == id);
  res.send(user);
});

// ex3.1 post data
app.post("/user", (req, res) => {
  console.log(req.body);
  const user = req.body;
  user.id = users.length + 1;
  users.push(user);
  res.send(user);
});

//5
app.listen(port, () => {
  console.log("Listening to port ", port);
});
