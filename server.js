const express = require("express");
const app = express();
const db = require("./db");
const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Welcome to my hotel.....How can i help you??");
});

const personRoutes = require('./routes/personRoutes');
app.use('/person',personRoutes);

const menuRoutes = require('./routes/menuRoutes');
app.use('/menu',menuRoutes);

//long process to represent the data
// app.post("/person", (req, res) => {
//   const data = req.body;
// const newPerson = new Person();
// newPerson.name=data.name;
// newPerson.age=data.age;

app.listen(3000, () => {
  console.log("listening on port 3000");
});
