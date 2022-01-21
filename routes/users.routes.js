var express = require('express');
var router = express.Router();
const usercontroller1=require('../controller/users.controller')
var router=express.Router();
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/',usercontroller1.displayallemp)

module.exports = router;
