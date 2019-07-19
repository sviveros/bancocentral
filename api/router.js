/* (INICIO 1) TODO ESTE BLOQUE FUE DE LA CLASE JUEVES 18 JULIO 2019
module.exports = (app) => {
    // Func. que responde a los metodos GET POST PUT DELETE
    app.get("/",function(req,res){
        let lss_texto = "<strong>Otro texto que lo acompaña</strong>";
        let persona = {
            "nombre": "Sidney",
            "edad"  : 48
        };
        lss_texto = persona.nombre + "<br><br>" + persona.edad + "<br><br>" + lss_texto;
        res.send(lss_texto);
    });

    app.post("/personas",(req,res)=>{
        let nombre = req.body.nombre;
        let edad   = req.body.edad;
        let miPersona = {
            "elnombre" : nombre,
            "laedad"   : edad
        };
        res.send(miPersona);
    });
}
(FIN 1) */

const ClienteControlador = require('../app/controladores/clienteControlador.js');//IMmportamos la clase controlador

//Indicamos que es un modulo que se va a usar desde afuera y recibe como parametro la instancia de app para implementar sus funciones
module.exports = (app) => {
    //Recurso clientes encargado de consultar un cliente segun el id en base de datos
    app.get('/clientes/:id', function(req, res) {
        ClienteControlador.consultaCliente(req, res);
    });

    //Recurso Clientes encargado de consultar todos los clientes de la base de datos
    app.get('/clientes', function(req, res){
        ClienteControlador.consultaClientes(req, res);
    });

    //Recurso raiz que me devuelve un json con la estructura de una persona
    app.get('/', function (req, res) {
        let persona = {
            'nombre': 'Orlando',
            'edad'  : 30
        };
        res.send(persona);
    });

    //Rcurso Personas que me devuele por le metodo POST la estructura de una persona segun los datos que llegan
    app.post('/personas', (req, res) => {
        let nombre = req.body.nombre;
        let edad   = req.body.edad;
        let miPersona = {
            'elNombre' : nombre,
            'laEdad'   : edad
        };
        res.send(miPersona);
    });
}