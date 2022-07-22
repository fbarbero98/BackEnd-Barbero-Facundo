
const { promises: fs} = require('fs'); //to2 los imports que hagas del node va a tener valor a la hora de ejecutar el archivo.


class Contenedor {
    constructor(ruta) {
        this.ruta = ruta
    }


    async save(obj) {

    }
    async getbyId(obj) {
        
    }
    async getAll(obj) {

    }
    async deleteById(obj) {

    }
    async deleteAll(obj) {

    }

}

module.exports = Contenedor //Esto es para exportar este contenedor en otro archivo JS