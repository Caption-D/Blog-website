const express  = require('express');
const router = express.Router();
const database = require('../database');


router.get("/test-URL",(req,res) => {
    //res.write() syntax
    //-------------------------------
    // res.write("<h1>hello from test url</h1>",'utf8',()=>{
    //     console.log('writing data to /test-URL');
    // });
    //res.end();
    //res.send ------------------------------
    // res.send("<h1>hello from test url</h1>")
    const blogs = database.giveBlog();
    console.log(blogs);


});
module.exports = router;