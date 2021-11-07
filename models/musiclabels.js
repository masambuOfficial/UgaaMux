const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportmongoose = require('passport-local-mongoose');


// Instantiating the Schema class and passing in my document structure as an argument to the schema class
const musiclabelSchema = new Schema({
    txtlabelID: {
        type: String,
        required: true, 
        trim: true,
    },
    txtlabelName: {
        type: String,
        required: true,
        trim: true,
    },
    txtlabelHome: {
        type: String,
        required: true,
        trim:true,
    },
    txtlabelOwner:{
        type: String,
        required:true, 
        trim:true,
    },
    txtphone: {
        type: String,
        required: true, 
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
    txtSponsorname: {
        type: String,
    },
    txtlabelSlogan: {
        type: String,
        required: true,
        trim:true,
    },
    txtmembers:{
        type: Number,
        required: true, 
        trim:true,
    },
    txtmanaged:{
        type: String,
        required: true, 
        trim:true,
    },
    txtlabelIcon:{
        type: String,
        required: true,  
    },
    txtalbumName:{
        type: String,
        required: true, 
        trim:true,
    },
    txtsongName: {
        type: String,
        required: true, 
        trim:true,
    },
    txtsongs:{
        type: Number,
        required: true, 
        trim:true,
    },
    txtalbumCover:{
        type: String,
        required: true, 
    },
});


musiclabelSchema.plugin(passportmongoose, {
    usernameField: 'email',
    
});

// Creating a mongoose model with the preferred name of my collection and the UserSchema created above
const musiclabelModel = mongoose.model("Musiclabel", musiclabelSchema)
module.exports = musiclabelModel