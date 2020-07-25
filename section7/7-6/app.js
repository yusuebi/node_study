var express = require("express");
var session = require("express-session");
var app = express();

app.set("view engine", "ejs");

app.use(session({
  secret: "qwerty",
  resave: false,
  saveUninitialized: true,
  name: "sid"
}));

app.get("/", (req, res) => {
  var count = req.session.count || 0;
  req.session.count = count + 1;
  res.render("./index.ejs", { count });
});

app.listen(3000);