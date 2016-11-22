var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();

app.use('/', express.static(__dirname + '/public'));

var PORT = process.env.PORT || 3220;


require("./controllers/login.js")(app);

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});