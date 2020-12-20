var express = require('express');
var router = express.Router();


router.get('/index', function(req, res) {
    console.log("called")
    //res.render('index', {title: MakeRandomNumber(100, 1)});
});

var MakeRandomNumber = (max, min) => {
    return Math.floor(Math.random() * (max - min)) + min;
}

module.exports = router;