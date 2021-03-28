const express = require("express");
const app = express();
let cors = require("cors");
app.use(express.static("dist"));
app.use(cors());
app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);

module.exports = app;
