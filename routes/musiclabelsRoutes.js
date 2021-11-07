const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const Labelmodel = require("../models/musiclabels");

const router = express.Router();

// Gives the user the form
router.get('/musiclabels', (req, res) => {
   res.render("musiclabels")
  });


// Instatiation of storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'public/img');
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname); 
    },
  });
  const upload = multer({ storage });


// Sending to the musiclabel collection
router.post(
    '/musiclabels',
    upload.fields([
      { name: 'txtlabelIcon', maxCount: 1 },
      { name: 'txtalbumCover', maxCount: 1 },
    ]),
    async (req, res) => {
      try {
        const labelmodel = new Labelmodel(req.body);
        labelmodel.txtlabelIcon = req.files.txtlabelIcon[0].path;
        labelmodel.txtalbumCover = req.files.txtalbumCover[0].path;
        console.log('These are  the images you want to uploads');
  
        console.log(labelmodel);
  
        await Labelmodel.register(labelmodel, req.body.password, (err) => {
          if (err) {
            throw err;
            console.log('Data has not been posted', err);
          }
          res.redirect('/labelinfo/musiclabels');
        });
      } catch (err) {
        res.status(400).send('Sorry! Data was not sent to DB');
        console.log(err);
      }
      console.log(req.body);
    },
  );
  

module.exports = router;