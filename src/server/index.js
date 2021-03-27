const PORT = 8081;
const fetch = require("node-fetch");
var bodyParser = require("body-parser");
const app = require("./server");
// var cors = require("cors");

app.get("/", function (req, res) {

  res.json({ try: "it in front end serve" });
});

const BASE = "https://api.meaningcloud.com/sentiment-2.1";
var bodyParser = require("body-parser");
var path = require("path");
require("dotenv").config();
app.post("/add-url", async (req, res) => {
  try {
    let body = req.body.url;
    const SEND_URL = `${BASE}?key=${process.env.API_KEY}&url=${body}&lang=en`;
    let ss = fetch(SEND_URL, {
      method: "post",
      body: "",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        let sen = data.sentence_list[1];
       let sample = NLPData(sen);
        res.status(200).json({ sample });
      });
  } catch (error) {
    console.log(error.message);
  }
});

app.get("/test", function (req, res) {

  res.status(200).json({ test: "scucess" });
});


function  NLPData(sen){
              return {
          text: sen.text,
          score_tag: sen.score_tag,
          agreement: sen.agreement,
          subjectivity: sen.subjectivity,
          confidence: sen.confidence,
          irony: sen.irony,
   }
        }
app.listen(PORT, (error) => {
  if (error) throw new Error(error);
  console.log(`Server on port ${PORT}!`);
});


