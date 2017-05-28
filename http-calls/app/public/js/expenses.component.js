(function() {
  'use strict'

  angular.module('app')
    .component('expenses', {
      controller: controller,
      templateUrl: 'forms.html'
    })

  controller.$inject = ['$http']
  function controller($http) {
    const vm = this

    vm.$onInit = function () {
      $http.get('/api/expenses').then(result => {
        vm.expenseList = result.data
        vm.editToggle = false
      })
    }

    vm.addExpense = function () {
      console.log(vm.expense); // Logging because certain numbers come in undefined, can't figure out why after 1hr research & experimentation...
      $http.post('/api/expenses', vm.expense).then(result => {
        vm.expenseList.push(result.data);
      })
      delete vm.expense
    }

    vm.showEdit = function (data) {
      vm.selectedData = {id: data.id, category: data.category, amount: data.amount}
      vm.selectedData.amount = Number(vm.selectedData.amount)
      if (vm.editToggle) {
        vm.editToggle = false
      } else {
        vm.editToggle = true
      }
    }

    vm.editExpense = function (data) {
      vm.editData = data

      if (vm.editToggle) {
        vm.editToggle = false
      } else {
        vm.editToggle = true
      }

      $http.patch(`/api/expenses/${vm.editData.id}`, vm.editData).then(() => {
        $http.get('/api/expenses').then(result => {
          vm.expenseList = result.data
        })
      })
    }

    vm.deleteExpense = function (data) {
      vm.data = data
      $http.delete(`/api/expenses/${vm.data.id}`).then(() => {
        $http.get('/api/expenses').then(result => {
          vm.expenseList = result.data
        })
      })
    }
  }


}());
