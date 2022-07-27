
const { promises: fs } = require('fs'); //to2 los imports que hagas del node va a tener valor a la hora de ejecutar el archivo.


class Contenedor {
    constructor(ruta) {
        this.ruta = ruta
    }


    async save(obj) {
        try {
            let isInProds = await fs.readFile(this.ruta, 'utf-8');

            if (isInProds.length == 0) {
                obj.id = 1;
                const arrayObj = [obj];
                const objeto = JSON.stringify(arrayObj);

                await fs.appendFile(this.ruta, objeto);
            }
            else {
                const prodsObj = JSON.parse(isInProds);
                let arrayLength = prodsObj.length;
                obj.id = arrayLength + 1;
                prodsObj.push(obj);
                const objeto = JSON.stringify(prodsObj);
                await fs.writeFile(this.ruta, objeto);
            }

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
        newProducts.forEach(prod => {
            if (prod.id > id) {
                prod.id --
            }
        });
        console.log(JSON.stringify(newProducts))
        //for (let index = newProducts.length; index > id ; index--) {
        //newProducts[index].id = newProducts[index].id - 1;  
        await fs.writeFile(this.ruta, JSON.stringify(newProducts))
    }

    async deleteAll() {
        const arrayVacio = []
        await fs.writeFile(this.ruta, arrayVacio);
    }

}

module.exports = Contenedor //Esto es para exportar este contenedor en otro archivo JS