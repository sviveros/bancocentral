const express = require("express");
const bodyparser = require("body-parser");

const app = express();

app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());

require("./api/router.js")(app);

app.listen(3500, function(){
    console.log("http://localhost:3500/ "+" El servidor esta corriendo en el puerto 3500");
});