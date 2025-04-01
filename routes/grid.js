var express = require('express');
var router = express.Router();

/* GET grid page. */
router.get('/', function(req, res, next) {
  res.render('grid', { title: "Grid Display" });
});

module.exports = router;
