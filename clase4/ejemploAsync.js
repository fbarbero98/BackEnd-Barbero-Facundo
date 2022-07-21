
//! PRIMER PARTE

//? SINCRONICO:

const delay = ret => {for(let i=0; i<ret*3e6; i++);} //esto es un bucle for que va creciendo a un numero muy grande para simular un retraso en la rta

function hacerTarea(num) { //hacerTarea hace un clg de la tarea con el parametro que pases como num
    console.log('haciendo tarea ' + num) //Se puede mejorar con template strings ``
    delay(1000) //Es para simular un retraso
}

console.log('inicio de tareas');
hacerTarea(1)
hacerTarea(2)
hacerTarea(3) //Hay 4 llamadas a la funcion hacer tareas
hacerTarea(4)
console.log('fin de tareas')
console.log('otras tareas ...')

//Esto es todo sincronico, para eso tenemos el delay

//? ASINCRONICO

function hacerTarea(num, cb) { //Recibe como parametro un numero y un CallBack (una funcion)
    console.log('haciendo tarea ' + num) //Se puede mejorar con templateStrings ``
    setTimeout(cb,2000) //El setTimeOut es lo que hace que se ejecute de manera async
    //Cuando pase el STO se va a ver "otras tareas"
}

console.log('inicio de tareas'); //Arranca con este clg
hacerTarea(1, () => { //llamamos a la primer funcion con el primer parametro y como segundo param pasamos la segunda func
    //Lo que pasa cuando se ejecuta el CB se ejecuta el clg de hacerTarea y luego el STO de la funcion
    hacerTarea(2, () => {
        hacerTarea(3, () => {
            hacerTarea(4, () => {
                console.log('fin de tareas')
            })
        })
    })
})
console.log('otras tareas ...')
