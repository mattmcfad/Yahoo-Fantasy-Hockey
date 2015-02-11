// keys.js in / dir contains yahoo consumerKey and consumerSecret
var key = require("./keys"),
	passport = require("passport"),
	YahooAuth = require("passport-yahoo-oauth").Strategy;

var auth = {};

passport.use(
	new YahooAuth({
		consumerKey: key.consumerKey,
		consumerSecret: key.consumerSecret,
		callbackURL: "http://127.0.0.1:3000/auth/yahoo/callback"
	},
	function(token, tokenSecret, profile, done) {
		User.findOrCreate(
			{
				yahooId: profile.id
			},
			function (err, user) {
				return done(err, user);
			}
		);
	}
));
