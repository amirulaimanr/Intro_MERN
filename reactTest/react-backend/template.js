const express = require("express");
const app = express();
const port = 3000;
const ejs = require("ejs");

// Array of items to display
const items = ["apple", "banana", "orange", "pear"];

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("list", { items });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
