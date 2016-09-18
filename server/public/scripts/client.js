var myApp = angular.module('myApp', ['ngRoute', 'ui.calendar', 'xeditable']);

myApp.config(["$routeProvider", function($routeProvider){
  $routeProvider.
      when("/home", {
        templateUrl: "/views/home.html",
        controller: "homeController"
      }).
      when("/create", {
        templateUrl: "/views/create.html",
        controller: "createController"
      }).
      when("/update", {
        templateUrl: "/views/update.html",
        controller: "updateController"
      }).
      otherwise({
        redirectTo: "/home"
      });
}]);
