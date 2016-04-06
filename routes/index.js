var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  console.log(req.user);
  res.render('index', { title: 'Express' });
});

module.exports = router;
