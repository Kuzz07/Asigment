const { mongo } = require("mongoose");

const mongoose = require('mongoose')
const Product = mongoose.model('product',
{
    product : {
        type : String
    },

    pdesc : {
        type : String
    },

    pprice : {
        type : String
    },
    buydate :{
        type : String
    },
    
    pimage :{
        type : String
    }
})
module.exports = Product;