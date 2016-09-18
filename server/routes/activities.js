var express = require('express');
var router = express.Router();
var Activity = require('../models/activity');

//Get Activities
router.get('/', function (req, res) {
  Activity.find({}, function(err, activities) {
    if(err) {
      res.sendStatus(500);
      return;
    }
    res.send(activities);
  })
})

//Create New Activity
router.post('/', function (req, res) {
  console.log('POST', req.body);
  var activity = Activity(req.body);
  activity.save(function (err) {
    if(err) {
      res.sendStatus(500);
      return;
    }
    res.sendStatus(201);
  });
});

/*
//Delete Activity
router.delete('/:id', function (req, res) {
var id = req.params.id;
Activity.findByIdAndRemove
})
*/
module.exports = router;
