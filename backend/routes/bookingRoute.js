const express = require('express');
const router = express.Router();
const bookingController = require('../controller/bookingController');
const {check,validationResult} = require('express-validator');
const bookings = new bookingController();
const auth = require('../middleware/auth'); 

router.post('/booking/:pid',auth.verifyUser,bookings.addBooking);

router.delete('/booking/delete/:bid',bookings.deleteBooking)
router.get('/booking/showall', bookings.showAllBooking)
router.get('/booking/showMyApplied',auth.verifyUser, bookings.showMyApplied)
router.get('/booking/single/:id',  bookings.getSingleBooking)

module.exports = router;