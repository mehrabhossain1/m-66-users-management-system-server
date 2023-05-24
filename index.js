const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

const users = [
  { id: 1, name: "munna", email: "munna@gmail" },
  { id: 2, name: "mehrab", email: "mehrab@gmail" },
  { id: 3, name: "meem", email: "meem@gmail" },
  { id: 4, name: "ammu", email: "ammu@gmail" },
];

// middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("server running");
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.post("/users", (req, res) => {
  console.log("post api hitting");
  console.log(req.body);
  const newUser = req.body;
  newUser.id = users.length + 1;
  users.push(newUser);
  res.send(newUser);
});

app.listen(port, () => {
  console.log(`server running on PORT: ${port}`);
});
