const express  = require("express");
const router = express.Router();


router.get("/", function(req, res){
    res.send("<h2><b>Hello world but this time from homeROute <b></h2>");
});
module.exports = router;