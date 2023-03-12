const express  = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');

//ROUTING work going on here
const routes = require('./routes/routes')
const homeRoute = require('./routes/homeRoute');
const app = express();

//Environment (.env) variables to import 
const mongodbUrl = process.env.DATABASE_URL;

//Imorting database here 
const database = require('./database');
app.use(bodyParser.urlencoded({extended: true}));
app.use(routes);
app.use(homeRoute);
// app.use(database);

app.listen(3000, function(err){
    console.log("The server is up and running!!");

});