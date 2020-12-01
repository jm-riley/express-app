var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post('/', async (req, res) => {
  createUser();
  const { username, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  await User.create({ username, email, hashedPassword });
  req.session.user = user;
  req.session.save((err) => {
    return res.redirect('/');
  });
});

module.exports = router;
