const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("may the node be with you");
});

app.get("/", (req, res) => {
  console.log(__dirname);
  res.sendFile(__dirname + "/index.html");
});

app.post("/quotes", (req, res) => {
  console.log("these are not the droids you are looking for");
});
