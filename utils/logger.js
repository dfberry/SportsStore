// log using different transports or my own logging
//var winston = require('winston');
//var fileSystem = require('fs');
//var fileStreamRotator = require('file-stream-rotator');

var logDirectory;

//winston.emitErrs = true;

// create a rotating write stream 
//var accessLogStream = fileStreamRotator.getStream({
//  filename: logDirectory + '/%DATE%.log',
//  frequency: 'daily',
//  verbose: false
//});

var init = function(dir){
    //logDirectory = dir; 
    //console.log('logDirectory' + logDirectory);
    // ensure log directory exists 
    //fileSystem.existsSync(dir) || fileSystem.mkdirSync(dir);
    
    //winston.log('logger.js::init');
    
    console.log('hello module');
};

/*
var write = function(message, encoding){
        logger.info(message);
};
*/
/*
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
*/

module.exports = init;
//module.exports = logger;
//module.exports = write;
/*
module.exports.stream = {
    write: function(message, encoding){
        logger.info(message);
    }
};
*/
