//! Aca va la logica.

const socket = io.connect(); //es para conectarse con el servidor


//? PARA RECIBIR INFORMACION DEL SERVIDOR AL CLIENTE:

socket.on('mi mensaje', data => { //Recibe el "mi mensaje"
    alert(data); //Nos hace un alert con los datos que recibe del server

    //?Tambien podemos enviar informacion del cliente al servidor:
    
    socket.emit('notificacion', 'mensaje recibido exitosamente'); 
})