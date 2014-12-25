// keys.js in / dir contains yahoo consumerKey and consumerSecret
var key = require("./keys"),
	passport = require("passport"),
	yahooAuth = require("passport-yahoo-oauth").Strategy;

var auth = {};


auth.