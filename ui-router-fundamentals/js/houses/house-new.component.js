(function() {
  'use strict'

  angular.module('app')
    .component('houseNew', {
      controller: function ($state, houseService) {
        const vm = this

        vm.$onInit = function () {
          vm.houses = houseService.houses
        }

        vm.addHouse = function () {
          houseService.addHouse(vm.house)

          // TODO: go to the appropriate URL here

          let newHouseId = vm.houses.length-1
          newHouseId = vm.houses[newHouseId].id
          $state.go('houseShow', { 'houseId': newHouseId })
        }
      },
      template: `
        <h1>New House</h1>

        <form ng-submit="$ctrl.addHouse()">
          <p>
            Name: <input ng-model="$ctrl.house.name">
          </p>
          <p>
            Address: <input ng-model="$ctrl.house.address">
          </p>
          <p>
            <button type="submit">Create House</button>
          </p>
        </form>

        <a ui-sref="houseList">Return Home</a>
      `
    })

}());
