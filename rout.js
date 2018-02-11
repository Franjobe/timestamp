var express = require("express");
var router = express.Router();


// Home page route
router.get('/', function(req, res) {
		  res.sendFile(process.cwd() + '/views/index.html');
    })


// Other page route
router.get("*", function(req, res){
    // path example: /December%2015,%202015
    // TAKE THE PATH from REQ, Decode it and take out the first char (/);
    var time = decodeURI(req.path).substr(1); // output: December 15, 2015
  
    // CONVERT TO UNIX (1st convert it to Date format and 2nd with getTime convert to Unix)     
    var unix = new Date(time).getTime()/1000;  
  
    
    var result;
    // CHECK IF IT IS A VALID DATE. if not declare Null.
    var check = Date.parse(time);
  
    if (isNaN(check) !== false) {
    time = null;
    unix = null;
    
    // CONVERT TO JSON STRING AND PARSE  
    result = JSON.parse("{\"unix\":" + unix +  ",\"natural\": " + time + " }");  
    } else {
  
    var result = JSON.parse("{\"unix\":" + unix +  ",\"natural\": \"" + time + "\" }");  // se repite xq uno tiene \"\".
    }
    
    res.send(result);

  
});

module.exports = router;



// FALTA AGREGAR A GITHUB

