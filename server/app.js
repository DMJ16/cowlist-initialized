const express = require("express");
const app = express();
const parser = require("body-parser");
const Cow = require("./db/index.js");
const Sequelize = require("sequelize");
// const axios = require("axios");
// const getAll = require("./helpers/index.js");

// what is this doing exactly?
app.use(express.static("./client/dist"));
app.use(parser.json());

// **refactor methods using async/await**
app.post("/api/cows", (req, res) => {
  return Cow.create({
    name: req.body.name,
    description: req.body.description,
  })
    .then((data) => {
      res.status(201).send(data);
    })
    .catch((err) => {
      console.error(err);
    });
});

app.get("/api/cows", (req, res) => {
  return Cow.findAll({
    attributes: ["name", "description"],
  })
    .then((data) => res.send(data))
    .catch((err) => console.error(err));
});

module.exports = app;

// axios.defaults.baseURL = "http://localhost:3000/";

// axios
//   .get("/api/cows")
//   .then((res) => console.log(res.data))
//   .catch((err) => console.log(err));
