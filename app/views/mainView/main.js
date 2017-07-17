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
            $scope.gitData = response.data;   //Response data from GitHub API v3
            $scope.sortBy = "none";           // sortBy Parameter for sorting list data
        });
    $scope.addItem = function (param) {
        var date = moment();                  //Initializing moment.js
        $scope.newUser = {};                                    //Dummy data for the ng-submit in View
        $scope.newUser.created_at = date.toISOString();
        $scope.newUser.updated_at = date.toISOString();
        $scope.newUser.comments = 0;
        $scope.newUser.user = {
            login: "Saikat-Sinha"
        };
        $scope.newUser.title = "";
        $scope.newUser.body = "";
        $scope.newUser.number = (Math.floor(Math.random()*90000) + 10000) + '!';   //Random number for Issue number
        $scope.newUser.body = param.body;                       //Receiving parameter from view
        $scope.newUser.title = param.title;                     //Receiving parameter from view

        if(localStorage.getItem('userData')){                      //Localstorage for future data Transactions
           var oldItems =  JSON.parse(localStorage.getItem('userData'));
           oldItems.push($scope.newUser);
           localStorage.setItem('userData', JSON.stringify(oldItems));
        }
        else {
            var arr = [];
            arr.push($scope.newUser);
            localStorage.setItem('userData', JSON.stringify(arr));
        }
        if($scope.gitData){                                 //Handling Error for No Data from Github API
            $scope.gitData.unshift($scope.newUser);
        }
        else{
            $scope.gitData = [];
            $scope.gitData.unshift($scope.newUser);
        }
        console.log($scope.newUser);
        $scope.newUser ={};                         //Re Initializing data
        param.title ="";
        param.body = "";
    };
});