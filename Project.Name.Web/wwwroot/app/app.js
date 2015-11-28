var app = angular.module('app', ['ngRoute']);


app.config(['$routeProvider','$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.when('/', {
        templateUrl: '/app/home/partials/home.html',
        controller: 'homeController',
        controllerAs: 'home'
    }).otherwise({
        templateUrl: '/app/home/partials/home.html'
    });
}]);