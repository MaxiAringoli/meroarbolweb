'use strict';

/**
 * @ngdoc function
 * @name meroarbolwebApp.controller:ModelosCtrl
 * @description
 * # ModelosCtrl
 * Controller of the meroarbolwebApp
 */
angular.module('meroarbolwebApp')
    .controller('ModelosCtrl', ['$scope', '$filter', function (scope, filter) {
        scope.rowCollection = [
            {nombre: 'Modelo 1', descripcion: 'Descripcion modelo 1', estado:"true", marca: 'Marca 1'},
            {nombre: 'Modelo 2', descripcion: 'Descripcion modelo 2', estado:"false", marca: 'Marca 2'},
            {nombre: 'Modelo 3', descripcion: 'Descripcion modelo 3', estado:"true", marca: 'Marca 3'},
            {nombre: 'Modelo 4', descripcion: 'Descripcion modelo 4', estado:"true", marca: 'Marca 2'},
            {nombre: 'Modelo 5', descripcion: 'Descripcion modelo 5', estado:"true", marca: 'Marca 2'},
            {nombre: 'Modelo 6', descripcion: 'Descripcion modelo 6', estado:"true", marca: 'Marca 3'},
            {nombre: 'Modelo 7', descripcion: 'Descripcion modelo 7', estado:"true", marca: 'Marca 2'},
            {nombre: 'Modelo 8', descripcion: 'Descripcion modelo 8', estado:"true", marca: 'Marca 2'},
            {nombre: 'Modelo 9', descripcion: 'Descripcion modelo 9', estado:"true", marca: 'Marca 3'},
            {nombre: 'Modelo 10', descripcion: 'Descripcion modelo 10', estado:"true", marca: 'Marca 2'},
            {nombre: 'Modelo 11', descripcion: 'Descripcion modelo 11', estado:"true", marca: 'Marca 2'},
            {nombre: 'Modelo 12', descripcion: 'Descripcion modelo 12', estado:"true", marca: 'Marca 3'},
            {nombre: 'Modelo 13', descripcion: 'Descripcion modelo 13', estado:"false", marca: 'Marca 2'},
            {nombre: 'Modelo 14', descripcion: 'Descripcion modelo 14', estado:"true", marca: 'Marca 2'},
            {nombre: 'Modelo 15', descripcion: 'Descripcion modelo 15', estado:"true", marca: 'Marca 3'},
            {nombre: 'Modelo 16', descripcion: 'Descripcion modelo 16', estado:"true", marca: 'Marca 2'},
            {nombre: 'Modelo 17', descripcion: 'Descripcion modelo 17', estado:"true", marca: 'Marca 4'}
        ];
        scope.marcas = [
            {id: '1', nombre: 'Marca 1', descripcion: 'Descripcion marca 1'},
            {id: '2', nombre: 'Marca 2', descripcion: 'Descripcion marca 2'},
            {id: '3', nombre: 'Marca 3', descripcion: 'Descripcion marca 3'},
            {id: '4', nombre: 'Marca 4', descripcion: 'Descripcion marca 4'},
            {id: '5', nombre: 'Marca 5', descripcion: 'Descripcion marca 5'}
                ];
        scope.getters={
                firstName: function (value) {
                    //this will sort by the length of the first name string
                    return value.firstName.length;
                }
            }
        scope.predicates = ['nombre', 'descripcion', 'estado', 'marca'];
        scope.selectedPredicate = scope.predicates[0];
        scope.itemsByPage = 10;
        scope.size = scope.rowCollection.length;
    }]);
