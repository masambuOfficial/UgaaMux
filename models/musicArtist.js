const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportmongoose = require('passport-local-mongoose');

const musicartistSchema = new Schema({
    txtArtistID: {
        type: String,
        required: true, 
        trim: true,
    },
    txtfirstName: {
        type: String,
        required: true, 
        trim: true,
    },
    txtlastName: {
        type: String,
        required: true, 
        trim: true,
    },
    txtTelephone: {
        type: String,
        required: true, 
        trim: true,
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
    txtDoB: {
        type: Date,
        required: true, 
        trim:true,
    },
    txtSex: {
        type: String,
        required: true, 
        trim:true,
    },
    txtDistrict: {
        type: String,
        required: true, 
        trim:true,
    },
    txtSingles: {
        type: Number,
        required: true, 
        trim:true,
    },
    txtAliasname: {
        type: String,
        required: true, 
        trim:true,
    },
    txtNIN: {
        type: String,
        required: true, 
        trim:true,
    },
    txtAlbums: {
        type: Number,
        required: true, 
        trim:true,
    },
    txtBased:{
        type: String,
        required: true, 
        trim:true,
    },
    txtdatestarted: {
        type: Date,
        required: true, 
        trim:true,
    },
    Profilepic: {
        type: String,
        required: true, 
        trim:true,
    },
});

musicartistSchema.plugin(passportmongoose, {
    usernameField: 'email',
    
});

// Creating a mongoose model with the preferred name of my collection and the musicartistSchema created above
const musicartistModel = mongoose.model("Musicartist", musicartistSchema)
module.exports = musicartistModel