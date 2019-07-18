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

