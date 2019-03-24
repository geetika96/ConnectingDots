const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
});

router.get('/PlayerInfo',function(req,res){
  res.sendFile(path.join(__dirname+'/PlayerInfo.html'));
});

router.get('/Game',function(req,res){
  res.sendFile(path.join(__dirname+'/Game.html'));
});

router.get('/HighScore',function(req,res){
  res.sendFile(path.join(__dirname+'/HighScore.html'));
});


//add the router
app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');
