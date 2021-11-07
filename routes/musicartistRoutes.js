const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const Artistmodel = require("../models/musicArtist");

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
    const artistReg = new Artistmodel(req.body);
    artistReg.Profilepic = req.file.path;
    console.log(artistReg);
    console.log("This is the image you want to upload", req.file);
    await Artistmodel.register(artistReg, req.body.password, (err) => {
      if (err) {
        throw err;
        console.log("Data has not been posted", err);
      }
      res.redirect("/artistinfo/musicartist");
    });
  } 
   catch (err) {
    res.status(400).send("Sorry! Data was not sent to DB");
    console.log(err);
  }
});

module.exports = router;