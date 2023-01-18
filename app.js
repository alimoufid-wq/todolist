


var express = require("express");
var bodyParser = require("body-parser");


var app = express();
var items = ["One","Two"];

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static("public"))


app.get("/",function (req ,res) {
    var today = new Date();
    var options = {
        weekday : "long",
        day : "numeric",
        month : "long"
    };

    var day = today.toLocaleDateString("en-US",options);
    res.render("list",{kinofDay:day , newlistitems:items});

});


app.post("/",function (req,res) {
    var newItem = req.body.Newitem;
    items.push(newItem);
    res.redirect("/");
})


app.listen(3000, function () {
    console.log("The server run in port 3000");    
})