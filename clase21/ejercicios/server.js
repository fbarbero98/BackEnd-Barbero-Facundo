/*! CONSIGNA: Desarrollar un servidor basado en Node.js y express que para la ruta '/test' responda con un array de 10 objetos, con el siguiente formato: {
    nombre: '',
    apellido: '',
    color: ''
}*/



import express from "express";

const app = express();

const nombres = ['Luis', 'Lucía', 'Juan', 'Augusto', 'Ana'];
const apellidos = ['Pieres', 'Cacurri', 'Bezzola', 'Alberca', 'Mei'];
const colores = ['rojo', 'verde', 'azul', 'amarillo', 'magenta'];


function getRandomElement(array) {
    return array[Math.floor(array.length * Math.random())] // declaramos una funcion que consiga un elemento random del arreglo
}

function crearCombinacionesAlAzar() {
    return{
        nombre: getRandomElement(nombres),
        apellido: getRandomElement(apellidos),
        color: getRandomElement(colores)
    }
}
app.get('/test', (req, res) => {
    const objs = [];
    for (let index = 0; index < 10; index++) {
        objs.push(crearCombinacionesAlAzar());
        
    }
    res.json(objs)

})


app.listen(8080);