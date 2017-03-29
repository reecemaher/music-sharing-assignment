var express = require('express');
var router = express.Router();


router.get('/newPlaylist', function(req, res, next) {
  res.render('newPlaylist');
});

router.post('/addPlaylist', function(req,res,next){
  res.redirect('/index/myAccount');
})

module.exports = router;
