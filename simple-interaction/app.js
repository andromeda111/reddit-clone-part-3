(function() {
  'use strict'
  console.log('ready');

  angular.module("app", [])
        .component('name', {
          controller: function () {
            const vm = this

            vm.$onInit = function () {
              vm.firstName = ''
              vm.nickname = ''
              vm.lastName = ''
              vm.fullName = ''
            }
            vm.submit = function () {
              if (vm.nickname !== '') {
                vm.nickname = `"${vm.nickname}"`
                vm.fullName = vm.firstName + ' ' + vm.nickname + ' ' + vm.lastName
              } else {
                vm.fullName = vm.firstName + ' ' + vm.lastName 
              }
            }

          },

          template: `


            <p><input ng-model="$ctrl.firstName" placeholder="First Name"/></p>
            <p><input ng-model="$ctrl.nickname" placeholder="Nickname"/></p>
            <p><input ng-model="$ctrl.lastName" placeholder="Last Name"/></p>
            <p><button ng-click="$ctrl.submit()">Submit</button></p>


            <p>{{$ctrl.fullName}}</p>

          `
        })

}());
