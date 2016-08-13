'use strict';

/**
 * @ngdoc function
 * @name swApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of swApp
 */
angular.module('swApp')
  .controller('MainCtrl', function($scope) {
    $scope.tasks = [
      'view',
      'controller',
      'route',
      'directive',
      'filter',
      'service',
      'factory',
      'constant'
    ];
  });
