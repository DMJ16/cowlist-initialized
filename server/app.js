const express = require("express");
const app = express();
const parser = require("body-parser");
const Cow = require("./db/index.js");
const Sequelize = require("sequelize");

// Q: what is this doing exactly?
app.use(express.static("./client/dist"));
app.use(parser.json());

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
