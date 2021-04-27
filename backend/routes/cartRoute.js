const express = require('express');
const router = express.Router();
const cartController = require('../controller/cartController');
const {check,validationResult} = require('express-validator');
const carts = new cartController();
const auth = require('../middleware/auth'); 

router.post('/cart/:bid',auth.verifyUser,carts.addCart);
router.delete('/cart/delete/:bid',carts.deleteCart)
router.put('/cart/update/:bid',carts.updateCart)
router.get('/cart/showall', carts.showAllCart)
router.get('/cart/showMyApplied',auth.verifyUser, carts.showMyApplied)
router.get('/cart/single/:id',  carts.getSingleCart)

module.exports = router;
