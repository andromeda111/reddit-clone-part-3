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
      })
    }

    vm.addExpense = function () {
      vm.expense.amount = vm.expense.amount.toFixed(2)
      var newData = {category: vm.expense.category, amount: vm.expense.amount}
      $http.post('/api/expenses', newData).then(result => {
        vm.expenseList.push(result.data);
      })
      delete vm.expense
    }
  }

}());
