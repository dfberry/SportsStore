var db = require("../modules/db-mongo.js");

function verify(){

	var connectionObject = require("../config/db.json");
	
	var searchObject = {
		FIELD5: 'WA'
	};
	
	db.find(connectionObject,searchObject, function(result){
			console.log(result);
	});
}

verify();