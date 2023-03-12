const { timeStamp } = require("console");
const { Schema } = require("mongoose");
const mongoose = require("mongoose");
const mongodbUrl = process.env.DATABASE_URL;
const testMongoUrl = "mongodb://localhost:27017/blog";
//connecting to mongoDB online database
//actual link while in production
// mongoose.connect(mongodbUrl,{useNewUrlParser: true});
//testing link 
mongoose.connect(testMongoUrl, { useNewUrlParser: true });

const BlogSchema = new mongoose.Schema({
    // time: timeStamp,
    auther: String,
    title: String,
    content: String,
    likes: Number,
    comments: [{ type: String }],
    saves: Number,
    view: Number,
    //Relationship
    // Autehr: {
    // type: mongoose.Schema.Types._id,
    // ref: 'Auther'
    // }

}, { timestamps: true });
const Blog = mongoose.model('blog', BlogSchema);
const blog = new Blog({
    // time: Date.now(),
    auther: "Drumil HV",
    title: "TEst",
    content: "We are testing now and we hope to see that it passes, if it does we will soon add other features like auther profile his posts, for now just under testing",
    likes: 10,
    comments: ['lets hope it happens', "lets go!!"],
    saves: 10,
    view: 20,
});
blog.save();
module.exports = mongoose.model("Blog", BlogSchema);
//made relationship between Blog schema and Other BLog Data which will have 
//data like comments , saves , shares etc.


// add this section later when testing and basic protoypt is done 
//do not change the name given below as they could contain important data like 
//relationship with the Blog tabel
//================================================>
// const BlogAuther = new mongoose.Schema({
//     Name: String,
//         //once this is done we need to add profile photo and blog photos
//     profilePhoto: 
// })
//module.exports = mongoose.modle('Auther', BlogAuther);
//

function writeBlog() {

}
module.exports = writeBlog();

function giveBlog() {
    // return
     console.log(Blog.find({
        auther: 'Drumil HV'
    }));
}
giveBlog();
module.exports = giveBlog;
