'use strict';

/**
 * @ngdoc function
 * @name meroarbolwebApp.controller:RemitosCtrl
 * @description
 * # RemitosCtrl
 * Controller of the meroarbolwebApp
 */
angular.module('meroarbolwebApp')
  .controller('RemitosCtrl', ['$scope', function (scope) {
      scope.rowCollection = [
          {numeroRemito: '1010', descripcion: 'Descripcion remito 1010', estado: 'En preparacion'},
          {numeroRemito: '1011', descripcion: 'Descripcion remito 1011', estado: 'Anulado'},
          {numeroRemito: '1012', descripcion: 'Descripcion remito 1012', estado: 'Cerrado'}
      ];
  }]);
