var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'a/A Express Skeleton Home' });
});

router.get('/silly-route', (req, res) => {
  res.send('This is silly')
})

module.exports = router;
