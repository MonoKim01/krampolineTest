const express = require("express");

const PORT = 8080;

//APP
const app = express();
app.get("/", (req, res) => {
  res.send("mymy");
});

app.get("/list", (req, res) => {
  res.send("/list");
});

app.get("/monot", (req, res) => {
  res.send("/monot");
});

app.get("/monot/list", (req, res) => {
  res.send("/monot/list");
});

app.listen(PORT);
console.log("Server is running");
