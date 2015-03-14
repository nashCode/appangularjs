'use strict';

/**
 * @ngdoc function
 * @name appangularjsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the appangularjsApp
 */
angular.module('appangularjsApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
