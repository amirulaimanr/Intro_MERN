const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Home");
});

app.get("/about", (req, res) => {
  res.send("About Us");
});

app.get("/contact", (req, res) => {
  res.send("Contact Us");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
