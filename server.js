// Dependencies
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const Labelmodel = require("./models/musiclabels");
const Artistmodel = require("./models/musicArtist");
const Bandmodel = require("./models/musicBand");
const Contactus = require("./models/contactUsModel");
const passport = require("passport");
const expressSession = require('express-session')({
  secret: 'secret',
  resave: false,
  saveUninitialized: false,
});


const musiclabelRoutes = require("./routes/musiclabelsRoutes");
const musicartistRoutes = require("./routes/musicartistRoutes");
const musicbandRoutes = require("./routes/musicbandRoutes");
const contactusRoutes = require("./routes/contactusRoutes");

require('dotenv').config();

// Installations 
const app = express();
mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // useCreateIndex: true,

});
mongoose.connection
    .on('open', () => {
        console.log('Mongoose connection open');
    })
    .on('error', (err) => {
        console.log(`Connection error: ${err.message}`);
    });



// Middleware
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(expressSession);
app.use(passport.initialize());
app.use(passport.session());

passport.use(Labelmodel.createStrategy());
passport.serializeUser(Labelmodel.serializeUser());
passport.deserializeUser(Labelmodel.deserializeUser());

passport.use(Artistmodel.createStrategy());
passport.serializeUser(Artistmodel.serializeUser());
passport.deserializeUser(Artistmodel.deserializeUser());

passport.use(Bandmodel.createStrategy());
passport.serializeUser(Bandmodel.serializeUser());
passport.deserializeUser(Bandmodel.deserializeUser());


// Configs or settings
app.set("views", path.join(__dirname, "views"));
app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/login', (req, res) => {
  res.sendFile(__dirname + '/views/login.html');
});

app.get('/dashboard', (req, res) => {
  res.sendFile(__dirname + '/views/dashboard.html');
});

app.get('/musiclabels', (req, res) => {
  res.sendFile(__dirname + '/views/musicBands.html');
});

app.get('/contactUs', (req, res) => {
  res.sendFile(__dirname + '/views/contactUs.html');
});

app.get('/performingArtist', (req, res) => {
  res.sendFile(__dirname + '/views/performingArtist.html');
});

app.post ('/contactUs', (req, res) => {
  console.log(req.body);
  // res.sendFile(__dirname + '/views/index.html');
});



app.use("/labelinfo", musiclabelRoutes);
app.use("/artistinfo", musicartistRoutes);
app.use("/bandinfo", musicbandRoutes);
app.use("/contactinfo", contactusRoutes);


// 




// Always at the bottom 
app.get('*', (req, res) => {
  res.status(400).send('Page does not exist')
}); // Modern functions


// Server
app.listen(3000, function() {
    console.log('listening on 3000')
  }); // Old function style
