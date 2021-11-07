const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportmongoose = require('passport-local-mongoose');

const contactUsSchema = new mongoose.Schema({
    txtfullName: {
        type: String,
        trim: true,
        required: true,
    },
    txtemail: {
        type: String,
        trim: true,
        required: true,
    },
    txtTelephone: {
        type: String,
        trim: true,
        required: true,
    },
    txtmessage: {
        type: String,
        trim: true,
    }
});

// Creating a mongoose model with the preferred name of my collection and the contactUsSchema created above
const contactModel = mongoose.model("contactUs", contactUsSchema)
module.exports = contactModel