var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Create schema
var activitySchema = new Schema({
  name: {type: String, required: true},
  type: String
});

//Export model
var Activity = mongoose.model('Activity', activitySchema);
module.exports = Activity;
