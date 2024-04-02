const mongoose = require("mongoose");
const productModal = require('../../models/products/product');
const productCtrl = {};

productCtrl.addProduct = async (req, res, next) => {
   
    console.log(req.body);
    try {
        var newProd = new productModal({})
            newProd.name = req.body.name;
            newProd.price = req.body.price;
            newProd.specs.img = req.file;
            newProd.specs.description = req.body.description;
            newProd.specs.inStock = req.body.inStock;

        newProd.save((err) => {
            if(err){
                console.log(err);
                res.json(err);
            } else {
                console.log(newProd);
                res.json({msg: "product was added to db"})
            }
        })
    } catch (e){
        console.log(e);
        next();
    }

};
productCtrl.getProducts = async (req, res, next) => {
    productModal.find({}, (err, prod) => {
        res.json(prod);
    })
};

productCtrl.deleteProduct = async (req, res, next) => {
    var id = req.query.id;
productModal.remove({ _id: id }, function (err) {
    if (err) {
        console.log(err);
        next();
    };
    // deleted at most one tank document
    console.log('product has beeen deleted');
    res.json({msg: 'product has been deleted succesfully'});
  });
};




module.exports = productCtrl;