myApp.controller("homeController", ["$scope", "$http", "$compile", "uiCalendarConfig", function($scope, $http, $compile, uiCalendarConfig) {


$scope.eventSources = [];
$scope.events = [];
$scope.all = [];
$scope.calendarEvent = {};

getWorkouts();

    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();

function getWorkouts() {
  $http.get('/workouts').then(function(response) {
    console.log(response.data);
    $scope.all = response.data;
    console.log($scope.all);
  });
};

$scope.addEvent = function() {
  console.log($scope.calendarEvent);
  $scope.events.push({
    title: $scope.calendarEvent.workoutName,
    start: new Date(y, m, d),
    end: new Date(y, m, d),
    description: $scope.calendarEvent.description,
    activities: $scope.calendarEvent,
    stick: true,
    className: ['workouts']
  });
  console.log("Events array", $scope.events);
  console.log("Calendar Event Object", $scope.calendarEvent);
  console.log("Full Workout Object", $scope.calendarEvent.fullWorkout);
};

$scope.alertOnEventClick = function(date, jsEvent, view){
        $scope.calendarEvent = date.activities;
        //values = element;
        //values.activities = element.name;

        console.log($scope.calendarEvent);

    $scope.alertMessage = (date.title + ' was clicked ');
    };

$scope.eventRender = function( event, element, view ) {
    element.attr({'tooltip': event.title,
                  'tooltip-append-to-body': true});
    $compile(element)($scope);
};

//Save on view change??
$scope.changeView = function(view,calendar) {
      uiCalendarConfig.calendars[calendar].fullCalendar('changeView',view);
    };
    /* Change View */
    $scope.renderCalender = function(calendar) {
      if(uiCalendarConfig.calendars[calendar]){
        uiCalendarConfig.calendars[calendar].fullCalendar('render');
      }
    };

    $scope.eventsF = function (start, end, timezone, callback) {
       var s = new Date(start).getTime() / 1000;
       var e = new Date(end).getTime() / 1000;
       var m = new Date(start).getMonth();
       var events = [{title: 'Feed Me ' + m,start: s + (50000),end: s + (100000),allDay: false, className: ['customFeed']}];
       callback(events);
     };

//Configure Calendar
$scope.uiConfig = {
      calendar: {
          height: 400,
          editable: true,
          displayEventTime: true,
          header: {
              left: 'today',
              center: 'title',
              right:'prev,next'
          },
          eventClick: $scope.alertOnEventClick,
          eventDrop: $scope.alertOnDrop,
          eventResize: $scope.alertOnResize,
          eventRender: $scope.eventRender,
      }
  };

$scope.eventSources = [$scope.events, $scope.eventsF];

}]);
