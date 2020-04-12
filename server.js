const express = require("express");
const bodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const app = express();

app.listen(3000, () => {
  console.log("may the node be with you");
});

MongoClient.connect(
  "mongodb+srv://koby:grassphone2@cluster0-q6mwy.mongodb.net/test?retryWrites=true&w=majority",
  { useUnifiedTopology: true }
)
  .then((client) => {
    console.log("connected to database");
  })
  .catch((error) => console.error(error));

// This is my body parser to read form data
app.use(bodyParser.urlencoded({ extended: true }));

// These are my handlers
app.get("/", (req, res) => {
  console.log(__dirname);
  res.sendFile(__dirname + "/index.html");
});

app.post("/quotes", (req, res) => {
  console.log("these are not the droids you are looking for");
  console.log(req.body);
});
