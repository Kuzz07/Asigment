const multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req, file,cb){
        cb(null, './public/images')
    },
    filename : function(req,file,cb){
        cb(null,Date.now()+ file.originalname)
    }



});

const filefilter = function(req,file,cb){
    if(file.mimetype == 'image/jpeg' || file.mimetype == 'image/gif' || file.mimetype == 'image/png'){
        cb(null,true)
    }
    else{
        cb(null, false)
    }
}

const upload = multer({
    storage :storage,
    fileFilter :filefilter
}).array('pimage', 1);

module.exports =upload;




