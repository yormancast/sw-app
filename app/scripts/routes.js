'use strict';
angular.module('swApp')
.config(function($stateProvider, $urlRouterProvider) {
  //
  $urlRouterProvider.otherwise("/app");
  //
  // Now set up the states
  $stateProvider
    .state('app', {
      url: "/app",
      templateUrl: "views/main.html"
    });

});
