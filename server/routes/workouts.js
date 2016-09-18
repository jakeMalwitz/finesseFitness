var express = require('express');
var router = express.Router();
var Workout = require('../models/workout');

//Get Workouts
router.get('/', function (req, res) {
  Workout.find({}, function(err, workouts) {
    if(err) {
     res.sendStatus(500);
     return;
   }
   res.send(workouts)
  })
})

//Create Workout
router.post('/', function (req, res) {
  console.log('POST', req.body);
  var workout = req.body;
  console.log("Tester", Workout(workout));


  var workouts = Workout(req.body);

  console.log(workouts);
  workouts.save(function (err) {
    if(err) {
      console.log("WHAT THE..");
      res.sendStatus(500);
      return;
    }
    res.sendStatus(201);
  });
});

//Update Workout
router.put('/:id', function(req, res){
  var id = req.params.id;
  var workout = Workout(req.body);
  console.log("This might work", req.body);
  console.log("This might work", Workout(req.body));
  Workout.findByIdAndUpdate(id, workout, function(err, workout){
    if(err){
res.sendStatus(500);
return;
}
res.status(204).send(workout);
});
});

//Delete Workout
router.delete('/:id', function (req, res) {
  var id = req.params.id;
  Workout.findByIdAndRemove(id, function(err) {
    if(err) {
      res.sendStatus(500);
      return;
    }

    res.sendStatus(204);
  });
});

module.exports = router;
