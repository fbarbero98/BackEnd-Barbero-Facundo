const express = require('express');
const handlebars = require('express-handlebars');

const app = express();


//establecemos la configuracion de handlebars
app.engine(
    'hbs', //nombre de referencia a la plantilla (se usa luego en el set)
    handlebars({ //funcion de configuracion handlebars
        extname: '.hbs',  //extension a utilizar, en lugar de .handlebars x defecto
        defaultLayout: 'index.hbs', //La plantilla principal
        layoutDir: __dirname + "/views/layouts", //ruta a la plantilla principal
        partialsDir: __dirname+ "/views/partials/" //ruta a las plantillas parciales
    })
);


//establecemos el motor de plantilla que se utliliza
app.set("view engine", "hbs");
//Establecemos el directorio donde se encuentran los archivos de plantilla
app.set("views", "./views");

fakeApi = () =>[
    { name : 'Katarina', lane: 'midlaner'},
    { name : 'Jayce', lane: 'toplaner'},
    { name : 'Azir', lane: 'midlaner'},
    { name : 'Heimerdinger', lane: 'toplaner'}
];

app.get('/', (req, res) => {
    res.render('main', {suggestedChamps: fakeApi(), listExists: true});
})

app.listen(8080)


