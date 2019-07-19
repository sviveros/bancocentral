const express = require("express");
const bodyparser = require("body-parser");

//Instanciamos express como servidor para emepzar a utilizar su potencia
const app = express();

//Uso de Body Parser Para manejo de la informacion que viaja por las peticiones http al servidor
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());

//Importamos la libreria o modulo router mandandole como parametro la instancia de servidor express
require("./api/router.js")(app);

//const db = require("./bd/bd.js");
//db.connection;

//Iniciamos el servidor escuchando por un puerto
app.listen(3500, function(){
    console.log("http://localhost:3500/ "+" El servidor esta corriendo en el puerto 3500");
});