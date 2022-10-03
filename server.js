/*
Name : yeonsu park
Id   :128899218
Email:ypark91@myseneca.ca
*/


var express = require("express");
var app = express();
var path = require("path");

var HTTP_PORT = process.env.PORT || 8080;
function onHttpStart() {
console.log("Express http server listening on: " + HTTP_PORT);
}

// setup another route to listen on /blog.html
app.get("/", function(req,res){
    res.sendFile(path.join(__dirname,"/blog.html"));
  });
app.get("/article", function(req,res){
    res.sendFile(path.join(__dirname,"/read_more.html"));
  });
app.get("/registration", function(req,res){
    res.sendFile(path.join(__dirname,"/registration.html"));
  });
app.get("/login", function(req,res){
    res.sendFile(path.join(__dirname,"/login.html"));
  });
app.use(function(req,res){
  res.status(404).send("Page not found")
})

// setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT,onHttpStart);