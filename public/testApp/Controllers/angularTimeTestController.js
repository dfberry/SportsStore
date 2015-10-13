app.controller('angularTimeTestController', 
    ['$scope', '$http', '$interval', '$timeout',
    function($scope, $http, $interval, $timeout) {

        $scope.intervalCounter = 0;
        $scope.timerCounter = 0;
        $scope.counter=0;
		
		$http.get("productData.json").success(function(data){
			$scope.products = data;
		});
        
        $scope.incrementCounter = function(){
            $scope.counter++;
        }
        
        $interval(function(){
            $scope.intervalCounter++; 
        }, 5000,10);

        $timeout(function(){
           $scope.timerCounter++; 
        });
}]);