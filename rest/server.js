var express = require ('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

//Mongo
mongoose.connect('mongodb://localhost/rest_test');

//Express
var app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//Routes
app.use('/api', require('./routes/api'));

//Listener
app.listen(3000);
