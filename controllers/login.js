var path = require("path");

module.exports = function(app) {

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname + "../public/index.html"));
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