var moduleTest = require("../utils/module.js")
var assert = require("assert");

describe('module_test', function() {
	
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
	
	
  // test	
  describe('moduleTest.test()', function () {
    it('should return hardcoded 5', function () {
      assert.equal(5, moduleTest.test());
    });
  });
});