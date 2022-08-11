const express = require('express');
const app = express();

//!Seteamos las vistas:

app.set('views', './views'); //Nuestras vistas vam a estar en el directorio views
app.set('view engine', 'ejs'); //nuestro motor de vistas va a ser ejs

//Views es una palabra reservada, como engine, es esa palabra si o si

app.get('/', (req, res) => {

    const pets = [
        {name: "Samy", organization: 'DigitalOcean', birth_year: 2012},
        {name: "Tux", organization: 'Linux', birth_year: 1996},
        {name: "Moby", organization: 'Docker', birth_year: 2012}
    ];

    const tagline = 'Ningun concepto de programacion es piola sin un ...'
    res.render('pages/index', {
        pets,
        tagline
    } ); //Dentro del directorio views vamos a tener otro llamado pages y dentro de ese usarmos index
    //{} es un objeto vacio donde vamos a mandar datos por param
});

app.listen(8080);