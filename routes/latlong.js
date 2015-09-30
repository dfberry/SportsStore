/******************************************************** */
//Search Mongo for lat Long information
// /latlong?type=search&field=FIELD2&value=98225
// /LatLong?type=ddl
/******************************************************** */
var express = require('express');
var search = require('../modules/db-mongo.js');
var router = express.Router();
var dbConfig = require('../config/db.json');

router.get('/', function(req, res, next) {

  var requestType = req.query.type;
  
  if (requestType=='search'){

    //correctly formed json ojbect
    var searchTerm = req.query.field;
    var searchValue = req.query.value.toString()
  
    console.log("latlong route search - searchTerm=" + searchTerm);
    console.log("latlong route search - searchValue=" + searchValue);
    
    search.search(dbConfig, searchTerm, searchValue, function (results) {
      console.log("latlong route - search results");
      console.log(results);
      res.send(results);
    });
    
  } else if(requestType=='ddl'){
      search.fields(dbConfig, function(results){
        
        
        
        res.send(results);
      });    
  } else {
    // not expected
    res.send("other");    
  }
  
  
});

module.exports = router;