// import Contenedor from "./Contenedor"; esta es una forma de hacer el import


const Contenedor = require('./Contenedor'); //Esta es la forma en la que vamos a importar

async function main() {
    const product = new Contenedor('./productos.txt');

    //! EJEMPLOS: 
    //? METODO SAVE:

    const obj = {
        name: 'Juan',
        apellido: 'perez'
    }
    await product.save(obj);

    //? METODO GET ALL:
    let allProducts = await product.getAll(); //Hay que hacer el await porque es asincrono esto
    console.log(allProducts);

    //? METODO GET BY ID: 

    const idToSearch = 2;
    let productById = await product.getbyId(idToSearch);
    console.log(productById);
    
    //? METODOS DELETE BY ID Y DELETE ALL :
    await product.deleteById(1);
    await product.deleteAll();
}

main()