describe("Controller Test", function(){
	
	// Arrange
	var mockScope = {};
	var testController;
	
	// load module that contains the controller
	beforeEach(angular.mock.module("angularTest"));
	//beforeEach(module("angularTest")); // same as above
	
	
	beforeEach(angular.mock.inject(function($rootScope, $controller){
		mockScope = $rootScope.$new();
		testController = $controller("angularTestController", {
			$scope: mockScope
		});
		
	}));
	
	// Act and Access
	it("Creates variable", function(){
		expect(mockScope.counter).toEqual(0);
	})
	
	//it("Increments counter", function(){
	//	mockScope.incrementCounter();
	//	expect(mockScope.counter).toEqual(1);
	//})
	
});