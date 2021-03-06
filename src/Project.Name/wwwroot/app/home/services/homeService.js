'use strict';

app.factory('homeService', [
    '$http', '$q', function($http, $q) {

        var homeServiceFactory = {};

        var _getAuthor = function () {
            var deferred = $q.defer();
            $http.get('http://dev.project.name.com/home/values', { headers: { 'Accept': 'application/json' } }).success(function (response) {
                deferred.resolve(response);
            }).error(function (err, status) {
                deferred.reject(status);
            });

            return deferred.promise;
        };

        homeServiceFactory.getAuthor = _getAuthor;
        return homeServiceFactory;
    }]);
    
    
    
