var MongoClient = require('mongodb').MongoClient;
 
// Use connect method to connect to the Server 
// connectionObject.url example 'mongodb://url:port/db'
// connectionOjbect.collection example 'geoZip'
// connectionObject.user example 'bob'
// connectionObject.pwd example '1234'
// searchObject example {FIELD5:'WA'}
var find = function (connectionObject, searchObject, callback){

	console.log('url:' + connectionObject.url);

	MongoClient.connect(connectionObject.url, function(err, db) {
		
		console.log('err:' + err);
		
		console.log('user:' + connectionObject.user);
		console.log('pwd:' + connectionObject.pwd);
		
		db.authenticate(connectionObject.user,connectionObject.pwd, function(err, authResult){
			
			console.log('err:' + err);
			console.log('collection:' + connectionObject.collection);
			console.log('authResult:' + authResult);
			
			db.collection(connectionObject.collection, function(err,collectionResult){
				
				console.log('err:' + err);
				console.log('collectionResult:' + collectionResult);
				console.log('searchObject:' + searchObject);
				
				collectionResult.find(searchObject, function(err,cursor){
					
					console.log('err:' + err);
					//console.log(cursor);
					
					cursor.toArray(function(err,docs){

						console.log('err:' + err);
						console.log('docs:' + docs.length);

						db.close();	
						callback(docs);
 
 					});
				});		
			});
			
		});
	});
}

// public functions
module.exports = {
	find: find
}

