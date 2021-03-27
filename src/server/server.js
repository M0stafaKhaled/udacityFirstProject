const express = require("express");
const app = express();
app.use(express.json());
var path = require("path");
app.use(express.static(path.join(__dirname, "client")));
app.use(
  express.urlencoded({
    extended: true,
  })
);

// Middlewares...
// Routes...

module.exports = app;
