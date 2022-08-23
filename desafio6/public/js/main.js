const socket = io.connect();

//------------------------------------------------------------------------------------

const formAgregarProducto = document.getElementById('formAgregarProducto')
formAgregarProducto.addEventListener('submit', e => {
    e.preventDefault() //Esto lo que hace es que no se haga el refresh cuando se actualiza
    //Armar objeto producto y emitir mensaje a evento update

//! Mandar el nuevo producto que ingresa el cliente:
    const newProduct = { //Primero agarramos los valores de los forms que completa el cliente y los metemos dentro del objeto newProduct
        name: document.getElementById('name').value ,
        price: document.getElementById('precio').value,
        thumbnail: document.getElementById('foto').value
    }

    socket.emit("newProduct", newProduct); //Mandamos con el nombre "newProduct" el producto nuevo que creamos, para que lo reciba del lado del servidor

})
//!El cliente recibe los "productos" y por cada uno crea la tabla.
socket.on('productos', async (productos) => {
    //generar el html y colocarlo en el tag productos llamando a la funcion makeHtmlTable
    const html = await makeHtmlTable(productos);
    document.getElementById("productos").innerHTML = html;
});

function makeHtmlTable(productos) {
    return fetch('plantillas/tabla-productos.hbs')
        .then(respuesta => respuesta.text())
        .then(plantilla => {
            const template = Handlebars.compile(plantilla);
            const html = template({ productos })
            return html
        })
}

//-------------------------------------------------------------------------------------

const inputUsername = document.getElementById('inputUsername')
const inputMensaje = document.getElementById('inputMensaje')
const btnEnviar = document.getElementById('btnEnviar')

const formPublicarMensaje = document.getElementById('formPublicarMensaje')
formPublicarMensaje.addEventListener('submit', e => {
    e.preventDefault()
    //Armar el objeto de mensaje y luego emitir mensaje al evento nuevoMensaje con sockets
    formPublicarMensaje.reset()
    inputMensaje.focus()
})

socket.on('mensajes', mensajes => {
    console.log(mensajes);
    const html = makeHtmlList(mensajes)
    document.getElementById('mensajes').innerHTML = html;
})

function makeHtmlList(mensajes) {
    //Armar nuestro html para mostrar los mensajes como lo hicimos en clase
}

inputUsername.addEventListener('input', () => {
    const hayEmail = inputUsername.value.length
    const hayTexto = inputMensaje.value.length
    inputMensaje.disabled = !hayEmail
    btnEnviar.disabled = !hayEmail || !hayTexto
})

inputMensaje.addEventListener('input', () => {
    const hayTexto = inputMensaje.value.length
    btnEnviar.disabled = !hayTexto
})