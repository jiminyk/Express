var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET User Details */
router.get('/:userId', (req, res) => {
  res.send(req.params);
});

module.exports = router;
