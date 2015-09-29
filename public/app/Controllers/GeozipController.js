app.controller('GeozipController', 
    ['$scope','GeozipService', 
    function($scope, GeozipService) {
    
    $scope.test = "testing,1,2,3";
    $scope.fields = [];
    $scope.searchField="";
    $scope.searchResults = [];
    $scope.searchTerm;
    
    var getFields = function (){
        GeozipService.fields(function (data) {
            $scope.fields = data;
        });
    };
    $scope.getSearch = function(searchfield, searchterm){
        console.log("GeozGeozipControlleripService::search");        
        GeozipService.search(searchfield, searchterm, function (data) {
                console.log(data);
                $scope.searchResults = data;
            });
    };
    $scope.setSearchField = function(newSearchField){
        console.log("newSearchField = " + newSearchField);
        $scope.searchField = newSearchField;
    };
    
    /*
    $scope.dinaData = {"_id":"55f6f3f48b728b396178afca",
                       "FIELD1":"countrycode",
                       "FIELD2":"postalcode",
                       "FIELD3":"placename",
                       "FIELD4":"state_100",
                       "FIELD5":"state_20",
                       "FIELD6":"county_100",
                       "FIELD7":"county_20",
                       "FIELD8":"community_100",
                       "FIELD9":"community_20",
                       "FIELD10":"latitude",
                       "FIELD11":"longitude",
                       "FIELD12":"accuracy"
                      };
                   */
    
    function init(){
      getFields();  
    };
    

    
    init();
}]);
