const express = require('express');
const app = express();

app.listen(8080);
app.use(express.json()); //Para poder trabajar con objetos.

const palabras = ['Frase' , 'inicial'];

//! primer punto: 
app.get('/api/frase', (req, res) => {
    res.send({ frase: palabras.join(' ')}); 
});

//! punto 2:
app.get('/api/palabras/:pos', (req, res) => {
    const { pos } = req.params; //destructuring. Es para que lo que recibimos como :pos (en el req.params), se le asigne a la variable pos
    res.send({ buscada : palabras[parseInt(pos) - 1]});  //Es -1 xq si pongo uno voy a la posicion 0.
    //Lo que hace esto es que muestra la palabra que se encuentre en la posicion -1 del numero que pasamos x parametro, hacemos el parseInt xq lo recibe como string
});


//! punto 3:

app.post('/api/palabras' , (req , res) => {
    const {palabra} = req.body ; //req.body es lo que pasamos en la parte "body" del postman
    palabras.push(palabra);
    res.send({ palabraInsertada : palabra});
});

//!PUNTO 4:

app.put('/api/palabras/:pos', (req, res) => {
    const { palabra } = req.body;
    const { pos } = req.params;

    const palabraAnterior = palabras[parseInt(pos) -1 ]; //ParseInt porque devuelve un string
    palabras[parseInt(pos) -1] = palabra;
    res.send({actualizada : palabra , anterior: palabraAnterior});

    //En el put mandamos un json 
    //Si despues de hacer un put,hacemos un get, va a estar actualizada la palabra.

    //Consultar si lo vuelvo a levantar, si se cambia el original.
});

//! PUNTO 5:

app.delete('/api/palabras/:pos', (req, res) => {
    const { pos } = req.params;
    const palabra = palabras.splice(parseInt(pos) -1, 1);
    res.send({borrada : palabra});

    //Preguntar si en el metodo delete no hacemos el splice que pasa. 
})


