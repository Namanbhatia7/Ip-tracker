//jshint esversion : 6

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();
app.use(express.static("Public"));
app.use(bodyParser.urlencoded({extended: true}));


app.listen(3000, function(){

console.log("Server is running on PORT 3000");

})


app.get("/", function(req,res){

res.sendFile(__dirname + "/home.html")

})


app.post("/", function(req,res){
 
    var ipAddress = req.body.ip;
    var URL = "https://ipvigilante.com/json/" + ipAddress

    


    request(URL, function(error,response, body){

        

        var loc = JSON.parse(body)
        var country = loc.data.country_name;
        
        
        console.log(country);   

        res.send("<h2>Your country is<h2>" + country);
        
    });
   
    
})