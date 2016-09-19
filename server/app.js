var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var activities = require('./routes/activities');
var workouts = require('./routes/workouts');

//Middleware
app.use(express.static(path.join(__dirname, './public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Express Routes
app.use('/activities', activities);
app.use('/workouts', workouts);
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, './public/views/index.html'));
});

//Mongoose
var databaseUri = 'mongodb://localhost:27017/omicron';
// var databaseUri = 'mongodb://jake:jake123@ds033126.mlab.com:33126/heroku_032xqtsm';
mongoose.connect(databaseUri);

mongoose.connection.on('connected', function() {
  console.log('Mongoose connected to ', databaseUri);
});

mongoose.connection.on('error', function(err) {
  console.log("Mongoose failed", err);
});

//Start Server
app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), function() {
  console.log("Listening on port: ", app.get('port'));
});
