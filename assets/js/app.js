'use strict';

var todoApp = angular.module('todoApp', []);

todoApp.service('TodoService', function() {
  this.remaining = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  ];
 
  this.completed = [];
});

todoApp.controller('TodoController', ['$scope', '$log', 'TodoService', function($scope, $log, TodoService) {
  $scope.todos = TodoService;
  $scope.title = 'AngularJS | To-Do App';

  $scope.addTodo = function(todo) {

    if ($scope.newTodo) {
      $scope.todos.remaining.push($scope.newTodo);
      $scope.newTodo = '';
    }
  };

  $scope.completeTodo = function($index) {
    $scope.todos.completed.push($scope.todos.remaining[$index]);
    $scope.todos.remaining.splice($index, 1);
  };

  $scope.deleteTodo = function($index) {
    $scope.todos.completed.splice($index, 1);
  };

}]);
