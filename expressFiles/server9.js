const express = require('express');
const app = express();
const port = 8000;

const route = express.route();
app.use(router);

const dateMiddleWare = (req, res, next) => {
    // console.log(`The current Date is ${Date.now}`);
    res.send(`The current Date is ${Date.now}`)

};

route.get("/home", dateMiddleWare);

app.listen(port, () => {
    console.log("We are Live");
}); 