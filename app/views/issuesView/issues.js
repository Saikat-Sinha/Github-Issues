'use strict';

angular.module('GitHub.issuesView', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/issue/:number', {
            templateUrl: 'views/issuesView/issues.html',
            controller: 'issuesViewCtrl'
        });
    }])
    .controller('issuesViewCtrl', function($http, $routeParams, $scope) {
        $http.get('https://api.github.com/repos/facebook/react/issues/' + $routeParams.number) //API request for a particular issue number
            .success(function(data) {
                $scope.name = data.user.login;
                $scope.title = data.title;
                $scope.number = data.number;
                $scope.created_at = data.created_at;
                $scope.body = data.body;
            })
            .error(function() {                 //In case of no API available use Local Storage data stored from mainCtrl controller
                var userData = JSON.parse(localStorage.getItem('userData'));
               userData.forEach(function (val) {
                   if(val.number == $routeParams.number){
                       $scope.name = val.user.login;
                       $scope.title = val.title;
                       $scope.number = val.number;
                       $scope.created_at = val.created_at;
                       $scope.body = val.body;
                   }
               });

            });
    });