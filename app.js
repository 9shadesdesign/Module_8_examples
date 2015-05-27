var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Book = require('./models/bookModel');
var bookRouter = require('./routes/bookRoutes')(Book);

var db = mongoose.connect('mongodb://localhost/bookAPI');
var port = process.env.PORT || 3000;

var app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/books', bookRouter);

app.listen(port, function () {
	console.log('listening on port ', port);
});