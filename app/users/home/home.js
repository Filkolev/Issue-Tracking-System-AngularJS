'use strict';

angular.module('myApp.users.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'users/home/home.html',
    controller: 'HomeController'
  });
}])

.controller('HomeController', [function() {

}]);