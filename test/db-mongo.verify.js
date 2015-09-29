var db = require("../modules/db-mongo.js");
var _ = require("../node_modules/underscore/underscore");

function verifyFind(){

	var connectionObject = require("../config/db.json");
	
	var searchObject = {
		FIELD2: '98225'
	};
	
	db.find(connectionObject,searchObject, function(result){
			console.log(result);
	});
}
function verifyFields(){

	var connectionObject = require("../config/db.json");
	
	db.fields(connectionObject, function(result){
			console.log(result);
			/*			
			for (var key in p) {
				if (p.hasOwnProperty(key)) {
					
					console.log(key + " -> " + p[key]);
				}
			}
*/			
			/*
				 { FIELD1: 'countrycode',
					FIELD2: 'postalcode',
					FIELD3: 'placename',
					FIELD4: 'state_100',
					FIELD5: 'state_20',
					FIELD6: 'county_100',
					FIELD7: 'county_20',
					FIELD8: 'community_100',
					FIELD9: 'community_20',
					FIELD10: 'latitude',
					FIELD11: 'longitude',
					FIELD12: 'accuracy' } 			
			*/
	});
}

//verifyFind();
verifyFields();