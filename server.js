/*******************************************************************
* 1. begin node service for static files: "node server.js"
* 2. begin node service for api calls: "/deployd/sportsstore/dpd -d"
* 
*******************************************************************/

// middleware
var connect = require('connect');

// http functionality
var http = require('http');

// server static files
var serverStatic = require('st');


/******************************************************/

// set folder location to server files from
var static = serverStatic({path: '', url: '/'});

// create middleware application
var app = connect();

// respond to all requests 
app.use(function(req, res){

  // process static requests
  var staticHandled = static(req, res);

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
