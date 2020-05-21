console.log("Entered update.js")

var io = require("../bin/www")

svgarray = require("../bin/serverSVG")

var express = require('express');
var router = express.Router();



/* GET update requests . */
router.post('/', function(req, res, next) {
    //console.log("received: " + Object.keys(req) + ": :::"+ Object.keys(req.client))

    if(req.headers.superline == "loading"){
        res.end(svgarray.toString())
        return;
    }


    //console.log(req.headers.superline)
    svgarray.push(req.headers.superline)
    res.end("good")

    console.log(svgarray.length)



});

module.exports = router;
