'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.users',
  'myApp.users.home',  
  'myApp.version'
])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/home'});
}])
.constant('BASE_REQUEST_URL', 'http://softuni-issue-tracker.azurewebsites.net');
