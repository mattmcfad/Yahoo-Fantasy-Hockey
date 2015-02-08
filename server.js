"use strict"

var express = require("express"),
	bodyParser = require("body-parser"),
	util = require("gulp-util");
	
var	app = express();
var port = process.env.PORT || 8888;

app.engine('jade', require('jade').__express);
app.set('views', __dirname + '/public/layouts')

app.use(bodyParser.json());

app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/public/layouts"));

app.get('/', function(req, res) {
	res.render("index.jade", {dev: {name: "matt"}});
});


app.listen(port, function(){
	util.log(util.colors.white("node server started: "),
			util.colors.green("localhost:" + port));
});