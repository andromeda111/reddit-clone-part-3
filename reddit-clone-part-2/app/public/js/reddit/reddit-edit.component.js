(function() {
  'use strict'

angular.module('app')
  .component('edit', {
    controller: controller,
    templateUrl: 'edit.html'
  })

  controller.$inject = ['$http', '$stateParams', '$state']
  function controller($http, $stateParams, $state) {
    const vm = this

    vm.$onInit = function () {
      let postId = $stateParams.postId

      $http.get(`/api/posts/${postId}`).then(result => {
        vm.postShow = result.data
      })
    }

    vm.editPostForm = function (e) {
      e.preventDefault()
      $http.patch(`/api/posts/${vm.postShow.id}`, vm.postShow).then(result => {
        delete vm.postShow
        $state.go('home')
      })
    }

    vm.deletePost = function () {
      $http.delete(`/api/posts/${vm.postShow.id}`).then(() => {
        $state.go('home')
      })
    }
  }

})();
