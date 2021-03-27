// const mockAPIResponse = require('./mockAPI.js')

const PORT = 8081;

// const BASE_API_URL = 'https://api.meaningcloud.com/sentiment-2.1'
const fetch = require("node-fetch");
var bodyParser = require("body-parser");
const app = require("./server");

var cors = require("cors");
app.use(cors());
// var path = require('path')
// require('dotenv').config()
// let par = 'mostafa'

// app.get('/', function(req,res){

//     res.end("mostafa");
// // })
// path.resolve("src/client/index.js");

app.get("/", function (req, res) {
  // res.sendFile('dist/index.html')
  //res.sendFile();
  res.json({ try: "it in front end serve" });
});
// INFO: a route that handling post request for new URL that coming from the frontend
// app.post('/add-url', async (req, res) => {
//     try {
//         let body = req.body.url
//         const SEND_URL = `${BASE_API_URL}?key=${process.env.API_KEY}&url=${body}&lang=en`
//         let ss = fetch(SEND_URL, {
//             method: 'post',
//             body: '',
//             headers: { 'Content-Type': 'application/json' }
//         })
//             .then((res) => res.json())
//             .then((data) => {
//                 let sen = data.sentence_list[1]
//                 let sample = {
//                     text: sen.text,
//                     score_tag: sen.score_tag,
//                     agreement: sen.agreement,
//                     subjectivity: sen.subjectivity,
//                     confidence: sen.confidence,
//                     irony: sen.irony
//                 }
//                 console.error(sample)
//                 res.json({ sample })
//             })
//     } catch (error) {
//         console.log(error.message)
//     }
// })

app.get("/test", function (req, res) {
  res.send(mockAPIResponse);
});

module.exports = app;
// designates what port the app will listen to for incoming requests
app.listen(PORT, (error) => {
  if (error) throw new Error(error);
  console.log(`Server on port ${PORT}!`);
});

// TODO: export app to use it in the unit testing

// app.listen(PORT, () => {
//   console.log("Server has started!");
// });

const BASE_API_URL = "https://api.meaningcloud.com/sentiment-2.1";
var bodyParser = require("body-parser");
var path = require("path");
require("dotenv").config();
app.post("/add-url", async (req, res) => {
  try {
    let body = req.body.url;
    const SEND_URL = `${BASE_API_URL}?key=${process.env.API_KEY}&url=${body}&lang=en`;
    let ss = fetch(SEND_URL, {
      method: "post",
      body: "",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        let sen = data.sentence_list[1];
        let sample = {
          text: sen.text,
          score_tag: sen.score_tag,
          agreement: sen.agreement,
          subjectivity: sen.subjectivity,
          confidence: sen.confidence,
          irony: sen.irony,
        };
        console.error(sample);
        res.status(200).json({ sample });
      });
  } catch (error) {
    console.log(error.message);
  }
});
