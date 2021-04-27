var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const User = require('./user')
const packages = require('./packagesModel')

BookingSchema = new Schema({

    userid: {
        type: Schema.Types.ObjectId,
        ref: User
    },
    packagesid: {
        type: Schema.Types.ObjectId,
        ref: packages
    }
});
Book = mongoose.model('Booking', BookingSchema);

module.exports = Book;

