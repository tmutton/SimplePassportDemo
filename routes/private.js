var express = require('express');
var router = express.Router();

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated())
    return next();
  else
    res.redirect('/login');
};

router.get('/', ensureAuthenticated, function(req, res) {
  res.render('private', { user: req.user });
});

module.exports = router;
