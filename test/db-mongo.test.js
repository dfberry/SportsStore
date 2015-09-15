/// <reference path="../node_modules/assert/assert.js" />
/// <reference path="../modules/db-mongo.js" />

var config = require("../config/db.json");

/*
console.log(config);
console.log(config.url);
console.log(config.collection);
console.log(config.user);
console.log(config.pwd);
*/

var db = require("../modules/db-mongo.js");
var assert = require("assert");

var searchObject = { FIELD5: 'WA'};

//console.log(searchObject);

db.find(config,searchObject, function(result){
	console.log('result.length:' + result.length);
	assert.equal(result.length,747);
});
