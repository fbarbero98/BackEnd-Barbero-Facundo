import ContenedorArchivo from "../../contenedores/ContenedorArchivo.js"

class CarritosDaoArchivo extends ContenedorArchivo {

    constructor() {
        super('carritos.json')
    }

    async guardar(carrito) {
        return super.guardar({...carrito, productos: []})
    }
}

export default CarritosDaoArchivo