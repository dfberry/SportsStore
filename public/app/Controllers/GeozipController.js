app.controller('GeozipController', 
    ['$scope','GeozipService', 
    function($scope, GeozipService) {
    
    $scope.test = "testing,1,2,3";
    $scope.fields = [];
    $scope.searchResults = [];
    
    var getFields = function (){
        console.log("GeozipController::fields");
        GeozipService.fields(function (data) {
                console.log(data);
              $scope.fields = data[0];
            });
    };
    $scope.getSearch = function(searchfield, searchterm){
        console.log("GeozGeozipControlleripService::search");        
        GeozipService.search(searchfield, searchterm, function (data) {
                console.log(data);
                $scope.searchResults = data;
            });
    };
    
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
    
    function init(){
      getFields();  
    };
    
    init();
}]);
/*
var Geozip;
(function (Geozip) {
    console.log('GeozipController.js::beginning of function');

    'use strict';
    var GeozipController = (function () {
        
        console.log('GeozipController.js::controller definition begins');
        
        function GeozipController($scope, geozipService) {
            console.log('GeozipController.js::controller definition - constructor');
            this.scope = $scope;
            this.geozipService = geozipService;
            this.fields();
        }
        GeozipController.prototype.fields = function () {
            console.log('GeozipController.js::controller definition - fields');

            var _this = this;
            this.geozipService.fields(function (data) {
                console.log('GeozipController.js::controller definition - fields - results:');
                console.log(data);
                console.log(data[0]);
                _this.scope['fields'] = data[0];
            });
        };
        GeozipController.prototype.search = function (searchfield, searchterm) {
            console.log('GeozipController.js::controller definition - search');
            
            var _this = this;
            this.geozipService.search(searchfield, searchterm, function (data) {
                _this.scope['search'] = data;
            });
        };
        console.log('GeozipController.js::controller definition ends');

        return GeozipController;
    })();
    Geozip.getModule().controller('geozipController', [
        '$scope',
        'geozipService',
        function ($scope, geozipService) { 
            console.log('GeozipController- return new controller');
            return new GeozipController($scope, geozipService); 
        }
    ]);
    console.log('GeozipController.js::end of function');

})(Geozip || (Geozip = {}));
*/