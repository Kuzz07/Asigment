const { mongo } = require("mongoose");

const mongoose = require('mongoose')
const Packages = mongoose.model('packages',

{

    packagesname : {
        type : String

    },

    packagedesc : {
        type : String
    },

    packageduration : {
        type : String
    },
    
    packagetime : {
        type : String
    },
    packageprice : {
        type : String
    },
    
    pimage :{
        type : String
    }
})
module.exports = Packages;