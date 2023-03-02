const express = require("express");

const app = express();

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send(`

    <form action="/" method="post">

      <input type="text" name="message">

      <button type="submit">Submit</button>

    </form>

  `);
});

app.post("/", (req, res) => {
  res.send(`You submitted: ${req.body.message}`);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
