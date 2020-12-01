var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post('/', async (req, res) => {
  createUser();
  req.session.user = user;
  req.session.save((err) => {
    return res.redirect('/');
  });
});

module.exports = router;
