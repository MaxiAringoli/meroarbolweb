'use strict';

/**
 * @ngdoc function
 * @name meroarbolwebApp.controller:MarcasCtrl
 * @description
 * # MarcasCtrl
 * Controller of the meroarbolwebApp
 */
angular.module('meroarbolwebApp')
    .controller('MarcasCtrl', ['$scope', function (scope) {
        scope.rowCollection = [
            {id: '1', nombre: 'Marca 1', descripcion: 'Descripcion marca 1'},
            {id: '2', nombre: 'Marca 2', descripcion: 'Descripcion marca 2'},
            {id: '3', nombre: 'Marca 3', descripcion: 'Descripcion marca 3'},
            {id: '4', nombre: 'Marca 4', descripcion: 'Descripcion marca 4'},
            {id: '5', nombre: 'Marca 5', descripcion: 'Descripcion marca 5'}
        ];
    }]);
