const express = require("express");
const app = express();

// what is this doing exactly?
app.use(express.static("./client/dist"));

app.get("/", (req, res) => res.send("Hello World!"));

module.exports = app;
