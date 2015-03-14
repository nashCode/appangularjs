'use strict';

/**
 * @ngdoc function
 * @name appangularjsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the appangularjsApp
 */
angular.module('appangularjsApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
