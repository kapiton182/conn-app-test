var express = require('express');
var port = process.env.PORT || 3000;
var app = express();

app.get("/", function (req, res) {
  res.send("<h1>Hello World!</h1>")
})

app.listen(port, () => console.log("Server is running..."));