app.controller('angularAjaxTestController', 
    ['$scope', '$http',
    function($scope, $http) {

        $scope.counter=0;
		
		$http.get("productData.json").success(function(data){
			$scope.products = data;
		});
        
        $scope.incrementCounter = function(){
            $scope.counter++;
        }

    
}]);