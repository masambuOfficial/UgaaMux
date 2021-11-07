const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportmongoose = require('passport-local-mongoose');


// Instantiating the Schema class and passing in my document structure as an argument to the schema class
const musicbandSchema = new Schema({
    txtuserRole: {
        type: String,
        required: true, 
        trim: true,
    },
    txtbandName: {
        type: String,
        required: true, 
        trim: true,
    },
    txtbandHome: {
        type: String,
        required: true,
        trim: true,
    },
    txtbandOwner: {
        type: String,
        required: true,
        trim:true,
    },
    txttelephone:{
        type: String,
        required:true, 
        trim:true,
    },
    email: {
        type: String,
        required: true, 
        trim:true,
        unique: true,
    },
    password: {
        type: String,
        trim: true,
        required: true,
    },
    txtformationDate: {
        type: Date,
        required: true, 
        trim:true,
    },
    txtnumberofMembers: {
        type: Number,
        required: true, 
        trim:true,
    },
    txtSponsornames: {
        type: String,
    },
    txtnumberofAlbums: {
        type: Number,
        required: true, 
        trim:true,
    },
    txtbandSlogan: {
        type: String,
        required: true,
        trim:true,
    },
    txtcrownsWon:{
        type: String,
        required: true, 
        trim:true,
    },
    txtmusicCategory:{
        type: String,
        required: true, 
        trim:true,
    },
    txtbandicon:{
        type: String,
    },
});


musicbandSchema.plugin(passportmongoose, {
    usernameField: 'email',
    
});

// Creating a mongoose model with the preferred name of my collection and the UserSchema created above
const musicbandModel = mongoose.model("Musicbands", musicbandSchema)
module.exports = musicbandModel