// import Contenedor from "./Contenedor"; esta es una forma de hacer el import


const Contenedor = require('./Contenedor'); //Esta es la forma en la que vamos a importar

async function main() {
    const product = new Contenedor('.productos.txt');

    console.log('Muestro todos los productos');
    let allProducts = await product.getAll(); //Hay que hacer el await porque es asincrono esto
    console.log(allProducts);

    const idToSearch = 1;
    console.log(`Muestro el producto con id ${idToSearch}`);
    let productById = await product.getbyId(idToSearch);
    console.log(productById);
}

main()