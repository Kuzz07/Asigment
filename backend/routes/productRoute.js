const express = require('express');
const router = express.Router();///function 
const {check,validationResult,} = require('express-validator');
const auth = require('../middleware/auth'); 
const upload = require('../middleware/uploads')


const productController = require('../controller/productController');
const product = new productController();


// router.post('/product/insert',auth.verifyUser,auth.verifyAdmin, upload.single('pimage'),product.addProduct);
router.post('/product/insert',
upload,

    product.addProduct
    );
router.delete('/product/delete/:pid',auth.verifyUser,auth.verifyAdmin,  product.deleteProduct)

router.put('/product/update/:id',
[  
    check('product',"You must enter your productname").not().isEmpty(),
    check('pdesc',"You must enter description about product").not().isEmpty(),
    check('buydate',"You must enter description about product").not().isEmpty(),
    check('pprice',"Price must be listed").not().isEmpty(),
    ],
    auth.verifyUser, product.updateProduct);
    
router.get('/product/showall', product.showAllProduct)
router.get('/product/single/:id',  product.getSingleProduct)
module.exports = router;