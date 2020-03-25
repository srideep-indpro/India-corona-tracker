'use strict';

var express = require('express');
const path = require('path');
var app = express();

// Setup view engine
//app.set("view engine", "jade");
app.use(express.static(__dirname + '/build'));

app.get('/*', function(req, res) {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

var server = app.listen(process.env.PORT || 8080, '0.0.0.0', function() {
	var address = server.address().address;
	var port = server.address().port;
	console.log('App listening at http://%s:%s', address, port);
	console.log('Press Ctrl+C to quit.');
});