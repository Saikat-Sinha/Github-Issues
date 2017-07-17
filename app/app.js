'use strict';

// Declare app level module which depends on views, and components
angular.module('GitHub', [
  'ngRoute',
  'GitHub.mainView',
  'GitHub.issuesView'
])
    .config(['$locationProvider', '$routeProvider', function($locationProvider) {

    $locationProvider.html5Mode(true);   //To resolve URL paths
}]);
