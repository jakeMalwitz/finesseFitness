myApp.controller("updateController", ["$scope", "$http", function($scope, $http) {

$scope.all = [];
$scope.updated = {};
getWorkouts();

$scope.deleteWorkout = function(id) {
  $http.delete('/workouts/' + id).then(function(response) {
   getWorkouts();
    });
  };

  $scope.updateWorkout = function(workout) {
    console.log(workout);
    var id = workout._id
    console.log(id);
    $http.put('/workouts/' + id, workout).then(function(response) {
      console.log(response);
      getWorkouts();
    });
  };

function getWorkouts() {
  $http.get('/workouts').then(function(response) {
    console.log(response.data);
    $scope.all = response.data;
  });
    console.log($scope.all);
};
}]);
