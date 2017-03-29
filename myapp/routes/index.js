var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/login', function(req, res, next) {
  res.render('index');
});

router.post('/myAccount', function(req,res, next){
  var username = req.body.username;
  var password = req.body.password;
  username = username.trim();

  if(username.length ==0 || password.length == 0){
    res.redirect('/login');
  }

  else{
   // req.session.username = username;
    res.render('myAccount');
  }
});

router.get('/newPlaylist', function(req,res,next){
  res.render('newPlaylist');
});

router.post('/addPlaylist', function(req,res,next){
  res.render('myAccount');
});



router.get('/signUp', function(req, res, next) {
  res.render('signUp');
});

router.post('/register',function(req,res,next){
  res.render('index')
});

module.exports = router;
