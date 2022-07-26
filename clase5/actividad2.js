//? Desarrollar un proyecto en node.js que declare un array de objetos de este tipo:
const productos = [
    { id: 1, nombre: 'Escuadra', precio: 323.45 },
    { id: 2, nombre: 'Calculadora', precio: 234.56 },
    { id: 3, nombre: 'Globo Terráqueo', precio: 45.67 },
    { id: 4, nombre: 'Paleta Pintura', precio: 456.78 },
    { id: 5, nombre: 'Reloj', precio: 67.89 },
    { id: 6, nombre: 'Agenda', precio: 78.90 }
]

//? Y obtenga la siguiente información de dicho array
//A) Los nombres de los productos en un string separados por comas.

function productosNombres(productos) {
    const productoNombre = productos.map(prod => prod.nombre);
    return productoNombre.join(', ')
}



//B) El precio total

function productosTotalPrice(productos) {
    /*let precioInicial = 0
    const precioTotal = productos.map(prod => {
        const precioFinal = precioInicial + prod.precio;
        precioInicial = precioFinal;
    
    })
    return precioTotal*/
    let precioTotal = 0;
    for (const producto of productos) {
        precioTotal += producto.precio;
    }
    return precioTotal
}

// C) El precio promedio


function precioPromedio(productos) {
    return productosTotalPrice(productos) / productos.length;
}



// D) El producto con menor precio


function getProductMin(productos) {
    if (productos.length == 0) {
        throw new Error('No se puede calcular el minimo de un array vacio')
    }
    let minPrice = productos[0].precio;
    let prod = productos[0];
    for (const producto of productos) {
        if (producto.precio < minPrice) {
            minPrice = producto.precio;
            prod = producto;
        }
    }
    return prod
}
//E) El producto con mayor precio


function getProductMax(productos) {
    if (productos.length == 0) {
        throw new Error('No se puede calcular el minimo de un array vacio')
    }
    let maxPrice = productos[0].precio;
    let prod = productos[0];
    for (const producto of productos) {
        if (producto.precio > maxPrice) {
            maxPrice = producto.precio;
            prod = producto;
        }
    }
    return prod
}

// F) Con los datos de los puntos 1 al 5 crear un objeto y representarlo por consola


const info2 = {
    nombres: productosNombres(productos),
    precioTotal: productosTotalPrice(productos),
    productoPrecioMax: getProductMax(productos),
    productoPrecioMin: getProductMin(productos),
    precioPromedio: precioPromedio(productos)
}
console.log(info2)
