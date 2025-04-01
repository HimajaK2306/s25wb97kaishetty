var express = require('express');
var router = express.Router();

/* GET quarries page. */
router.get('/', function(req, res, next) {
  res.render('quarries', { title: 'Search Results - Quarries' });
});

module.exports = router;
