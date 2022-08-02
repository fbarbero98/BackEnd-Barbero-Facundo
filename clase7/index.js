const { json } = require('body-parser');
const express = require('express');

const app = express();

app.get('/api/mensajes' , (req, res) => {
    console.log('HTTP GET');
    res.json({msg : 'hola mundo'});
});

app.listen(8080);
//! Hasta aca ya sabiamos hacerlo


//! QUERY PARAMS: (son opcionales) 

app.get('/api/mensajes-query-params', (req, res) => {
    console.log('GET WITH QUERY PARAMS');
    if(Object.entries(req.query).length > 0){ //Es la forma de acceder a los params esta
        res.json({
            result : 'get with query params : ok',
            query : req.query
        })
    }
    else{
        res.json({
            result : 'get all : ok'
        })
    } 
});


//?PARA QUE ENTRE DENTRO DEL QUERY PARAMS, DEBEMOS PONER LUEGO DE LA RUTA, UN ? Y PASAR EL FILTRO.
//? SI QUIERO SUMAR OTRO FILTRO SE HACE CON &

//EJEMPLO DE QUERY PARAMS :

//http://localhost:8080/api/mensajes-query-params?ciudad=CABA&edad=25&profesion=doctor

// {"result":"get with query params : ok","query":{"ciudad":"CABA","edad":"25","profesion":"doctor"}}

//Esto se devuelve en formato string. Si quiero que pasen como numero tengo que parsearlo.



//! PATH PARAMS: 
//Son parametros que usamos dentro de la ruta en si. A diferencia de los query, estos estan dentro de nuestra ruta en si.

app.get('/api/mensajes/:id', (req, res) => {
    res.json({
        result : 'recurso buscado',
        pathParam : req.params.id, //el nombre que le doy es como se va a llamar. 
    })
});

//url: http://localhost:8080/api/mensajes/2
//retorna esto : {"result":"recurso buscado","pathParam":"2"}



//! EJERCICIO EN CLASE:

//Ver lo de app use 22:10hs
app.use(express,json());
app.use(express.urlencoded({extended : true}))

//Vamos a enviar informacion esta vez
app.post('/api/mensajes', (req, res) => {
    res.json(req.body); //Es el cuerpo de la peticion que toy haciendo. 
})
