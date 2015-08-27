// log using different transports or my own logging
var winston = require('winston');
var fileSystem = require('fs');
var fileStreamRotator = require('file-stream-rotator');

// always the log dir
var DEFAULTLOGDIRECTORY = process.cwd() + '/log';

// custom log dir
var logDirectory;

winston.emitErrs = true;

// create a rotating write stream 
//var accessLogStream = fileStreamRotator.getStream({
//  filename: logDirectory + '/%DATE%.log',
//  frequency: 'daily',
//  verbose: false
//});


var logger = new winston.Logger({
    transports: [
        new winston.transports.DailyRotateFile({
            level: 'debug',
            filename: logDirectory + '/log',
            datePattern: '.yyyy-MM-ddTHH',
            handleExceptions: true,
            json: true,
            maxsize: 5242880, //5MB
            maxFiles: 5,
            colorize: false
        }),
        new winston.transports.Console({
            level: 'debug',
            handleExceptions: true,
            json: false,
            colorize: true
        })
    ],
    exitOnError: false
});



var write =  function(message, encoding){
        logger.info(message);
};

// init logger
var init = function(dir){
    
    console.log('logDirectory=' + logDirectory);

    // if another directory is passed in for the log file, 
    // use it, otherwise use default log file path    
    if (dirExists(dir))
        logDirectory = dir; 
    else
        logDirectory = DEFAULTLOGDIRECTORY;
    
    return logDirectory;
};

// ensure log directory exists 
var dirExists = function(dir){
    
    return fileSystem.existsSync(dir) || fileSystem.mkdirSync(dir);  
};

module.exports = {
    stream: write,
    init: init,
    dirExists: dirExists
};

