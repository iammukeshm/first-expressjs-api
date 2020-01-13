var express = require('express');
var app = express();

app.get('/', function(req, res){
   res.send("Hello world! First End Point works!");
});

app.listen(7878);