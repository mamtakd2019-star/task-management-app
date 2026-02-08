const express = require("express");
const app = express();

// middlewares (ONLY ONCE)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// fake databases
const users = require("./users");
let tasks = [];

// Home
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

// SIGNUP
app.post("/signup", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.send("All fields required");
  }

  const userExists = users.find(u => u.email === email);
  if (userExists) {
    return res.send("User already exists");
  }

  users.push({ email, password });
  res.send("Signup successful ✅");
});

// LOGIN (USERS ARRAY WALA – REALISTIC)
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  console.log("Email:", email);
  console.log("Password:", password);

  const user = users.find(
    u => u.email === email && u.password === password
  );

  if (!user) {
    return res.send("Invalid credentials ❌");
  }

  res.redirect("/dashboard.html");

});

// ADD TASK
app.post("/add-task", (req, res) => {
  const task = req.body.task;
  if (task) {
    tasks.push({ text: task, status: "Pending" });
  }
  res.redirect("/dashboard.html");
});


// Delete task
app.get("/delete-task/:index", (req, res) => {
  const index = req.params.index;
  tasks.splice(index, 1);
  res.redirect("/dashboard.html");
});

// Toggle status
app.get("/toggle-task/:index", (req, res) => {
  const index = req.params.index;
  tasks[index].status =
    tasks[index].status === "Pending" ? "Done" : "Pending";
  res.redirect("/dashboard.html");
});


// VIEW TASKS
app.get("/tasks", (req, res) => {
  res.send(tasks);
});

// SERVER
app.listen(5000, () => {
  console.log("Server is running successfully 🚀");
});
