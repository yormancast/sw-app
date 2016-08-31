'use strict';
angular.module('swApp')
.config(function($stateProvider, $urlRouterProvider) {
  //
  $urlRouterProvider.otherwise("/app/main");
  //
  // Now set up the states
  $stateProvider
    .state('app', {
      abstract:true,
      url: "/app",
      views:{
        'mainApp': {
          templateUrl: "views/main.html",
          controller: 'MainCtrl'
        }
      }
    })
    .state('app.main', {
      url:'/main',
      templateUrl: "views/home.html"
    })
    .state('app.films', {
      url:'/films',
      templateUrl: "views/films/films.html",
      controller:"FilmsCtrl"
    });

});
