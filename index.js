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

app.use(cors());

app.get("/", (req, res) => {
  res.send("server running");
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.listen(port, () => {
  console.log(`server running on PORT: ${port}`);
});
