
//? 1 hacer el require
const http = require('http');

// A partir de este momento tenemos una variable http (que en realidad es un objeto) sobre la que podemos invocar métodos que estaban en el módulo requerido

//! 4 EJERCICIO EN CLASE: 

const getMensaje = () => {
    const hora = new Date().getHours();
    if (hora >= 6 && hora <= 12) {
        return ('Buenos dias')
    }
    else if(hora >= 13 && hora <= 19){
    return ('Buenas tardes') 
    }
    else if((hora >= 20 && hora <= 24) || (hora >= 0 && hora <= 5)){
    return ('Buenas noches')
    }
}

//! fin ej en clase


  //? 2 Crear el server
const server = http.createServer((peticion, respuesta) => {
    respuesta.end(getMensaje());

})

//La funcion que create server recibe 2 parametros, 1 para la peticion, la segunda para enviar los datos al cliente.
//Respuesta.end() sirve para terminar la peticion y enviar los datos al cliente. 

//? 3 conectar el server al puerto 8080
const connectedServer = server.listen(8080, () => {
    console.log(`server http escuchando en el puerto ${connectedServer.address().port}`)
});

//	Con esto le decimos al servidor que escuche en el puerto 8080, aunque podríamos haber puesto cualquier otro puerto que nos hubiera gustado. 

//	"listen()" recibe también una función callback que realmente no sería necesaria, pero que nos sirve para hacer cosas cuando el servidor se haya iniciado y esté listo. Simplemente, en esa función callback indico que estoy listo y escuchando en el puerto configurado.