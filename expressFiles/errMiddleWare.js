const express = require('express');
const app = express();
const port = 8000;

const errMiddleWare = function (err, req, res, next){
    console.error(err.stock);
    res.statu(500).send("Erro Found")
}

app.use(errMiddleWare);

app.listen(port, () => {
    console.log("We are Live");
}); 