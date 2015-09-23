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