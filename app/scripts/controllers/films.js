'use strict';

/**
 * @ngdoc function
 * @name swApp.controller:FilmsCtrl
 * @description
 * # FilmsCtrl
 * Controller of swApp
 */
angular.module('swApp')
  .controller('FilmsCtrl', function($scope, $http, $uibModal, $log) {
    $http.get('http://swapi.co/api/films/',{cache:true})
      .success(function(data){
          $scope.swFilms = data;
      })
      .error(function(response) {
        console.log('Error: ' + response);
      });
      $scope.filmsData = [
          "iv.jpg",
          "ii.png",
          "i.png",
          "iii.png",
          "vi.png",
          "v.png",
          "vii.png"
        ];

        $scope.filmsModal = function (size) {
         var modalInstance = $uibModal.open({
           animation: true,
           templateUrl: 'views/films/films.modal.html',
           controller: 'ModalCtrlCtrl'
       });
     }

  });//end controller
