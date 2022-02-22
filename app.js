const mongoose = require("mongoose");
const express = require('express');


mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
});
mongoose.connection
    .on('open', () =>{
        console.log('Mongoose connection open');
    });
    .on('error', () => {
        console.log(`Connection error: ${err.message}`);
    });


app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
app.set('vies engine', 'pug');