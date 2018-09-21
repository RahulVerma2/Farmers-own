var express = require('express');
var router = require('./routeURL.js');
var bodyParser = require('body-parser');




/* Used to create the server.*/
var app = express();

/* To configure body-parser */
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   next();
  });
/* Used to create the api.*/
app.use('/',router);


/* Define the port number.*/
app.listen(3000);