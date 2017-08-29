var express = require("express")
var app = express();

var bodyparser = require("body-parser");
app.use("/", bodyparser.urlencoded({extended: false}));

app.get("/", function(req, res){   //it is a middleware
    res.send("hello, assignment 1");
});

app.use("/assets", express.static(__dirname+"/assets"));

//for having static response after form submission
app.post("/submit", function(req, res){
    console.log(req.body);
    //var dob = new Date(req.body.dob);
    var n = parseInt(((new Date()) - (new Date(req.body.dob)))/(3600*24*1000));
    res.send("hey "+req.body.name+" you live in this planet for "+n+" days");

})
app.listen(3000);
