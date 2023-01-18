


var express = require("express");
var bodyParser = require("body-parser");


var app = express();
var items = ["One","Two"];
var workitems = [];

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
    res.render("list",{list1:day , newlistitems:items});

});


app.post("/",function (req,res) {
    var newItem = req.body.Newitem;

    if (req.body.list == "work Day") {
        workitems.push(newItem);
        res.redirect("/work");
    } else {
        items.push(newItem);
        res.redirect("/");
    }

})


app.get("/work", function (req ,res) {
    var day = "work Day"
    res.render("list",{list1:day , newlistitems:workitems});

})





app.listen(3000, function () {
    console.log("The server run in port 3000");    
})