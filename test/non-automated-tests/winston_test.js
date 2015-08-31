 // testing winston
 // https://github.com/winstonjs/winston

 var winston = require('winston');

 winston.log('info', 'Hello distributed log files!');
 winston.add(winston.transports.DailyRotateFile, { filename: './log/winston_test.log' });
 
 winston.log('info', 'Log to log file');
 winston.handleExceptions(new winston.transports.DailyRotateFile({ filename: './log/winston_exceptions_test.log' }));

var myexception = nonexistant();