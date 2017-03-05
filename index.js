var express = require('express');
var app = express();

var mongoose = require('mongoose');
var Book = require('./models/book.model');
var db = 'localhost/books';
mongoose.connect(db);

var index = require('./routes/index');
var catalog = require('./routes/catalog'); 

app.use('/', index);
app.use('/catalog', catalog);

app.listen(3002, function () {
  console.log('Example app listening on port 3002!');
});