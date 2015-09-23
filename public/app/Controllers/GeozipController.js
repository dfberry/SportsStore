app.controller('GeozipController', ['$scope', 'geozipService', function($scope, geozipService) {
    $scope.fields = function (){
        
        return geozipService.fields(function (data) {
               return data[0];
            });
    };
    $scope.search = function(searchfield, searchterm){
        return geozipService.search(searchfield, searchterm, function (data) {
                return data;
            });
    };
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