var express = require("express");
var path = require("path");

var app = express();

var filePath = path.join(__dirname, "babajii.jpg");
app.use(function(req, res) {
    res.sendFile(filePath);
});

app.listen(3000, function() {
    console.log("App started on port 3000");
});

