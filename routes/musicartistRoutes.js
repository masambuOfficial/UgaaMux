const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const ArtistReg = require("../models/musicArtist");
const User = require("../models/User");

const router = express.Router();

// Gives the user the form
router.get("/musicArtist", (req, res) => {
  res.render("musicArtist");
});

// Instatiation of storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/img");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });

// Sending to the musiclabel collection
router.post(
    "/musicArtist", 
    upload.single("Profilepic"), 
    async (req, res) => {
  console.log(req.body);
  try {
    const artistReg = new ArtistReg(req.body);
    const user = new User(req.body);
    artistReg.Profilepic = req.file.path;

    // console.log(artistReg);
    // console.log("This is the image you want to upload", req.file);
    
    await artistReg.save();
    await User.register(user, req.body.password, (err) => {
      if (err) {
        throw err;
        
      }
      res.redirect("/artistinfo/musicartist");
    });
  } 
   catch (err) {
    res.status(400).send("Sorry! Data was not sent to DB");
    console.log(err);
  }
});

router.get('/profile', async(req, res) => {
  if (req.session.user) {
      try {
          const user = await ArtistReg.findOne({ email: req.user.email });
          console.log(user);
          res.render('artistprofile', { artist: user });
      } catch {
          res.status(400).send('Unable to find artist');
      }
  } else {
      res.redirect('/logininfo/login');
  }
});


module.exports = router;