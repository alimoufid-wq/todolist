


var express = require("express");
var bodyParser = require("body-parser");


var app = express();

app.set('view engine', 'ejs');


app.get("/",function (req ,res) {
    var today = new Date();
    var todayDay = today.getDay();
    var day = "";
    if (todayDay == 6 ) {
        day = "Saturday";
    } 
    if  (todayDay == 0 ) {
        day = "Sunday";
    } 
    if (todayDay == 1 ) {
        day = "Lundi";
    } 
    if  (todayDay == 2 ) {
        day = "Mardi";
    } 
    if  (todayDay == 3 ) {
        day = "Mercredi";
    } 
    if  (todayDay == 4 ) {
        day = "jeudi";
    } 
    if  (todayDay == 5 ) {
        day = "vendredi";
    } 
    else{
        console.log(todayDay);
    }
    res.render("list",{kinofDay:day});

});


app.listen(3000, function () {
    console.log("The server run in port 3000");    
})