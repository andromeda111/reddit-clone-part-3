(function() {
  'use strict'

  angular.module('app', [])
    .component('cart', {
      controller: function () {
        const vm = this

        vm.$onInit = function () {
          vm.items = [{name: "some name", quantity: 4}]
        }

        vm.setItems = function () {
          vm.items.push(vm.item)
          delete vm.item
        }
        vm.addItem = function () {
          vm.setItems()
        }

        vm.deleteItem = function (e, item) {
          e.preventDefault()
          vm.items.splice(vm.items.indexOf(item), 1)
        }
      },

      template: `
          <form ng-submit="$ctrl.addItem()">
            <p>
              <label for="name">Name</label>
              <input ng-model="$ctrl.item.name" id="name">
            </p>
            <p>
              <label for="quantity">Quantity</label>
              <input ng-model="$ctrl.item.quantity" id="quantity">
            </p>
            <p>
              <button type="submit">Add Item</button>
            </p>
          </form>

          <div class="item" ng-repeat="item in $ctrl.items">
            {{item.name}} {{item.quantity}}
            <a href="#" ng-click="$ctrl.deleteItem($event, item)">Delete</a>
          </div>
      `
    })


}());
