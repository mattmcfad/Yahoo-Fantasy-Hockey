"use strict"

var express = require("express"),
	bodyParser = require("body-parser"),
	util = require("gulp-util");
	
var	app = express();

app.engine('jade', require('jade').__express);

var port = process.env.PORT || 8888;

app.use(bodyParser.json());


app.get('/', function(req, res) {
	res.render(__dirname + "/public/layouts/index.jade");
});

app.listen(port, function(){
	util.log(util.colors.green("node server "), util.colors.magenta("localhost:"+port));
})