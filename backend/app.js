const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-Parser');
const cors = require('cors');



const db = require('./database/db');
const reg_route = require('./routes/reg_route');
const productRoute = require('./routes/productRoute');
const packagesRoute = require('./routes/packagesRoute');
const bookingRoute = require('./routes/bookingRoute');
const cart = require('./routes/cartRoute');
const contact = require('./routes/contactRoute');

const app = express();
app.use('/public',express.static(__dirname + "/public"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(reg_route);
app.use(productRoute);
app.use(packagesRoute);
app.use(cart);
app.use(contact);
app.use(bookingRoute)


app.listen(100, () => {
    console.log("Server running at 100.")
});