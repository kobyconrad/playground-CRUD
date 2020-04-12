const express = require("express");
const app = express();

app.listen(3000, function () {
  console.log("may the node be with you");
});

app.get("/", function (req, res) {
  res.send("you tickled my get request");
  res.end();
});
