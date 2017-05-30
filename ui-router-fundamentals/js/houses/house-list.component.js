(function() {
  'use strict'

  angular.module('app')
    .component('houseList', {
      controller: function (houseService) {
        const vm = this

        vm.$onInit = function () {
          vm.houses = houseService.houses
        }
      },
      template: `
        <h1>Houses</h1>

        <ul>
          <li ng-repeat="house in $ctrl.houses">
            <!-- TODO: add link here -->
            <a ng-model="house" ui-sref="houseShow({ houseId: house.id })">{{house.name}}</a> | {{house.address}}
          </li>
        </ul>

        <!-- TODO: add link here -->
        <a ui-sref="houseNew">Add New House</a>
      `
    })

})();
