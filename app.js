'use strict';

angular.module('app', [])

  .component('newPost', {

    controller: function () {
      const vm = this

      vm.$onInit = function () {
        vm.posts = []
      }

      vm.createPost = function () {
        vm.posts.push(vm.post);
        delete vm.post;
      }
    },
    template: `
    <form novalidate name="new-post-form" ng-submit="$ctrl.createPost()">
      <div>
        <label for="title">Title</label>
        <input id="title" name="title" class="form-control" ng-model="$ctrl.post.title" required>
      </div>
      <div>
        <label for="body">Body</label>
        <textarea id="body" name="body" class="form-control" ng-model="$ctrl.post.body" required></textarea>
      </div>
      <div>
        <label for="author">Author</label>
        <input id="author" name="author" class="form-control" ng-model="$ctrl.post.author" required>
      </div>
      <div>
        <label for="imageurl">Image URL</label>
        <input id="imageurl" name="imageurl" class="form-control" ng-model="$ctrl.post.imageurl" required>
      </div>
      <div class="form-group">
        <button type="submit" class="btn btn-primary" value="Create Post" required>
          Create Post
        </button>
      </div>
    </form>
    `
  })
