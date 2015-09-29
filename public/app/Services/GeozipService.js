app.service('GeozipService', 
    ['$http', 
    function($http) {
    
    var fields = function (callback){
        console.log("GeozipService::fields");
        $http.get('/latlong?type=ddl', null).success(callback);
    };
    var search = function(searchfield, searchterm, callback){
        console.log("GeozipService::search");
        $http.get('/latlong?type=search&field=' + searchfield + '&value=' + searchterm).success(callback);
    };
    return {
        fields: fields,
        search: search
    };
}]);
/*
app.factory('forecast', ['$http', function($http) { 
  return $http.get('https://s3.amazonaws.com/codecademy-content/courses/ltp4/forecast-api/forecast.json') 
            .success(function(data) { 
              return data; 
            }) 
            .error(function(err) { 
              return err; 
            }); 
}]);


/*
var Geozip;
(function (Geozip) {
    'use strict';
    var GeozipService = (function () {
        function GeozipService($http) {
            console.log('GeozipService.js::GeozipService constructor - begin');
            this.http = $http;
        }
        GeozipService.prototype.fields = function (cb) {
            console.log('GeozipService.js::GeozipService.prototype.fields - begin');
            this.http.get('/latlong?type=ddl', null).success(cb);
        };
        GeozipService.prototype.search = function (searchfield, searchterm, cb) {
            console.log('GeozipService.js::GeozipService.prototype.search - searchfield:' + searchfield);
            console.log('GeozipService.js::GeozipService.prototype.search - searchterm:' + searchterm);
            this.http.get('/latlong?type=search&field=' + searchfield + '&value=' + searchterm).success(cb);
        };
        return GeozipService;
    })();
    Geozip.GeozipService = GeozipService;
    Geozip.getModule().service('geozipService', [
        '$http',
        function ($http) { return new GeozipService($http); }
    ]);
})(Geozip || (Geozip = {}));
*/