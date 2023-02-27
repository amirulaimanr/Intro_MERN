const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

app.listen(3030, () => {
  console.log("Express app listening on port 3030!");
});
