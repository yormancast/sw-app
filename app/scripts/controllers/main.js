'use strict';

/**
 * @ngdoc function
 * @name swApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of swApp
 */
angular.module('swApp')
  .controller('MainCtrl', function($scope,$http) {
      $scope.cont = {
        "films":{
          "title":"films",
           "apiUrl": $scope.swURL + "/films/",
           "viewURL": "app.films",
           "img":"films.jpg",
           "text": "The greatest adventure series of all time."
        },
        "people":{
          "title":"people",
           "apiUrl": $scope.swURL + "/people/",
           "viewURL": "app.people",
           "img":"chars.jpg",
           "text": "You know, that little droid is going to cause me a lot of trouble.” - “…Oh, he excels at that, sir."
        },
        "planets":{
          "title":"planets",
           "apiUrl": $scope.swURL + "/planets/",
           "viewURL": "app.planets",
           "img":"planets.jpg",
           "text":"You would prefer another target? A military target? Then name the system!"
        },
        "species":{
          "title":"species",
           "apiUrl": $scope.swURL + "/species/",
           "viewURL": "app.species",
           "img":"species.png",
           "text":"Those Tuskens walk like men, but they're vicious, mindless monsters."
        },
        "starships":{
          "title":"starships",
           "apiUrl": $scope.swURL + "/starships/",
           "viewURL": "app.starships",
           "img":"starships.jpg",
           "text":"Now, witness the power of this fully operational battle station."
        },
        "vehicles":{
          "title":"vehicles",
           "apiUrl": $scope.swURL + "/vehicles/",
           "viewURL": "app.vehicles",
           "img":"vehicles.jpg",
           "text":"Ever since the XP-38 came out, they just aren't in demand."
        }
      }
  });
