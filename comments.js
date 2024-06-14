// Create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// Use middleware to parse json data
app.use(bodyParser.json());

// Define a variable to store comments
var comments = [];

// Define a route for getting comments
app.get('/comments', function(req, res) {
  res.json(comments);
});

// Define a route for posting comments
app.post('/comments', function(req, res) {
  var comment = req.body.comment;
  comments.push(comment);
  res.json(comment);
});

// Start the server
app.listen(3000, function() {
  console.log('Server is running on http://localhost:3000');
});