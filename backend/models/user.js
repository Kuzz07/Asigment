const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const SCHEMA = mongoose.Schema;

const USERSCHEMA = new SCHEMA({
    firstname: {
        type: String,
        required: true

    },
    lastname: {
        type: String,
        required: true

    },
    email: {
        type: String,
        required: true,
        unique: true

    },
    phoneno: {
        type: String,
        required: true,
        unique: true

    },
    address: {
        type: String,
        require: true

    },
    password: {
        type: String,
        required: true

    },
    role: {
        type: String,
        enum: ['Customer', 'Admin'],
        default: 'Customer'
    },
    authTokens: [
        {
            token: {
                type: String,
                required: true,
            },
        },
    ],
})

USERSCHEMA.methods.generateAuthToken = async function () {
    const token = await jwt.sign({ id: this._id },  "secrectkey");
    this.authTokens = await this.authTokens.concat({ token });
    await this.save();
    return token;
};
const USER = mongoose.model("user", USERSCHEMA);
// export default USER;
module.exports = USER;