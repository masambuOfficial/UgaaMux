const express = require("express");
const mongoose = require("mongoose");
const ArtistReg = require("../models/musicArtist");
const User = require("../models/User");
const BandReg = require("../models/musicBand");
const LabelReg = require("../models/musiclabels");
const passport = require("passport");


const router = express.Router();

// Gives the user the form
router.get("/login", (req, res) => {
    res.render("login");
});

// Gives the Login authentication
router.post('/login', 
    passport.authenticate('local', 
    { failureRedirect: '/logininfo/login' }), (req, res) => {
    req.session.user = req.user;

    User.findOne({ email: req.body.email })
        //cheaking through their roles and redirecting them to respective pages
        .then((data) => {

            if (data.role == 'artist') {

                res.redirect('/artistinfo/profile');
            } else {
                res.send('your not authorized');
            }
        })

});

module.exports = router;