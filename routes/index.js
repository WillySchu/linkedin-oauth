var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

router.get('/logout', (req, res, next) => {
  req.session = null;
  res.redirect('/');
})

module.exports = router;
