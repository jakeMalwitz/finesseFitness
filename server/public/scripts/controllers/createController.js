myApp.controller("createController", ["$scope", "$http", function($scope, $http) {


   $scope.activity = {};
   $scope.activities = [];
   $scope.workoutActivities = [];
   $scope.fullWorkout = {};
   $scope.savedActivity = {};

   getActivities();

//Gets previously created activities
function getActivities() {
  $http.get('/activities')
  .then(function(response) {
    $scope.activities = response.data;
    console.log("Activities array", $scope.activities);
  });
};

//Adds a new activity into the activities database
   $scope.addNewActivity = function() {
      var data = $scope.activity;
      $http.post('/activities', data).then(function(response) {
      if(response.status == 201) {
        console.log("SUCCESS");
        getActivities();
      } else {
        console.log("Failure", response.data);
      }
    });
 };

//Adds activity to activities array
  $scope.addActivity = function(activity) {
    console.log(activity);
    $scope.activity.reps = $scope.reps;
    $scope.activity.sets = $scope.sets;
    $scope.activity.weight = $scope.weight;
    $scope.activity.duration = $scope.duration;
    $scope.workoutActivities.push(activity);
  }

//Removes activity from activities array
  $scope.removeActivity = function(id) {
     for (var i = 0; i < $scope.workoutActivities.length; i++){
     if($scope.workoutActivities[i]._id == id) {
     $scope.workoutActivities.splice(i, 1);
     console.log($scope.workoutActivities);
     }
   };
 };


//Saves workout and stores it into the database
  $scope.saveWorkout = function() {
    $scope.fullWorkout.workoutName = $scope.workoutName;
    $scope.fullWorkout.activities = $scope.workoutActivities;
    /*
    $scope.workoutActivities.forEach(function(element, index, array) {
      
      $scope.fullWorkout.activity = element.name;
      $scope.
    });
    */
    $scope.fullWorkout.description = $scope.description;
    console.log($scope.fullWorkout);
    var data = $scope.fullWorkout;
    $http.post('/workouts', data).then(function(response) {
      if (response.status == 201) {
            console.log('SUCCESS');
            console.log(response.data);
        } else {
            console.log('FAILURE', response.data);
        }
    });
  };

}]);
