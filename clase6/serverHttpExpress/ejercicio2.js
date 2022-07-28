const express = require('express');

const app = express();


app.get('/', (peticion, respuesta) => {
    respuesta.send(<h1 style= 'color:blue' >Bienvenidos al server</h1>)
});


/* terminado : app.get("/", (req, res) => {
  res.send('<h1 style="color:blue">Bienvenidos al servidor express</h1>');
});
let contador = 0;
app.get("/visitas", (req, res) => {
  res.send(`La cantidad de visitas es ${contador++}`);
});
const date = new Date();
app.get("/fyh", (req, res) => {
  res.send({ fyh: date.toLocaleString() });
});
*/

/* otra forma de terminar : 
let visitas = 0

app.get('/', (req, res) => {
    res.send('<h1 style="color:blue;">Hola mundo</h1>')
})
app.get('/visitas', (req, res) => {
    visitas += 1
    res.send(`La cantidad de visitas es : ${visitas}`)
})
app.get('/fyh', (req, res) => {
    const date = new Date
    res.send(date.toLocaleString())
})
*/
const server = app.listen(8080, () => {
    console.log((`Server http escuchando en el port ${server.address().port}`))
});


server.on('error', error => console.log(`error en servidor ${error}`));