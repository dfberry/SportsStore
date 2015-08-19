// DFB: this returns the static files via http
// all logic is through Deployd apis on a different port

//https://github.com/senchalabs/connect
var connect = require('connect');

//https://www.npmjs.com/package/serve-static
var serveStatic = require('serve-static')


// constants
var FOLDER_STATIC_FILES = 'static';

// Serve up public/ftp folder 
var serve = serveStatic(FOLDER_STATIC_FILES);


connect.createServer(
	
	connect.static("../static")
	
).listen(5000);