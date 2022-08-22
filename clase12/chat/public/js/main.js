//! iniciar la conexion del lado del cliente
const socket = io.connect(); //Con esta linea se inicia la conexion

//! recibir la data: 

function render(data){
    const html = data.map((elem, index) => { //Index es otra forma de trabajar el map, no es nn
        return(`<div><strong>${elem.author}</strong>: <em>${elem.text}</em> </div>`); //Cada elemento que vamos creando es el autor y el texto
    }).join(" "); //El join genera un arreglo con el map, pero cada elemento separado por un espacio

document.getElementById('messages').innerHTML = html; //cambia el inner html por lo que le pasamos a la const html
};

function addMessage(e) {
    const mensaje = { //esta funcion crea un mensaje con los valores del form
        author: document.getElementById('author').value,
        text: document.getElementById('text').value
    };
//! mandamos mensajes del lado del cliente al servidor
    socket.emit('new-message', mensaje); //hacemos un emit de un nuevo mensaje, y le pasamos el mensaje de arriba
    return false //para evitar el refresh
};


//! mostrar la data que recibimos
socket.on('messages', data => { //on es para recibir mensajes
    console.log(data); //recibimos una data, y esa data la imprimimos por consola
    render(data); //Recibimos la data, y hacemos la funcion que declaramos arriba
});
