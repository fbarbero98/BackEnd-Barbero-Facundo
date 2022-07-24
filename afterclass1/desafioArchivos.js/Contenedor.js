
const { promises: fs } = require('fs'); //to2 los imports que hagas del node va a tener valor a la hora de ejecutar el archivo.


class Contenedor {
    constructor(ruta) {
        this.ruta = ruta
    }


    async save(obj) {

    }
    async getbyId(id) {
         const products = await this.getAll(); //Obtenemos todos los prods del archivo
         const productbyId = products.find(prod => prod.id == id); //Buscamos el producto que el id coincida con el que pasamos por param
         return productbyId; //devuielve el producto
    }
    async getAll() {
        try {
            const products = await fs.readFile(this.ruta, 'utf8'); //Esta trabajando con promesas pero no se escribe por el import
            console.log('salio bien el getAll')
            return JSON.parse(products); //Devuelve todos los productos del archivo
        } catch (error) {
            console.log(error, 'hubo un error en el getAll')
            return [];
        }
    }
    async deleteById(id) {
        const products = await this.getAll();
        const newProducts = products.filter(prod => prod.id !== id); //retorna un array con todos los productos que no tengan el id que se le pasa por parametro
        products = newProducts //Le asigna el valor de newProducts a products
        return products;
    }
    async deleteAll() {

    }

}

module.exports = Contenedor //Esto es para exportar este contenedor en otro archivo JS