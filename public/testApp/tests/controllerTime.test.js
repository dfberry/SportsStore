describe("Controller Test", function(){
	
	// Arrange
	var mockScope, testController, backend, mockInterval, mockTimeout;
	
	// load module that contains the controller
	beforeEach(angular.mock.module("angularTest"));
	//beforeEach(module("angularTest")); // same as above
	
	// get backend
	beforeEach(angular.mock.inject(function ($httpBackend){
		backend = $httpBackend;
		backend.expect("GET", "productData.json").respond([
			{"name":"Apples", "category":"Fruit", "price": 1.20},
			{"name":"Bananas", "category":"Fruit", "price": 2.42},
			{"name":"Pears", "category":"Fruit", "price": 2.02}	
		]);
	}));
	
	beforeEach(angular.mock.inject(function($rootScope, $controller, $http,
		$interval, $timeout){
			
		mockScope = $rootScope.$new();
		mockInterval = $interval;
		mockTimeout = $timeout;
		testController = $controller("angularTimeTestController", {
			$scope: mockScope,
			$http: $http,
			$interval: mockInterval,
			$timeout: mockTimeout
		});
		backend.flush();
		
	}));
	
	afterEach(function(){
		backend.verifyNoOutstandingExpectation();
		backend.verifyNoOutstandingRequest();
	});
	
	// Act and Access
	it("Creates variable", function(){
		expect(mockScope.counter).toEqual(0);
	});
	
	
	it("Increments counter", function(){
		mockScope.incrementCounter();
		expect(mockScope.counter).toEqual(1);
	});
		
	it("Processes the data", function(){
		expect(mockScope.products).toBeDefined();
		expect(mockScope.products.length).toEqual(3);
	});
	
	it("Perserves the data order", function(){
		expect(mockScope.products[0].name).toEqual("Apples");
		expect(mockScope.products[1].name).toEqual("Bananas");		
		expect(mockScope.products[2].name).toEqual("Pears");
	});
	
	it("Limits interval to 10 updates", function(){
		for(var i =0; i < 11; i++){
			mockInterval.flush(5000);
		}
		expect(mockScope.intervalCounter).toEqual(10);
	});
	
	it("Increments time counter", function(){
		mockTimeout.flush(5000);
		expect(mockScope.timerCounter).toEqual(1);
	});
	
});