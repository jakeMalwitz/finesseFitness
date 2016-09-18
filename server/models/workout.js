var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Create schema
var workoutSchema = new Schema({
      workoutName: {type: String, required: false},
      activities: [{
        name: {type: String, required: false},
        type: {type: String, required: false},
        reps: {type: Number, required: false},
        sets: {type: Number, required: false},
        lbs: {type: Number, required: false},
        duration: {type: String, required: false}
      }],
      description: String
});

//Export model
var Workout = mongoose.model('Workout', workoutSchema);
module.exports = Workout;
