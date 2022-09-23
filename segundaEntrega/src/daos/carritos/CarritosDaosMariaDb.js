import ContenedorSQL from "../../contenedores/ContenedorSQL.js"
import config from '../../config.js'

class CarritosDaoMariaDb extends ContenedorSQL {

    constructor() {
        super(config.mariaDb, config.mariaDb)
    }

    async guardar(carrito) {
        return super.guardar({...carrito, productos: []})
    }
}

export default CarritosDaoMariaDb