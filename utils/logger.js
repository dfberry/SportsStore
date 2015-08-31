// log using different transports or my own logging
var winston = require('winston');
var logger = new winston.Logger();

// from github winstonjs readme
// the logger also emits an 'error' event which you should 
// handle or suppress if you don't want unhandled exceptions
//winston.on('error', function (err) { /* Do Something */ });
logger.emitErrs = false;

// informational log
logger.add(winston.transports.DailyRotateFile, { level: 'info', filename: './log/winston.log' });

// exception log
logger.handleExceptions(new winston.transports.DailyRotateFile({ filename: './log/winston_exceptions.log',handleExceptions: true }));

// internal functions
var write = function(message,encoding){
    logger.log('info',message);
}

// exported functions
module.exports = {
    write: write
};

