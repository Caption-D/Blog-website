const { timeStamp } = require("console");
const mongoose = require("mongoose");
const mongodbUrl = process.env.DATABASE_URL;

//connecting to mongoDB online database

mongoose.connect(mongodbUrl,{useNewUrlParser: true});

const BlogSchema = new mongoose.Schema({
    userId: String,
    time: timeStamp,
    auther: String,
    title: String,
    content: String

})