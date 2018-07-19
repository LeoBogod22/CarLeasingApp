var express = require('express');
var router = express.Router();
router.get('/', function(req, res){
  res.render('src/app.js')
});
module.exports = router;