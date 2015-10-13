app.controller('angularLogTestController', 
    ['$scope','$log',
    function($scope,$log ) {

        $scope.counter=0;
		
        $scope.incrementCounter = function(){
            $scope.counter++;
            $log.log("There are  items");
        };
        
        var init = function(){
            $log.log("init");  
        };
        
        init();
}]);