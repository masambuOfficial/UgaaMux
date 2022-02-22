const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const BandReg = require("../models/musicBand");
const User = require("../models/User");

const router = express.Router();

// Gives the user the form
router.get("/musicbands", (req, res) => {
  res.render("musicbands");
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
    "/musicbands", 
    upload.single("txtbandicon"), 
    async (req, res) => {
  console.log(req.body);
  try {
    const bandReg = new BandReg(req.body);
    const user = new User(req.body);
    bandReg.Profilepic = req.file.path;

    // console.log(bandReg);
    // console.log("This is the image you want to upload", req.file);
    
    await bandReg.save();
    await User.register(user, req.body.password, (err) => {
      if (err) {
        throw err;

      }
      res.redirect("/bandinfo/musicbands");
    });
  } 
   catch (err) {
    res.status(400).send("Sorry! Data was not sent to DB");
    console.log(err);
  }
});

module.exports = router;