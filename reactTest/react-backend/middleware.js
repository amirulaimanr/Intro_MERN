const express = require("express");

const app = express();

const logMiddleware = (req, res, next) => {
  console.log(`${new Date().toString()}: ${req.method} ${req.url}`);

  next();
};

app.use(logMiddleware);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
