describe("Controller Test", function(){
	
	// Arrange
	var mockScope, testController,  mockLog;
	
	// load module that contains the controller
	beforeEach(angular.mock.module("angularTest"));
	//beforeEach(module("angularTest")); // same as above
	

	beforeEach(angular.mock.inject(function($rootScope, $controller, $log){
			
		mockScope = $rootScope.$new();
		mockLog = $log;
		testController = $controller("angularLogTestController", {
			$scope: mockScope,
			$mockLog: $log
		});
	}));
	
	
	// Act and Access
	it("Creates variable", function(){
		expect(mockScope.counter).toEqual(0);
	});
	
	
	it("Increments counter", function(){
		mockScope.incrementCounter();
		expect(mockScope.counter).toEqual(1);
	});

	it("Writes to Log", function(){
		mockScope.incrementCounter();
		expect(mockLog.log.logs.length).toEqual(2);
	});

	
});