var express = require('express');
var router = express.Router();

/* GET latlong. */
router.get('/', function(req, res, next) {
  res.send('respond with a latlong resource');
});

module.exports = router;