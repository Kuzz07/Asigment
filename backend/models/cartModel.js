var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const User = require('./user')
const products = require('./productModel')

OrderSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: User
    },
    
    productId: {
            type: Schema.Types.ObjectId,
            ref: products
        },

    quantity: {
            type: Number,
            default: 1
        },
    
    totalPrice: {
        type: Number,
        default: 0
    },
    
});
Order = mongoose.model('Order', OrderSchema);

module.exports = Order;