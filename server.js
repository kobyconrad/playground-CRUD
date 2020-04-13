const express = require("express");
const bodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const app = express();

app.listen(3000, () => {
  console.log("may the node be with you");
});
app.set("view-engine", "ejs");

// This is my Mongo client which is going to wrap all of my express CRUD functionality
MongoClient.connect(
  "mongodb+srv://koby:grassphone2@cluster0-q6mwy.mongodb.net/test?retryWrites=true&w=majority",
  { useUnifiedTopology: true }
)
  .then((client) => {
    console.log("connected to database");
    // I think this renames/sets up the database from test to SWQ
    const db = client.db("star-wars-quotes");

    // this creates a "collection" which we will use to POST data to
    const quotesCollection = db.collection("quotes");

    // This is my body parser to read form data
    app.use(bodyParser.urlencoded({ extended: true }));

    // These are my handlers
    app.get("/", (req, res) => {
      //serves up the index page on load /
      // res.sendFile(__dirname + "/index.html");

      //gets the quotes from database on load /
      db.collection("quotes")
        .find()
        .toArray()
        .then((results) => {
          console.log(results);
        })
        .catch((error) => console.error(error));

      res.render("index.ejs", {});
    });

    app.post("/quotes", (req, res) => {
      //   console.log("these are not the droids you are looking for");
      //   console.log(req.body);
      quotesCollection
        .insertOne(req.body)
        .then((result) => res.redirect("/"))
        .catch((error) => console.error(error));
    });
  })
  .catch((error) => console.error(error));
