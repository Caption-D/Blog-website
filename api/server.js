const express  = require("express");
const mongoose = require("mongoose");
const mongodbUrl = process.env.DATABASE_URL;
const app = express();
app.get("/", function(req, res){
    res.send("<h1>Hello world</h1>");
});
app.listen(3000, function(err){
    console.log("The server is up and running!!");
    
})