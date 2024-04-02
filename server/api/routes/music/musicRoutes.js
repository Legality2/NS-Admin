const express = require('express');
const router = express.Router();
const crypto = require('crypto');
const path = require('path');
const multer = require('multer');
const mongoose = require('mongoose');
const musicCtrl = require('../../controllers/music/musicCtrl');
const storage = multer.diskStorage({
    destination: '../../../music',
     filename: function (req, file, cb) {
       console.log(file);
      crypto.pseudoRandomBytes(16, function (err, raw) {
        if (err) return cb(err)
          cb(null, raw.toString('hex') + path.extname(file.originalname))
  
      });
    }
  });
  const upload = multer({storage});

//get all tracks
router.get('/music', function(req, res ,next){
    res.json({msg: 'this is a test'});
});
//upload single track
router.post('/music/upload', function(req, res, next){
    console.log(req.body);
});
//get user tracks
router.get('/music/user/:id');

//remove track
router.delete('/music/:id');
//edit track meta data
router.put('/music/:id');



module.exports = router;