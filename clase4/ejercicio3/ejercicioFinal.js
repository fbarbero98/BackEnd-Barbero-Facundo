const fs = require('fs');

fs.readFile('./package.json', 'utf-8', (error, contenido) => {
    if (error) {
        throw new Error('Error en el read')
    }
    console.log('Read bien hecho')

    const info = {
        contenidoStr: contenido, //Esto es el contenido del package.json
        contenidoObj: JSON.parse(contenido), //Esto es el contenido en formato objeto (se hace con el JSON parse)
        size: contenido.length //Esto es el tamaño del contenido del package.json
    };

    console.log(info)
    fs.writeFile('info.txt', JSON.stringify(info, null, 2), error =>{ //null, 2 son para preservar el formato del obj
        if (error) {
            throw new Error('Error en el write');
        }
    })
})
