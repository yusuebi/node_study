var express = requuire("express");
var app = express();
app.get("/",(req, res) => {
  res.status(200).send("Hello World.");
});
app.listen(3000);