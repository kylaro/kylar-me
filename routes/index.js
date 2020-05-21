console.log("Entered index.js");

svgarray = require("../bin/serverSVG")

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  console.log(svgarray.length)
});

module.exports = router;
