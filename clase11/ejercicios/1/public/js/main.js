//! Aca va la logica.

const socket = io.connect(); //Iniciamos la coneccion del lado del cliente

const input = document.querySelector('input'); //esto hace que podamos trabajar con los inputs

//es como un getElementByID


//! ENVIAR punto 1
/*input.addEventListener('input', () => {
    socket.emit('mensaje', input.value)//por cada vez que se interactue con el evento, se va a hacer un socket.emit del value, con el nombre mensaje
});*/


//!RECIBIR punto 1
/*socket.on('mensajes', data => {
    document.querySelector('p').innerText = data; //recibe el "mensajes" de server, y se lo asigna al "p"
});*/

//!Enviar punto 3:

document.querySelector('button').addEventListener('click', () => {
    socket.emit('mensaje', input.value); //Cada vez que se envie el formulario manda el mensaje con el valor del form
});

socket.on('mensajes', msjs => { //recibe el mensaje mensajes y el msjs es la data
    const mensajesHTML = msjs //asigna esa data a una variable
        .map(msj => `SocketID: ${msj.socketid} -> Mensaje: ${msj.mensaje}`) //recorre el arreglo de objetos de la data.
    document.querySelector('p').innerText = mensajesHTML; //recibe el "mensajes" de server, y se lo asigna al "p"
});