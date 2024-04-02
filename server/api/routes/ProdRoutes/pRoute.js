const express = require('express');
const router = express.Router();
const crypto = require('crypto');
const path = require('path');
const multer = require('multer');
const mongoose = require('mongoose');
const productCtrl = require('../../controllers/product/productCtrl');

const storage = multer.diskStorage({
    destination: '../../../prod',
     filename: function (req, file, cb) {
       console.log(file);
      crypto.pseudoRandomBytes(16, function (err, raw) {
        if (err) return cb(err)
          cb(null, raw.toString('hex') + path.extname(file.originalname))
  
      });
    }
  });
  const upload = multer({storage});
//get all products
    router.get('/products', function(req, res, next){
      res.json({test: 'msg is a test'});
    });

//post
    router.post('/products', upload.single('upl'), productCtrl.addProduct);


    router.get('/products/music', function(req, res ,next){
      res.json({test: 'msg is a test'});
      next()
    });
//put

//delete
router.delete('/products/:id', productCtrl.deleteProduct);


module.exports = router;