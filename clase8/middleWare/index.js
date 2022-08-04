const express = require('express');
const {Router} = express; //Agarramos la dependencia de Router

const app = express();
const router = new Router()

function mdl1(req, res, next) {
    req.miAporte1 = 'dato por mdl1'; //Al request que envia el cliente le asigno este valor
    next();
};

function mdl2(req, res, next) {
    req.miAporte2 = 'dato por mdl2';
    next();
};

app.get('/ruta1', mdl1, (req, res) => {
    let miAporte1 = req.miAporte1;
    res.send({
        miAporte1
    });
});

app.get('/ruta2', mdl1, mdl2, (req, res) => { //Los mdl que vamos pasando si tienen el next dejan que se siga ejecutando el codigo.
//POdemos tener todos los middleware que queramos, pero es muy raro tener mas de uno  
//Generalmente se usan para conseguir tokens de autenticacion
    let {
        miAporte1,
        miAporte2
    } = req; //destructuring
    res.send({
        miAporte1,
        miAporte2
    })
});

app.listen(8080);
app.use('/api', router);

//!ERRORES:
app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  });
  