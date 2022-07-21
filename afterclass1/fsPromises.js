const fs = require('fs');

fs.promises.readFile('./info.txt', 'utf8')
    .then(contenido =>{
        const info = JSON.parse(contenido);
        console.log(info);
    })
    .catch(error =>{
        console.log(error, 'Hubo un error')
    })

