/*******************************************************************
* 1. begin node service for static files: "node server.js"
* 2. begin node service for api calls: "/deployd/sportsstore/dpd -d"
* 
*******************************************************************/

// middleware
var connect = require('connect');

// http functionality
var http = require('http');

// serve cached static files 
var serverStatic = require('st');

// logger
var logger = require('./utils/logger.js');

//filesystem
var filesystem = require('fs');

//log file for each day
//var fileStreamRotator = require('file-stream-rotator');

/******************************************************/

// set folder location to server files from
// at this point, just pass request through to file system
var staticServer = serverStatic({path: '', url: '/'});

var logDirectory = __dirname + '/log';

// ensure log directory exists 
filesystem.existsSync(logDirectory) || filesystem.mkdirSync(logDirectory);

// test logger
logger.debug("Overriding 'Express' logger");

// create a rotating write stream 
//var accessLogStream = fileStreamRotator.getStream({
//  filename: logDirectory + '/access-%DATE%.log',
//  frequency: 'daily',
//  verbose: false
//});


// create middleware application
var app = connect();

// create logger stream
//var accessLogStream = filesystem.createWriteStream(__dirname + '/access.log', {flags: 'a'});

// add logger to app
//app.use(logger('common'), {stream: accessLogStream});

//app.use(logger('dev'));

app.use(require('morgan')({ "stream": logger.stream }));

// respond to all requests 
app.use(function(req, res){

  // process static requests
  var staticHandled = staticServer(req, res);

  // if static, return
  if (staticHandled)
    return;
  else
    res.end('this is not a static file');

});

// create http server
var server = http.createServer(app);

// server listens on port 5000
server.listen(5000);
