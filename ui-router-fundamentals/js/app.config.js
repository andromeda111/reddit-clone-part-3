(function() {
  'use strict';

  angular.module('app').config(config)

  // TODO: figure out how to configure the app correctly

  config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider']

  function config($stateProvider, $urlRouterProvider, $locationProvider){

    $locationProvider.html5Mode(true)

    $stateProvider
      .state({
        name: 'houseList',
        url: '/',
        component: 'houseList',
      })
      .state({
        name: 'houseNew',
        url: '/houses/new',
        component: 'houseNew',
      })
      .state({
        name: 'houseShow',
        url: '/houses/{houseId}',
        component: 'houseShow',
      })
  }

}());
