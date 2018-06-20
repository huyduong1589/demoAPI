#!/usr/bin/env node
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = 7777;
app.get('/', function(req, res){
    res.json({message: "Welcome!"});
});
app.get('/hello', function(req, res){
    console.log("GET A REQUEST!");
    res.json({message: "HELLO!!!!!"});
});

app.post('/add', function(req, res){
    console.log('Recieve a request!');
    console.log("NUMBER A: " + req.body.number_1);
    console.log("NUMBER B: " + req.body.number_2);
    var result = req.body.number_1 + req.body.number_2;
    res.json({result: result});
});

app.listen(port);
console.log("Server is running on " + port);
