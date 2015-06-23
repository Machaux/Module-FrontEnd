'use strict';

/**
 * @ngdoc function
 * @name projetAngularjsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the projetAngularjsApp
 */
angular.module('projetAngularjsApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
