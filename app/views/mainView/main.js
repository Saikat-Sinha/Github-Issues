'use strict';

angular.module('GitHub.mainView', ['ngRoute','angularMoment'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'views/mainView/main.html',
    controller: 'MainCtrl'
  });
}])

.controller('MainCtrl', function($scope, $http) {
    $http.get('https://api.github.com/repos/facebook/react/issues')
        .then(function (response) {
            $scope.gitData = response.data;
            $scope.sortBy = "none";
        });
    $scope.addItem = function (param) {
        var date = moment();
        $scope.newUser = {};
        $scope.newUser.created_at = date.toISOString();
        $scope.newUser.updated_at = date.toISOString();
        $scope.newUser.comments = 0;
        $scope.newUser.user = {
            login: "Saikat-Sinha"
        };
        $scope.newUser.title = "";
        $scope.newUser.body = "";
        $scope.newUser.number = (Math.floor(Math.random()*90000) + 10000) + '!';
        $scope.newUser.body = param.body;
        $scope.newUser.title = param.title;

        if(localStorage.getItem('userData')){
           var oldItems =  JSON.parse(localStorage.getItem('userData'));
           oldItems.push($scope.newUser);
           localStorage.setItem('userData', JSON.stringify(oldItems));
        }
        else {
            var arr = [];
            arr.push($scope.newUser);
            localStorage.setItem('userData', JSON.stringify(arr));
        }
        if($scope.gitData){
            $scope.gitData.unshift($scope.newUser);
        }
        else{
            $scope.gitData = [];
            $scope.gitData.unshift($scope.newUser);
        }
        console.log($scope.newUser);
        $scope.newUser ={};
        param.title ="";
        param.body = "";
    };
});