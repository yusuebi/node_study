var express = require("express");
var app = express();

app.all("/", (req, res) => {
  var body = "";
  console.log(req.method);
  console.log(req.url);
  console.log(JSON.stringify(req.headers));
  req.on("data", (chunk) => {
    body += chunk
  });
  req.on("end", () => {
    console.log(body);
  });
  res.send("OK");
});

app.listen(3000);