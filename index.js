var express = require('express');
var app = express();

//var index = require('./routes/index');
var catalog = require('./routes/catalog'); 

//app.use('/', index);
app.use('/catalog', catalog);

app.listen(3002, function () {
  console.log('Example app listening on port 3002!');
});