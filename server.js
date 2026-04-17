const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors()); // VERY IMPORTANT

let users = [];

app.post("/register", (req, res) => {
  users.push(req.body);
  res.send("Registered");
});

app.post("/login", (req, res) => {
  const user = users.find(u => 
    u.email === req.body.email && 
    u.password === req.body.password
  );

  if(user) res.send("Success");
  else res.send("Fail");
});

app.listen(3000, () => console.log("Server running"));
