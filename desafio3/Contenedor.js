
const { promises: fs } = require('fs'); //to2 los imports que hagas del node va a tener valor a la hora de ejecutar el archivo.


class Contenedor {
    constructor(ruta) {
        this.ruta = ruta
    }


    async save(obj) {
        try {
            let isInProds = await fs.readFile(this.ruta, 'utf-8'); //Declaramos una variable para ver lo que hay dentro del productos.txt

            if (isInProds.length == 0) { //Si productos.txt no tiene ningun objeto dentro, 
                obj.id = 1; //le sumamos al objeto que se pasa por param, un id
                const arrayObj = [obj]; //Metemos el objeto que se pasa por parametro dentro de un array
                const objeto = JSON.stringify(arrayObj); //Transformamos ese objeto en formato string

                await fs.appendFile(this.ruta, objeto); //Sumamos el objeto al productos.txt
            }
            else { //Si productos.txt ya tiene objetos dentro,
                const prodsObj = JSON.parse(isInProds); //Hacemos el parse porque lo devuelve como string
                let arrayLength = prodsObj.length; //Declaramos una variable para ver cuantos objetos hay
                obj.id = arrayLength + 1; //Declaramos que el id del obj que pasamos por parametro sea 1 mas que el largo del array
                prodsObj.push(obj); //Le sumamos el objeto que pasamos por parametro al viejo objeto parseado
                const objeto = JSON.stringify(prodsObj); //Pasamos el array completo a string
                await fs.writeFile(this.ruta, objeto); //Sobreescribimos el archivo viejo
            }
            return console.log(`Id del obj : ${obj.id}`);
        }
        catch (error) {
            console.log(error)
        }
    }

    async getbyId(id) {
        const products = await this.getAll(); //Obtenemos todos los prods del archivo
        const productbyId = products.find(prod => prod.id == id); //Buscamos el producto que el id coincida con el que pasamos por param
        return productbyId; //devuielve el producto
    }
    async getAll() {
        try {
            const products = await fs.readFile(this.ruta, 'utf8'); //Esta trabajando con promesas pero no se escribe por el import
            return JSON.parse(products); //Devuelve todos los productos del archivo
        } catch (error) {
            console.log(error, 'hubo un error en el getAll')
            return [];
        }
    }
    async deleteById(id) {
        const products = await this.getAll();
        const newProducts = products.filter(prod => prod.id !== id); //retorna un array con todos los productos que no tengan el id que se le pasa por parametro
        newProducts.forEach(prod => { //Por cada producto del newProducts
            if (prod.id > id) { //Si el id del producto es mayor al id que pasamos por parametro,
                prod.id -- //Se le resta 1 al id de los productos cuyo id sea mayor que el id que pasamos por parametro
            } //Esto es xq si eliminamos un producto, y creamos uno nuevo, se le asignaria un id ya asignado, entonces restamos uno a todos los siguientes despues de eliminar uno
        });
        console.log(JSON.stringify(newProducts)) 
        await fs.writeFile(this.ruta, JSON.stringify(newProducts)) //Lo pasamos a formato string y sobreescribimos el archivo.
    }

    async deleteAll() {
        const arrayVacio = []
        await fs.writeFile(this.ruta, arrayVacio); //Vacuiamos el array de productos y lo sobreescribimos. 
    }

}

module.exports = Contenedor //Esto es para exportar este contenedor en otro archivo JS