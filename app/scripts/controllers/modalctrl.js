'use strict';

/**
 * @ngdoc function
 * @name swApp.controller:ModalCtrlCtrl
 * @description
 * # ModalCtrlCtrl
 * Controller of swApp
 */
angular.module('swApp')
  .controller('ModalCtrlCtrl', function($scope, $uibModalInstance) {
    $scope.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };
  });
