var express = require("express");
var cookieParser = require("cookie-parser");
var app = express();

app.set("view engine", "ejs");

app.use(cookieParser());

app.get("/", (req, res) => {
  var count = parseInt(req.cookies.count || 0);
  res.cookie("count", count + 1);
  res.render("./index.ejs", { count });
});

app.listen(3000);