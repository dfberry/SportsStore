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
    var fieldSearch = req.query.field;
    var valueSearch = req.query.value.toString()
  
    var searchObject = {};
    var columnName = fieldSearch;
  
    searchObject[columnName] = valueSearch;
    
    search.find(dbConfig, searchObject, function (results) {
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