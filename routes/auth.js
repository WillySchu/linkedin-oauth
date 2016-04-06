const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/linkedin', passport.authenticate('linkedin', { state: 'SOME STATE'  }));

router.get('/linkedin/callback', passport.authenticate('linkedin', {
  successRedirect: '/',
  failureRedirect: '/'
}));

module.exports = router;
