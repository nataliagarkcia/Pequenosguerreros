var path = require("path");

module.exports = function(app) {

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname + "../public/index.html"));
  });

  console.log(__dirname + "../public/index.html");

  app.get("/home", function(req, res) {
    res.sendFile(path.join(__dirname + "/../public/home.html"));
  });

    app.get("/aliento", function(req, res) {
    res.sendFile(path.join(__dirname + "/../public/aliento.html"));
  });

app.get("/armas", function(req, res) {
    res.sendFile(path.join(__dirname + "/../public/armas.html"));
  });

app.get("/caidas", function(req, res) {
    res.sendFile(path.join(__dirname + "/../public/caidas.html"));
  });

app.get("/index", function(req, res) {
    res.sendFile(path.join(__dirname + "/../public/index.html"));
  });

app.get("/llaves", function(req, res) {
    res.sendFile(path.join(__dirname + "/../public/llaves.html"));
  });

app.get("/pumse", function(req, res) {
    res.sendFile(path.join(__dirname + "/../public/pumse.html"));
  });
//app.get("/signup", function(req, res) {
   // res.sendFile(path.join(__dirname + "/../public/signup.html"));
 // });//


};

