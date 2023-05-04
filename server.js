// Load Express
const express = require('express');
const path = require('path');

// require the students database
const studentDB = require('./data/student-db');
const studentDb = require('./data/student-db');

// Create our express app
const app = express();

// Configure the app (app.set)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


// Mount middleware(app.use)
// app.use('view engine', 'ejs');
// app.use('views', express.join(__dirname, 'views'));
// Mount routes

// Define a "root" route directly on app


app.get('/', function(req, res) {
  // Path must start with a leading slash
  res.redirect('/students');
});
app.get('/home', function(req, res) {
//   // Never begin the name of the template
//   // with a forward slash
  res.render('home');
});

app.get('/students', function(req, res) {
  const students = studentDb.getAll();
  res.render('student/index', { students });
});

app.listen(3000, function() {
  console.log('listening on port 3000');
});