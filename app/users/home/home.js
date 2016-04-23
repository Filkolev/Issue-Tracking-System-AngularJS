'use strict';

angular.module('myApp.users.home', ['ngRoute', 'myApp.users'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'users/home/home.html',
    controller: 'HomeController'
  });
}])

.controller('HomeController', ['$scope', 'authentication', function($scope, authentication) {
        
    $scope.loginUser = function (loginUserData) {
        authentication.loginUser(loginUserData);
    };
    
    $scope.registerUser = function (registerUserData) {        
        authentication.registerUser(registerUserData)
            .then(function(response) {
                console.log(response);
            });
    };
}]);