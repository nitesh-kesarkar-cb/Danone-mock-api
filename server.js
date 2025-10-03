var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var cors = require("cors");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors({ origin: true }));

//create user
app.post("/api/v1/user", function (req, res) {
  console.log("/v1/createUser");
  res.status(201).send({ message: "User created successfully" });
});

//update user
app.patch("/api/v1/user/:id", function (req, res) {
  console.log("/v1/updateUser");
  res.status(200).send({ message: "User updated successfully" });
});

//delete user
app.delete("/api/v1/user/:id", function (req, res) {
  console.log("/v1/deleteUser");
  res.status(200).send({ message: "User deleted successfully" });
});

//get user
app.get("/api/v1/user/:id", function (req, res) {
  console.log("/v1/getUser");
  const getUser = require("./data/getUser");
  res.status(200).send(getUser());
});

//list users
app.get("/api/v1/users", function (req, res) {
  console.log("/v1/getUserList");
  const getUserList = require("./data/getUserList");
  res.status(200).send(getUserList());
});

// Start the server
app.listen(3000, function () {
  console.log("Server is running on port 3000");
});
