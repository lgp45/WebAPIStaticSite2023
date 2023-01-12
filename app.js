var express = require("express");
var app = express();    //sets to an object instance    //object instantiation in JS
var port = process.env.port || 3000;

//setup a route for static files
app.use(express.static(__dirname+"/static"));

//place a request with a designated response on access - ROUTE
app.get("/", function(req, res){
    //res.send("Welcome to Web API Games Server");
    res.sendFile(__dirname+"/static/index.html");
});

//Route for a home section
app.get("/home", function(req, res){
    res.send("This will be our homepage for now.");
});

app.listen(port, function(){
    console.log("Server is running... Please remember to shut down the server... Shutdown with: Control+C");
});   //listens on port 3000