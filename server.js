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

// login
app.post("/api/v1/auth/login", function (req, res) {
  console.log("/v1/auth/login");

  res.status(200).send({
    version: "1.0.0",
    statusCode: 200,
    result: {
      userId: 7,
      isFirstLogin: true,
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiI3IiwibmJmIjoxNzU4NjIyNjM3LCJleHAiOjE3NTg2NTE0MzcsImlhdCI6MTc1ODYyMjYzN30.ekCIL7Rfe0KSG_1IgughzWL0AKiFSueJ6hUYLNg5k0w",
      refreshToken: null,
      id: "1",
      name: "Ethan Harper",
      firstName: "Ethan",
      lastName: "Harper",
      email: "ethan.harper@example.com",
      role: "admin",
      createdDate: "2023-01-15",
      status: "Active",
      phoneNumber: "8444444444",
      jobTitle: "Software Engineer",
      languagePreference: { id: "english", name: "English" },
      address: "123 Main St",
      city: "New York",
      postcode: "10001",
    },
    status: true,
    error: null,
  });
});

// Start the server
app.listen(3000, function () {
  console.log("Server is running on port 3000");
});
