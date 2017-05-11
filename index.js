var express = require('express');
var app = express();
var bodyParser = require('body-parser');//для входящих данных
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var mongoose = require('mongoose');
//var Book = require('./models/book.model');

var db = 'localhost/123';
mongoose.Promise = global.Promise;
mongoose.connect(db);

var index = require('./routes/index');
//var catalog = require('./routes/catalog');

app.use('/', index);
//app.use('/catalog', catalog);

app.listen(3004, function () {
  console.log('Example app listening on port 3004!');
});