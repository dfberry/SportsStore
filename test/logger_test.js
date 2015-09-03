/// <reference path="../global.js" />

var logger = require("../utils/logger.js")
var assert = require("assert");

describe('logger', function() {
	
  // set up	
  before(function() {
    // runs before all tests in this block
  });

  // tear down
  after(function() {
    // runs after all tests in this block
  });

  // set up each
  beforeEach(function() {
    // runs before each test in this block
  });

  // tear down each
  afterEach(function() {
    // runs after each test in this block
  });	
	
   describe('logger.write()', function () {
    it('should write msg to log file', function () {
      logger.write('test');
    });
  });   
});