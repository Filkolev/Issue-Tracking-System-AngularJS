'use strict';

angular.module('myApp.users')

.factory('authentication', [ 
    '$http', 
    '$q', 
    'BASE_REQUEST_URL', 
    function ($http, $q, BASE_REQUEST_URL) {
        var factory = {};
        
        factory.loginUser = function (loginUserData) {
            var config = {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }            
            
            var deferred = $q.defer();
            
            $http.post(
                BASE_REQUEST_URL + '/api/Token', 
                'Username=' + loginUserData.email + '&Password=' + loginUserData.password + '&grant_type=password',
                config
                )
                .then(function (response) {
                    console.log(response);
                    deferred.resolve(response.data); 
                }, function (err) {
                    console.log(err);
                });
                
            return deferred.promise;
        };
        
        factory.registerUser = function (registerUserData) {            
            var config = {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }
            
            var deferred = $q.defer();
            
            $http.post(
                BASE_REQUEST_URL + '/api/Account/Register', 
                'Email=' + registerUserData.email + '&Password=' + registerUserData.password
                + '&ConfirmPassword=' + registerUserData.confirmPassword,
                config)
                .then(function (response) {
                    deferred.resolve(response.data);                    
                    console.log(response);
                }, function (err) {
                    console.log(registerUserData);
                    console.log(err);
                });
                
            return deferred.promise;
        };
        
        return factory;
}]);