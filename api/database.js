const { timeStamp } = require("console");
const { Schema } = require("mongoose");
const mongoose = require("mongoose");
const mongodbUrl = process.env.DATABASE_URL;

//connecting to mongoDB online database

mongoose.connect(mongodbUrl,{useNewUrlParser: true});

const BlogSchema = new mongoose.Schema({

    time: timeStamp,
    auther: String,
    title: String,
    content: String,
    OtherData: {
        type: Schema.Types._id,
        ref: 'BlogData'
    }
});
//made relationship between Blog schema and Other BLog Data which will have 
//data like comments , saves , shares etc.
module.exports = mongoose.model('Blog',BlogSchema);
const OtherBlogData = new mongoose.Schema({
    likes: Number,
    comments: String,
    saves: Number,
    BlogPost: {
        type: Schema.Types._id,
        ref: 'Blog'
    }
});
module.exports = mongoose.model("BlogData", OtherBlogData);