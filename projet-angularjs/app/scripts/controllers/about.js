'use strict';

/**
 * @ngdoc function
 * @name projetAngularjsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the projetAngularjsApp
 */
angular.module('projetAngularjsApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
