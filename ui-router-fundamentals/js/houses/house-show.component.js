(function() {
  'use strict'

  angular.module('app')
    .component('houseShow', {
      controller: function (houseService, $stateParams) {
        const vm = this

        vm.$onInit = function () {
          // TODO: figure out how to pull the house id from the URL
          const houseId = $stateParams.houseId;
          vm.house = houseService.findById(houseId)
        }

      },
      template: `
        <h1>{{$ctrl.house.name}}</h1>

        <p>{{$ctrl.house.address}}</p>

        <!-- TODO: add link here -->
        <a ui-sref="houseList">Return Home</a>
      `
    })

}());
