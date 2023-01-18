


var express = require("express");
var bodyParser = require("body-parser");


var app = express();


app.get("/",function (req ,res) {
    res.send("Hello it the todolist");
});


app.listen(3000, function () {
    console.log("The server run in port 3000");    
})