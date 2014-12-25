"use strict"

var express = require("express"),
	bodyParser = require("body-parser"),
	util = require("gulp-util");

var port = process.env.PORT || 8888;

var app = express();
app.use(bodyParser.json());


app.get('/', function(req, res) {
	res.sendFile(__dirname + "public/layouts/index.html");
});

app.listen(port, function(){
	util.log(util.colors.green("node server "), util.colors.magenta("localhost:"+port));
})