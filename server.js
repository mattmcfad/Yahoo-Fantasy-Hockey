"use strict"

var express = require("express"),
	bodyParser = require("body-parser");

var util = require("gulp-util");

var app = express();


app.use(bodyParser.json());



app.get('/', function(req, res) {
	res.sendFile(__dirname + "/layouts/index.html");
});

var port = 8181;

app.listen(port, function(){
	util.log(util.colors.green("node server "), util.colors.magenta("localhost:"+port));
	//console.log("node server", port);
})