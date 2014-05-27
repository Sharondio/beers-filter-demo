'use strict';

//App module.
var app = angular.module('real-app', []);

app.controller('MainCtrl', function($scope, $http, $timeout) {

    $scope.title = "Basic App with Data";

    // This really belongs in a service, but it's fine in the controller for now.
    // $http.get('data.cfc?method=getBeers').then(function(results) {
    //     $scope.beers = results.data;
    //     console.log(results);
    // });

    // delayed version for April
    $timeout(function() {
        $http.get('data.cfc?method=getBeers').then(function(results) {
            $scope.beers = results.data;
            console.log(results);
        });
    }, 5000);

    // $timeout(
    //     $http.get('data.cfc?method=getBeers').then(function(results) {
    //         $scope.beers = results.data;
    //         console.log(results);
    //     }), 10000);

});