var fs = require('fs');
var express = require('express');
var router = express.Router();
// var fileContents = fs.readFile('data.txt', function(err, data){


// });

/* GET home page. */
router.get('/', function(req, res, next) {
    fs.readFile('data.txt', function(err, data){
          // res.render('index', { title: 'Express' });
          res.header('Content-Type', 'text/html');
         res.send(data)

});

});

module.exports = router;


