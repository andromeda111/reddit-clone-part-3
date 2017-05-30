console.log('getting app.js angular');
angular.module('app', [])
  .component('reddit', {
    controller: function () {
      const vm = this

      vm.$onInit = function () {
        vm.posts = []
      }

      vm.createNewPost = function (e) {
        e.preventDefault()
        vm.newPost.posted = new Date()
        vm.newPost.votes = 0
        vm.newPost.comments = []
        vm.posts.push(vm.newPost)
        delete vm.newPost
        vm.newPostForm = false
      }

      vm.addComment = function (post) {
        let index = vm.posts.indexOf(post)
        vm.posts[index].comments.push(post.comment);
        delete post.comment
      }

      vm.voteUp = function(post) {
        let index = vm.posts.indexOf(post)
        vm.posts[index].votes++
      }

      vm.voteDown = function(post) {
        let index = vm.posts.indexOf(post)
        if (vm.posts[index].votes > 0) {
          vm.posts[index].votes--
        }
      }
    },

    templateUrl: 'main.html'
  })
