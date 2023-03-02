const express = require("express");

const app = express();

const ejs = require("ejs");

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { items: ["Item 1", "Item 2", "Item 3"] });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
