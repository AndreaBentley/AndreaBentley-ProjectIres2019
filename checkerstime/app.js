const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();


router.get('/index.html',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
});
router.get('/index2.html',function(req,res){
  res.sendFile(path.join(__dirname+'/index2.html'));
});
router.get('/index-2.html',function(req,res){
  res.sendFile(path.join(__dirname+'/index-2.html'));
});

router.get('/index.js',function(req,res){
  res.sendFile(path.join(__dirname+'/index.js'));
});

router.get('/chinese_checkers.png',function(req,res){
  res.sendFile(path.join(__dirname+'/images/chinese_checkers.png'));
});

router.get('/blue_pawn.png',function(req,res){
    res.sendFile(path.join(__dirname+'/images/pawns/blue pawn.png'));
});
router.get('/red_pawn.png',function(req,res){
    res.sendFile(path.join(__dirname+'/images/pawns/red pawn.png'));
});
router.get('/orange_pawn.png',function(req,res){
    res.sendFile(path.join(__dirname+'/images/pawns/orange pawn.png'));
});
router.get('/yellow_pawn.png',function(req,res){
    res.sendFile(path.join(__dirname+'/images/pawns/yellow pawn.png'));
});
router.get('/green_pawn.png',function(req,res){
    res.sendFile(path.join(__dirname+'/images/pawns/green pawn.png'));
});
router.get('/pink_pawn.png',function(req,res){
    res.sendFile(path.join(__dirname+'/images/pawns/pink pawn.png'));
});
router.get('/no_pawn.png',function(req,res){
    res.sendFile(path.join(__dirname+'/images/pawns/no pawn.png'));
});

//add the router
app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');