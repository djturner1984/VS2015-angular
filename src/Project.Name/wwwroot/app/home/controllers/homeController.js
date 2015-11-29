'use strict';

app.controller('homeController', [
    '$scope', 'homeService', function($scope, homeService) {

        

        $scope.reset = function () {
            //$scope.author = "David Turner";
            homeService.getAuthor().then(function(data) {
                $scope.author = data;
            }, function(error) {
                console.log('error getting author');
            });
        }

        $scope.reset();

    }
]);
