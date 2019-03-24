const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});

router.get('/dots',function(req,res){
  res.sendFile(path.join(__dirname+'/Game.html'));
});


router.get('/players',function(req,res){
  res.sendFile(path.join(__dirname+'/PlayerInfo.html'));

router.get('/scores',function(req,res){
  res.sendFile(path.join(__dirname+'/HighScore.html'));
});


router.get('/results',function(req,res){
  res.sendFile(path.join(__dirname+'/Results.html'));
});
//add the router
app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');