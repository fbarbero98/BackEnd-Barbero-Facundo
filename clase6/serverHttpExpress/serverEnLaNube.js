
const express = require('express');

const app = express();

//! Ejercicio:

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

//! fin ejercicio


const server = app.listen(8080, () => {
    console.log((`Server http escuchando en el port ${server.address().port}`))
});


server.on('error', error => console.log(`error en servidor ${error}`));