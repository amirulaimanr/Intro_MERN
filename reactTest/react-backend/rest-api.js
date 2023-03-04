const express = require("express");

const app = express();

const bodyParser = require("body-parser");

app.use(bodyParser.json());

const tasks = [
  { id: 1, description: "Task 1" },

  { id: 2, description: "Task 2" },

  { id: 3, description: "Task 3" },
];

app.get("/tasks", (req, res) => {
  res.json(tasks);
});

app.get("/tasks/:id", (req, res) => {
  const task = tasks.find((task) => task.id === parseInt(req.params.id));

  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }

  res.json(task);
});

app.post("/tasks", (req, res) => {
  const task = { id: tasks.length + 1, description: req.body.description };

  tasks.push(task);

  res.json(task);
});

app.put("/tasks/:id", (req, res) => {
  const task = tasks.find((task) => task.id === parseInt(req.params.id));

  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }

  task.description = req.body.description;

  res.json(task);
});

app.delete("/tasks/:id", (req, res) => {
  const taskIndex = tasks.findIndex(
    (task) => task.id === parseInt(req.params.id)
  );

  if (taskIndex === -1) {
    return res.status(404).json({ message: "Task not found" });
  }

  tasks.splice(taskIndex, 1);

  res.json({ message: "Task deleted" });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
