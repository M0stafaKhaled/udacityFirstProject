const express = require("express");
const app = express();
// app.use(cors());
app.use(express.json());
var path = require("path");

// app.use(express.static(path.join(__dirname, "client")));
app.use(
  express.urlencoded({
    extended: true,
  })
);



module.exports = app;
