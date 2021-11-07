const express = require("express");
const mongoose = require("mongoose");
const Contactmodel = require("../models/contactUsModel");

const router = express.Router();

// Gives the user the form
router.get("/contactUsModel", (req, res) => {
  res.render("contactUsModel");
});

// Sending to the musiclabel collection
// router.post(
//     "/contactUsModel",  
//     async (req, res) => {
//   console.log(req.body);
//   try {
//     await Contactmodel.register(req.body, (err) => {
//       if (err) {
//         throw err;
//         console.log("Data has not been posted", err);
//       }
//       res.redirect("/contactinfo/contactUs");
//     });
//   } 
//    catch (err) {
//     res.status(400).send("Sorry! Data was not sent to DB");
//     console.log(err);
//   }
// });

router.post ('/contactUs', 
    (req, res) => {
    console.log(req.body);
    res.sendFile(__dirname + 'contactUs');
  });


module.exports = router;