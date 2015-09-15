var NodeCache = require("node-cache");

var TIMETOLIVE = 10000;
var CHECKPERIOD = 12000;

var zipCache = new NodeCache({stdTTL:TIMETOLIVE, checkperiod:CHECKPERIOD});

var zipSet = function(key, val){
	
	return zipCache.set(key,val, function( err, success ){
		if( !err && success ){
			//console.log('zipset success' );
			return true;
		}
		else{
			//console.log(err);
			return false;
		}
	});
}

var zipGet = function(key, val){
	
	return zipCache.get(key, function( err, value ){
		if( !err ){
			//console.log( value );
			return value;
		}
		else{
			//console.log(err);
		}
	});
	
	//console.log(value);
}

var zipStats = function(key, val){
	
	return zipCache.getStats();
}

module.exports = {
	set: zipSet,
	get: zipGet,
	stats: zipStats
}