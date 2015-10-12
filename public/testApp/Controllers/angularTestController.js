app.controller('angularTestController', 
    ['$scope', 
    function($scope) {

        $scope.counter=0;
        
        $scope.incrementCounter = function(){
            $scope.counter++;
        }

    
}]);
