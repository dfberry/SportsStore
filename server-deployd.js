/*******************************************************************
* 1. begin node service for static files: "node server.js"
* 2. begin node service for api calls: "/deployd/sportsstore/dpd -d"
* 
*******************************************************************/

/******************************************************/
// 3rd party libraries

// middleware
var connect = require('connect');

// http functionality
var http = require('http');

// serve cached static files 
var serverStatic = require('st');

// filesystem
var filesystem = require('fs');

/******************************************************/
// app-specific utils

// logger
var storeLogger = require('./utils/logger.js');
storeLogger.write("app-specific libraries loaded");

/******************************************************/
// app init

// set folder location to server files from
// at this point, just pass request through to file system
var staticServer = serverStatic({path: '', url: '/'});

// create middleware application
var app = connect();

// respond to all requests 
app.use(function(req, res){

  // capture request
  storeLogger.write(req);

  // process static requests
  var staticHandled = staticServer(req, res);
  
  // if static, return
  if (staticHandled)
    return;
  else{
    res.end('this is not a static file');
    storeLogger.write('not a static request');
  }

});

// create http server
var server = http.createServer(app);

// server listens on port 5000
server.listen(5000);

storeLogger.write("app ready");
