//! PRIMER PARTE DE LA CLASE:

//Muy importante ver bien en que carpeta estoy situado a la hora de usar node.

//Ejemplo1:

const personas =[
    {
        nombre : 'Facundo',
        edad : 24    
    },
    {
        nombre : 'Fernando',
        edad : 23    
    },
    {
        nombre : 'Francisco',
        edad : 26    
    }

];

//? Si quiero generar un array con solo los nombres de las personas hay 2 opciones con MAP:

//Version extensa

const regresarNombre = (persona) => { //Esto es una funcion flecha que recibe por parametro una persona y retorna su nombre

    return persona.nombre
};

// Asignar esa funcion al map

const nombreDePersonas = personas.map(regresarNombre);
console.log('esto es el map: ', nombreDePersonas);


// Version simple (La mas comun):
const nombreDePersonas2 = personas.map(persona => persona.nombre); //Return implicito
console.log('esto es el map 2: ', nombreDePersonas);
