'use strict';

/**
 * @ngdoc overview
 * @name meroarbolwebApp
 * @description
 * # meroarbolwebApp
 *
 * Main module of the application.
 */
angular
  .module('meroarbolwebApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'smart-table'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/remitos.html',
        controller: 'RemitosCtrl',
        controllerAs: 'remitos'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/remitos', {
        templateUrl: 'views/remitos.html',
        controller: 'RemitosCtrl',
        controllerAs: 'remitos'
      })
      .when('/marcas', {
        templateUrl: 'views/marcas.html',
        controller: 'MarcasCtrl',
        controllerAs: 'marcas'
      })
      .when('/modelos', {
        templateUrl: 'views/modelos.html',
        controller: 'ModelosCtrl',
        controllerAs: 'modelos'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
