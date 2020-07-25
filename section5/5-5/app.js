var express = require("express");
var app = express();

app.use("/user",require("./router/user.js"));

app.listen(3000);