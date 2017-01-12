'use strict';

angular.module('app', [])

  .component('newPost', {

    controller: function () {
      const vm = this
      console.log('controller', vm);

      vm.$onInit = function () {
        vm.posts = []
        console.log('init');
      }

      vm.createPost = function () {
        vm.posts.push(vm.post);
        console.log('createpost', vm.posts);
        delete vm.post;
      }
    },
    template: `
    <form novalidate name="newPostForm" ng-submit="$ctrl.createPost()">
      <div ng-class="{ 'has-error' : newPostForm.title.$touched && newPostForm.title.$invalid }">
        <label for="title">Title</label>
        <input id="title" name="title" class="form-control" ng-model="$ctrl.post.title" required>
        <p ng-show="newPostForm.title.$error.required">Required</p>

      </div>
      <div ng-class="{ 'has-error' : newPostForm.body.$touched && newPostForm.body.$invalid }">
        <label for="body">Body</label>
        <textarea id="body" name="body" class="form-control" ng-model="$ctrl.post.body" required></textarea>
        <p ng-show="newPostForm.body.$error.required">Required</p>
      </div>
      <div ng-class="{ 'has-error' : newPostForm.author.$touched && newPostForm.author.$invalid }">
        <label for="author">Author</label>
        <input id="author" name="author" class="form-control" ng-model="$ctrl.post.author" required>
        <p ng-show="newPostForm.author.$error.required">Required</p>
      </div>
      <div ng-class="{ 'has-error' : newPostForm.imageurl.$touched && newPostForm.imageurl.$invalid }">
        <label for="imageurl">Image URL</label>
        <input id="imageurl" name="imageurl" class="form-control" ng-model="$ctrl.post.imageurl" required>
        <p ng-show="newPostForm.imageurl.$error.required">Required</p>
      </div>
      <div class="form-group">
        <button type="submit" class="btn btn-primary" value="Create Post" ng-disabled="newPostForm.$invalid">
          Create Post
        </button>
      </div>
    </form>
    `
  })
