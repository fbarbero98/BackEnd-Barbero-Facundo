const fs = require('fs');

fs.promises.readFile('./info.txt', 'utf8')
    .then(contenido => {
        const info = JSON.parse(contenido);
        console.log(info);

        //Segunda parte del ej:

        const packageJsonObject = info.contenidoObj; //Si ya esta transformado en objeto, puedo acceder a cualquier clave del objeto
        console.log(packageJsonObject);

        //Parte 3 del ej, modificar el autor de '' a coderhouse:
        packageJsonObject.author = 'CoderHouse';
        console.log(packageJsonObject);


        //Ultima parte de ej:

        fs.promises.writeFile('package.json.coder', JSON.stringify(packageJsonObject, null, 2)) //Para poder guardar el archivo hay que pasar el objeto a string
        .then(() => console.log('Se creó el archivo'))
        .catch(error => {
            console.log(error, 'Hubo un error creando el archivo');
        })
    })
    .catch(error => {
        console.log(error, 'Hubo un error')
    })

