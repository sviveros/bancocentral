const mysql = require("mysql");

class DB {
    constructor(){
        // Verificamos la existencia de alguna instancia en la BD
        if(!DB.instancia){
            DB.instancia = this;
            // Agregamos los parametros de conexion
            this.connection = mysql.createConnection({
                host     : "10.100.25.26",
                user     : "root",
                password : "OFRIxe26293",
                database : "flexcube"

            });
            // Conectamos y manejamos la conexion con throw
            this.connection.connect((err)=>{
                if(err) throw err;
                console.log("Fallo la conexion. !!!");
            });
            console.log("Entro a conectar. !!!");
        }
        // Si existe la instancia que retorne la misma
        console.log("Encontro una instancia de conexion. !!!");
        return DB.instancia;
    }
}

// Creamos una instancia de la clase
const instancia = new DB();

// Por seguridad con freezee congelamos los parametros de la instancia 
Object.freeze(instancia);

// Se exporta el modulo con la instancia creada 
module.exports = instancia;