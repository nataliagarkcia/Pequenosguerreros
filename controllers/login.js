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
app.get("/signup", function(req, res) {
    res.sendFile(path.join(__dirname + "/../public/signup.html"));
  });


};


/*var config = {
    apiKey: "AIzaSyDDdIBY09k0P8lVRz9BxdXhq1eS2HZJbUM",
    authDomain: "littlewarriors-b3f42.firebaseapp.com",
    databaseURL: "https://littlewarriors-b3f42.firebaseio.com",
    storageBucket: "littlewarriors-b3f42.appspot.com",
    messagingSenderId: "69590432568"
  };
  firebase.initializeApp(config);*/