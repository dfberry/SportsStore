/// <reference path="../node_modules/assert/assert.js" />

var mycache = require("../modules/cache.js")
var assert = require("assert");

describe('cache_test', function() {
	
   describe('cache_test.set()', function () {
    it('should set data in cache', function () {
	  //console.log(mycache.stats());
    var results = mycache.set('state');
	  assert.strictEqual(results,true);
    });
  });
/*  
   describe('cache_test.get()', function () {
    it('should get good data in cache', function () {
      assert.true(mycache.get('state'), 'zip');
    });
  });   
*/
/*	
   describe('cache_test.get()', function () {
    it('should get bad data in cache', function () {
      console.log(mycache.get('year'));
    });
  });   
*/  
     
});