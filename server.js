// Dependencies
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const passport = require("passport");
const userModel = require("./models/User");
const expressSession = require('express-session')({
  secret: 'secret',
  resave: false,
  saveUninitialized: false,
});

const router = express.Router();

const musiclabelRoutes = require("./routes/musiclabelsRoutes");
const musicartistRoutes = require("./routes/musicartistRoutes");
const musicbandRoutes = require("./routes/musicbandRoutes");
const contactusRoutes = require("./routes/contactusRoutes");
const loginRoutes = require("./routes/loginRoutes");


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
app.use(express.urlencoded({extended: true})); // Bodyparser middleware 
app.use(express.static(path.join(__dirname, 'public')));

app.use(expressSession);
app.use(passport.initialize());
app.use(passport.session());


passport.use(userModel.createStrategy());
passport.serializeUser(userModel.serializeUser());
passport.deserializeUser(userModel.deserializeUser());



// Configs or settings
app.set("views", path.join(__dirname, "views"));
app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

router.get('/artistpage', (req, res) => {
  res.render("artistprofile")
})

app.get('/dashboard', (req, res) => {
  res.sendFile(__dirname + '/views/dashboard.html');
});

app.get('/clerkdashboard', (req, res) => {
  res.sendFile(__dirname + '/views/clerkdashboard.html');
});

app.get('/soutiyaAfrica', (req, res) => {
  res.sendFile(__dirname + '/views/soutiyaAfrica.html');
});

app.get('/terms', (req, res) => {
  res.sendFile(__dirname + '/views/terms.html');
});

app.get('/artistprofile', (req, res) => {
  res.sendFile(__dirname + '/views/artistprofile.html');
});

app.get('/privacy', (req, res) => {
  res.sendFile(__dirname + '/views/privacy.html');
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
app.use("/logininfo", loginRoutes);


// 




// Always at the bottom 
app.get('*', (req, res) => {
  res.status(400).send('Page does not exist')
}); // Modern functions


// Server
app.listen(3000, function() {
    console.log('listening on 3000')
  }); // Old function style
