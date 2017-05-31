(function() {
  'use strict'

angular.module('app')
  .component('reddit', {
    controller: controller,
    templateUrl: 'main.html'
  })

  controller.$inject = ['$http']
  function controller($http) {
    const vm = this
    vm.$onInit = function () {
      vm.posts = []
      $http.get('/api/posts').then(result => {
        vm.posts = result.data
      })
    }

    vm.createNewPost = function (e) {
      e.preventDefault()
      vm.newPost.vote_count = 0
      vm.newPost.comments = []
      $http.post('/api/posts', vm.newPost).then(result => {
        vm.posts.push(result.data);
      })
      delete vm.newPost
      vm.newPostForm = false
    }

    vm.addComment = function (post) {
      $http.post(`/api/posts/${post.id}/comments`, post.comment).then(result => {
      })
      post.comments.push(post.comment);
      delete post.comment
    }

    vm.voteUp = function(post) {
      $http.post(`/api/posts/${post.id}/votes`).then(result => {
      })
      post.vote_count++
    }

    vm.voteDown = function(post) {
      $http.delete(`/api/posts/${post.id}/votes`).then(result => {
      })
      post.vote_count--
    }
  }

})();
