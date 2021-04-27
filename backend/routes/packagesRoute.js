const express = require('express');
const router = express.Router();///function 
const {check,validationResult,} = require('express-validator');
const auth = require('../middleware/auth'); 
const upload = require('../middleware/uploads')


const packagesController = require('../controller/packagesController');
const packages = new packagesController();


// router.post('/packages/insert',auth.verifyUser,auth.verifyAdmin, upload.single('pimage'),packages.addpackages);
router.post('/packages/insert',[  
    check('packagesname',"You must enter your packagesname").not().isEmpty(),
    check('packagedesc',"You must enter description about package").not().isEmpty(),
    check('packagetime',"You must enter your booking time").not().isEmpty(),
    check('packageduration',"You must enter duration of your tratment").not().isEmpty(),
    check('pprice',"Price must be listed").not().isEmpty(),
    upload
    ], 
    
    packages.addPackages
    );

router.delete('/packages/delete/:pid',auth.verifyUser,auth.verifyAdmin,  packages.deletePackages)

router.put('/packages/update/:id',
[  
    check('packagesname',"You must enter your packagesname").not().isEmpty(),
    check('packagedesc',"You must enter description about package").not().isEmpty(),
    check('packagetime',"You must enter your booking time").not().isEmpty(),
    check('packageduration',"You must enter duration of package").not().isEmpty(),
    check('pprice',"Price must be listed").not().isEmpty(),
    ], packages.updatePackages
    );

router.get('/packages/showall', packages.showAllPackages)
router.get('/packages/single/:id',  packages.getSinglePackages)
module.exports = router;