var MongoClient = require('mongodb').MongoClient;
 
// Use connect method to connect to the Server 
// connectionObject.url example 'mongodb://url:port/db'
// connectionOjbect.collection example 'geoZip'
// connectionObject.user example 'bob'
// connectionObject.pwd example '1234'
// searchObject example {FIELD5:'WA'}
var find = function (connectionObject, searchObject, callback){

	MongoClient.connect(connectionObject.url, function(err, db) {
		
		db.authenticate(connectionObject.user,connectionObject.pwd, function(err, authResult){

			db.collection(connectionObject.collection, function(err,collectionResult){
				
				collectionResult.find(searchObject, function(err,cursor){

					cursor.toArray(function(err,docs){

						db.close();	
						callback(docs);
 
 					});
				});		
			});
			
		});
	});
}

var fields = function(connectionObject, callback){
	
	// get ojbect which has column names
	var searchObject = {"FIELD1": "countrycode"};
	
	find(connectionObject,searchObject,callback, function(err, jsonResult){
		callback(jsonResult);
	});
}

// public functions
module.exports = {
	find: find,
	fields: fields
}

