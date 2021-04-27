const express = require('express');
const { userInfo } = require('os');
const router = express.Router();///function 
const tokenVerification = require('../middleware/auth');
const auth2 = require('../middleware/auth');

const {check,validationResult} = require('express-validator');
 const authController = require('../controller/authController')
const userController = require('../controller/userController');
const authication = require('../middleware/auth'); 

const user = new userController();
 const auth = new authController();
const token = tokenVerification.verifyUser;

router.post('/user/register', [  
check('firstname',"You must enter your name").not().isEmpty(),
check('lastname',"You must enter your Lastname").not().isEmpty(),
check('email',"Invalid Email").isEmail(),
check('phoneno',"Invalid Phone Number").isMobilePhone(),
check('address',"Please Enter your Address").not().isEmpty(),
check('password',"Enter your password").not().isEmpty(),
check('password', "it must be 3 to 8 lenght long").isLength({min : 3, max :8})], 
    auth.register
);


    ///logIN done

    router.post('/user/login',  auth.login)

    router.put('/user/update/:id',token, user.update)
    router.delete('/user/delete/:uid', user.deleteUser)
    router.get('/user/showalluser',token, user.showAllUser)
    router.get('/user/getsingleuser/:uid', user.getSingleUser)
    router.get('/user/showProfile',token, user.showProfile)

    module.exports = router;
    